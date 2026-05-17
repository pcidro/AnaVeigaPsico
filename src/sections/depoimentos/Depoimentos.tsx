"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./depoimentos.module.css";

const testimonials = [
  {
    quote:
      "Encontrei um espaço de escuta onde pude falar sem medo. Aos poucos, comecei a entender minhas emoções com mais gentileza.",
    context: "Atendimento individual",
  },
  {
    quote:
      "A maternidade ficou menos solitária quando percebi que eu também precisava ser acolhida. Foi um processo muito importante para mim.",
    context: "Acolhimento materno",
  },
  {
    quote:
      "Aprendi a reconhecer meus limites e a me posicionar com mais clareza nas relações. Me senti respeitada em cada etapa.",
    context: "Relacionamentos e limites",
  },
  {
    quote:
      "O processo me ajudou a organizar o que parecia confuso por dentro. Hoje consigo respirar antes de me cobrar tanto.",
    context: "Saúde emocional",
  },
];

const SLIDE_TIME = 5000;

export default function Depoimentos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const pauseDelayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback((index: number) => {
    const nextIndex = (index + testimonials.length) % testimonials.length;

    setActiveIndex(nextIndex);
  }, []);

  const next = useCallback(() => {
    if (!paused) show(activeIndex + 1);
  }, [activeIndex, paused, show]);

  const prev = useCallback(() => {
    if (!paused) show(activeIndex - 1);
  }, [activeIndex, paused, show]);

  const startPause = () => {
    pauseDelayRef.current = setTimeout(() => {
      setPaused(true);
      document.body.classList.add("paused");
    }, 300);
  };

  const stopPause = useCallback(() => {
    if (pauseDelayRef.current) clearTimeout(pauseDelayRef.current);
    setPaused(false);
    document.body.classList.remove("paused");
  }, []);

  useEffect(() => {
    if (paused) return;

    const timeout = setTimeout(() => {
      show(activeIndex + 1);
    }, SLIDE_TIME);

    return () => clearTimeout(timeout);
  }, [activeIndex, paused, show]);

  useEffect(() => {
    document.addEventListener("pointerup", stopPause);
    document.addEventListener("touchend", stopPause);

    return () => {
      document.removeEventListener("pointerup", stopPause);
      document.removeEventListener("touchend", stopPause);
      document.body.classList.remove("paused");
    };
  }, [stopPause]);

  return (
    <section className={`${styles.section}`} id="depoimentos">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={styles.title}>Palavras de quem viveu o processo</h2>
          <p className={styles.subtitle}>
            Relatos anônimos sobre escuta, acolhimento e cuidado emocional.
          </p>
        </header>

        <div className={styles.slide} aria-live="polite">
          <div className={styles.progressGroup}>
            {testimonials.map((testimonial, index) => (
              <span
                key={testimonial.context}
                className={styles.progressTrack}
                aria-hidden="true"
              >
                <span
                  className={`${styles.progressBar} ${
                    index === activeIndex ? styles.active : ""
                  } ${index < activeIndex ? styles.completed : ""} ${
                    paused ? styles.paused : ""
                  }`}
                  style={
                    index === activeIndex
                      ? { animationDuration: `${SLIDE_TIME}ms` }
                      : undefined
                  }
                />
              </span>
            ))}
          </div>

          <div className={styles.slideElements}>
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.quote}
                className={`${styles.testimonial} ${
                  index === activeIndex ? styles.testimonialActive : ""
                }`}
              >
                <span className={styles.context}>{testimonial.context}</span>
                <blockquote className={styles.quote}>
                  {testimonial.quote}
                </blockquote>
                <p className={styles.signature}>Depoimento anônimo</p>
              </article>
            ))}
          </div>

          <div className={styles.controls} onPointerDown={startPause}>
            <button
              type="button"
              className={styles.controlButton}
              onPointerUp={prev}
              aria-label="Depoimento anterior"
            >
              <FiArrowLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className={styles.controlButton}
              onPointerUp={next}
              aria-label="Próximo depoimento"
            >
              <FiArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
