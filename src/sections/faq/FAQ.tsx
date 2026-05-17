"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./faq.module.css";

const WHATSAPP_URL = "https://wa.me/5511954886977";

const faqs = [
  {
    question: "Como eu sei se a terapia é para mim neste momento?",
    answer:
      "A terapia pode ajudar quando você sente que está repetindo padrões, vivendo emoções difíceis de nomear ou carregando tudo no automático. Não precisa esperar chegar ao limite: muitas vezes, o cuidado começa justamente quando você percebe que quer se escutar com mais calma.",
  },
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um encontro de acolhimento. Você pode falar sobre o que te trouxe, suas expectativas e o que tem sido mais urgente por aí. Não existe roteiro perfeito: a conversa vai se construindo no seu ritmo, com escuta, cuidado e sem julgamento.",
  },
  {
    question: "Com que frequência acontecem os atendimentos?",
    answer:
      "Geralmente os encontros acontecem uma vez por semana, porque essa constância ajuda o processo a ganhar profundidade. Mas a frequência pode ser conversada de acordo com a sua necessidade, disponibilidade e momento de vida.",
  },
  {
    question: "O atendimento online funciona mesmo?",
    answer:
      "Sim. O atendimento online pode ser tão cuidadoso quanto o presencial quando acontece em um ambiente reservado, com boa conexão e disponibilidade para estar presente. Ele também facilita a continuidade do processo para quem tem uma rotina mais cheia.",
  },
  {
    question: "O que é psicanálise?",
    answer:
      "A psicanálise é um processo terapêutico que ajuda a compreender emoções, conflitos e padrões que se repetem na vida. Ao longo das sessões, a pessoa passa a entender melhor sua história, e a origem de seus sofrimentos.",
  },
  {
    question: "Preciso saber exatamente o que dizer para começar?",
    answer:
      "Não precisa. Às vezes a chegada vem confusa mesmo: uma angústia, um cansaço, uma sensação de que algo não está bem. A terapia também serve para organizar essas palavras aos poucos, sem pressa de explicar tudo de uma vez.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`${styles.section} animeLeft`} id="faq">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Dúvidas frequentes</span>
          <h2 className={styles.title}>Antes de começar</h2>
          <p className={styles.subtitle}>
            Algumas respostas para te ajudar a chegar com mais tranquilidade ao
            processo terapêutico.
          </p>
          <p className={styles.ctaText}>
            Se não encontrou a resposta que desejava, entre em contato comigo
            pelo botão abaixo:
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Mais Informações</span>
            <FaWhatsapp aria-hidden="true" />
          </a>
        </header>

        <div className={styles.accordion}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-answer-${index}`;
            const buttonId = `faq-question-${index}`;

            return (
              <article
                key={item.question}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  id={buttonId}
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <FiChevronDown className={styles.icon} aria-hidden="true" />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.answerWrap}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
