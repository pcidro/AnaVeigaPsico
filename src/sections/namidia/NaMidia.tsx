"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./namidia.module.css";
import { FiArrowRight } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_URL = "https://wa.me/5511954886977";
const CBN_INTERVIEW_URL = "https://www.youtube.com/watch?v=AchH8Gcykj4&t=2s";
const BUSINESS_SCHOOL_URL = "https://www.youtube.com/watch?v=x7Mz4t1kdaU&t=1s";
const YOUTUBE_URL = "https://www.youtube.com/@maternandonodiv%C3%A3";

export default function NaMidia() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || cards.length === 0) {
      return;
    }

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add(
        {
          isDesktop: "(min-width: 541px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const { isDesktop, reduceMotion } = conditions as {
            isDesktop: boolean;
            reduceMotion: boolean;
          };

          if (!isDesktop || reduceMotion) {
            gsap.set(cards, { clearProps: "opacity,transform" });
            return;
          }

          const getBaseX = (card: HTMLElement) => {
            const transform = window.getComputedStyle(card).transform;

            if (!transform || transform === "none") {
              return 0;
            }

            return new DOMMatrixReadOnly(transform).m41;
          };

          const baseXByCard = new WeakMap<HTMLElement, number>();

          cards.forEach((card) => {
            baseXByCard.set(card, getBaseX(card));
          });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: section,
                start: "top 40%",
                once: true,
              },
              onComplete: () => {
                gsap.set(cards, { clearProps: "opacity,transform" });
              },
            })
            .fromTo(
              cards,
              {
                opacity: 0,
                x: (_, card) => {
                  const element = card as HTMLElement;
                  const baseX = baseXByCard.get(element) ?? 0;
                  const direction =
                    element.dataset.mediaSide === "left" ? -1 : 1;

                  return baseX + direction * 70;
                },
              },
              {
                opacity: 1,
                x: (_, card) => baseXByCard.get(card as HTMLElement) ?? 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.18,
              },
            );
        },
      );
    }, section);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  const registerCard = (card: HTMLElement | null) => {
    if (card && !cardsRef.current.includes(card)) {
      cardsRef.current.push(card);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} animeLeft`}
      id="na-midia"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Presença & Voz</span>
          <h2 className={styles.title}>Na Mídia</h2>
          <p className={styles.subtitle}>
            Entrevistas, Eventos, Palestras e Podcast
          </p>
        </header>

        <div className={styles.grid}>
          <div className={styles.columnEdge}>
            <article
              ref={registerCard}
              data-media-side="left"
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <Image
                  src="/img/cbn.png"
                  alt="Logo da CBN"
                  width={56}
                  height={56}
                  quality={75}
                  className={styles.logoImg}
                />

                <h3 className={styles.cardTitle}>CBN</h3>
              </div>
              <p className={styles.cardDesc}>
                Uma conversa sobre saúde emocional, ansiedade e os desafios de
                sustentar a rotina sem deixar de olhar para o que acontece por
                dentro.
              </p>
              <a
                href={CBN_INTERVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardAction}
              >
                <span>Acessar entrevista completa</span>
                <FiArrowRight className={styles.arrowIcon} />
              </a>
            </article>

            <article
              ref={registerCard}
              data-media-side="left"
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <Image
                  src="/img/escoladenegocios.png"
                  alt="Logo da Escola de Negócios"
                  width={56}
                  height={56}
                  quality={75}
                  className={styles.logoImg}
                />
                <h3 className={styles.cardTitle}>Escola dos Negócios</h3>
              </div>
              <p className={styles.cardDesc}>
                No episódio “Os Desafios Reais da Maternidade”, Ana fala sobre
                psicanálise, acolhimento e as camadas emocionais que atravessam
                a maternidade possível.
              </p>
              <a
                href={BUSINESS_SCHOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardAction}
              >
                <span>Acessar episódio</span>
                <FiArrowRight className={styles.arrowIcon} />
              </a>
            </article>
          </div>

          <div className={styles.columnCenter}>
            <div className={styles.imageWrapper}>
              <Image
                src="/img/ananamidiaa.png"
                alt="Ana na Mídia"
                width={440}
                height={660}
                quality={75}
                priority
                className={styles.personImage}
              />
            </div>
          </div>

          <div className={styles.columnEdge}>
            <article
              ref={registerCard}
              data-media-side="right"
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <Image
                  src="/img/spotifylogo.png"
                  alt="Logo Spotify"
                  width={120}
                  height={120}
                  className={styles.spotifyLogo}
                />
              </div>
              <h3 className={styles.cardTitleSpotify}>Maternando no divã</h3>
              <p className={styles.cardDesc}>
                Um espaço de conversa sobre maternidade real, saúde emocional e
                os sentimentos que muitas mães vivem, mas nem sempre conseguem
                dizer em voz alta.
              </p>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardAction}
              >
                <span>Acessar podcast</span>
                <FiArrowRight className={styles.arrowIcon} />
              </a>
            </article>

            <article
              ref={registerCard}
              data-media-side="right"
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  Palestras e workshops personalizados
                  <FaMicrophone className={styles.micIcon} />
                </h3>
              </div>
              <p className={styles.cardDesc}>
                Encontros pensados para empresas, eventos e grupos que desejam
                falar sobre saúde mental, vínculos e cuidado emocional de forma
                sensível e acessível.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardAction}
              >
                <span>Me contrate aqui</span>
                <FiArrowRight className={styles.arrowIcon} />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
