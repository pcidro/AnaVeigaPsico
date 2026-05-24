"use client";

import {
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FiArrowLeft, FiArrowRight, FiStar, FiUser } from "react-icons/fi";
import styles from "./depoimentos.module.css";
import { DepoimentoGoogle } from "@/types/googledepoimentostypes";
import Image from "next/image";
import { DepoimentosSliderProps, DragState } from "@/types/slidertypes";

function debounce(callback: () => void, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
      timer = null;
    }, delay);
  };
}

function getCardsPerPage() {
  if (typeof window === "undefined") return 3;
  if (window.matchMedia("(max-width: 680px)").matches) return 1;
  if (window.matchMedia("(max-width: 980px)").matches) return 2;
  return 3;
}

function chunkReviews(reviews: DepoimentoGoogle[], size: number) {
  const chunks: DepoimentoGoogle[][] = [];

  for (let index = 0; index < reviews.length; index += size) {
    chunks.push(reviews.slice(index, index + size));
  }

  return chunks;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function Stars({ rating }: { rating: number | null }) {
  const roundedRating = Math.round(rating ?? 5);

  return (
    <span className={styles.stars} aria-label={`${rating ?? 5} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <FiStar
          key={index}
          className={index < roundedRating ? styles.starFilled : styles.star}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function DepoimentosSlider({
  reviews,
  placeUrl,
}: DepoimentosSliderProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef<DragState>({
    finalPosition: 0,
    startX: 0,
    movement: 0,
    movePosition: 0,
  });
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const pages = useMemo(
    () => chunkReviews(reviews, cardsPerPage),
    [reviews, cardsPerPage],
  );
  const canNavigate = pages.length > 1;

  const moveSlide = useCallback((position: number) => {
    if (!slideRef.current) return;

    drag.current.movePosition = position;
    slideRef.current.style.transform = `translate3d(${position}px, 0, 0)`;
  }, []);

  const changeSlide = useCallback(
    (index: number) => {
      const slide = slideRef.current;
      const wrapper = wrapperRef.current;

      if (!slide || !wrapper || pages.length === 0) return;

      const safeIndex = Math.min(Math.max(index, 0), pages.length - 1);
      const page = slide.children[safeIndex] as HTMLElement | undefined;

      if (!page) return;

      const margin = (wrapper.offsetWidth - page.offsetWidth) / 2;
      const position = -(page.offsetLeft - margin);

      slide.style.transition = "transform .3s ease";
      moveSlide(position);
      drag.current.finalPosition = position;
      setActiveIndex(safeIndex);
    },
    [moveSlide, pages.length],
  );

  const activePrevSlide = useCallback(() => {
    changeSlide(activeIndex - 1);
  }, [activeIndex, changeSlide]);

  const activeNextSlide = useCallback(() => {
    changeSlide(activeIndex + 1);
  }, [activeIndex, changeSlide]);

  const updatePosition = (clientX: number) => {
    drag.current.movement = (drag.current.startX - clientX) * 1.6;
    return drag.current.finalPosition - drag.current.movement;
  };

  const onPointerMove = useCallback(
    (event: PointerEvent) => {
      if (!isDragging) return;
      moveSlide(updatePosition(event.clientX));
    },
    [isDragging, moveSlide],
  );

  const onPointerUp = useCallback(() => {
    if (!isDragging) return;

    const slide = slideRef.current;
    if (slide) slide.style.transition = "transform .3s ease";

    setIsDragging(false);
    drag.current.finalPosition = drag.current.movePosition;

    if (drag.current.movement > 120 && activeIndex < pages.length - 1) {
      activeNextSlide();
    } else if (drag.current.movement < -120 && activeIndex > 0) {
      activePrevSlide();
    } else {
      changeSlide(activeIndex);
    }
  }, [
    activeIndex,
    activeNextSlide,
    activePrevSlide,
    changeSlide,
    isDragging,
    pages.length,
  ]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!canNavigate) return;

    const slide = slideRef.current;
    if (slide) slide.style.transition = "";

    drag.current.startX = event.clientX;
    setIsDragging(true);
  };

  useEffect(() => {
    const updateCardsPerPage = () => setCardsPerPage(getCardsPerPage());
    const onResize = debounce(() => {
      updateCardsPerPage();
      changeSlide(activeIndex);
    }, 200);

    updateCardsPerPage();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex, changeSlide]);

  useEffect(() => {
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [onPointerMove, onPointerUp]);

  useEffect(() => {
    changeSlide(Math.min(activeIndex, pages.length - 1));
  }, [activeIndex, cardsPerPage, changeSlide, pages.length]);

  if (pages.length === 0) return null;

  return (
    <div className={styles.sliderShell}>
      <div
        className={styles.slideWrapper}
        ref={wrapperRef}
        onPointerDown={onPointerDown}
      >
        <div className={styles.slide} ref={slideRef}>
          {pages.map((page, pageIndex) => (
            <div
              key={page.map((review) => review.authorName).join("-")}
              className={`${styles.slidePage} ${
                pageIndex === activeIndex ? styles.activePage : ""
              } ${page.length < cardsPerPage ? styles.compactPage : ""}`}
              aria-hidden={pageIndex !== activeIndex}
            >
              {page.map((review) => (
                <article
                  className={styles.card}
                  key={`${review.authorName}-${review.text}`}
                >
                  <Stars rating={review.rating} />
                  <blockquote className={styles.quote}>
                    {review.text}
                  </blockquote>
                  <div className={styles.author}>
                    {review.authorPhoto ? (
                      <Image
                        src={review.authorPhoto}
                        alt=""
                        className={styles.avatar}
                        width={48}
                        height={48}
                      />
                    ) : (
                      <span
                        className={styles.avatarFallback}
                        aria-hidden="true"
                      >
                        {getInitials(review.authorName) || (
                          <FiUser aria-hidden="true" />
                        )}
                      </span>
                    )}
                    <div>
                      <p className={styles.authorName}>{review.authorName}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      {canNavigate && (
        <div className={styles.navigation}>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={activePrevSlide}
            disabled={activeIndex === 0}
            aria-label="Ver depoimentos anteriores"
          >
            <FiArrowLeft aria-hidden="true" />
          </button>
          <div className={styles.dots} aria-label="Navegação dos depoimentos">
            {pages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.dot} ${
                  index === activeIndex ? styles.activeDot : ""
                }`}
                onClick={() => changeSlide(index)}
                aria-label={`Ir para grupo de depoimentos ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={activeNextSlide}
            disabled={activeIndex === pages.length - 1}
            aria-label="Ver próximos depoimentos"
          >
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      )}

      {placeUrl && (
        <a
          className={styles.allReviewsLink}
          href={placeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Ver todos os depoimentos
        </a>
      )}
    </div>
  );
}
