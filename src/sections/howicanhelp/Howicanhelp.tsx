"use client";
import React from "react";
import styles from "./howicanhelp.module.css";
import {
  FaRegHeart,
  FaBullseye,
  FaRoute,
  FaChartLine,
  FaFlagCheckered,
  FaBrain,
  FaBaby,
  FaUserFriends,
  FaComments,
} from "react-icons/fa";

const HowICanHelp = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Como posso contribuir e te ajudar?</h2>
          <p className={styles.subtitle}>
            Atendimento Psicanalítico e Terapêutico Online
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}>
              <FaBrain />
            </div>
            <h3 className={styles.cardTitle}>Saúde Emocional</h3>
            <p className={styles.cardText}>
              Ansiedade, depressão, luto, crises existenciais e fortalecimento
              emocional.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}>
              <FaBaby />
            </div>
            <h3 className={styles.cardTitle}>Maternidade</h3>
            <p className={styles.cardText}>
              Desafios da maternidade, mães atípicas e pré-natal psicológico.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}>
              <FaUserFriends />
            </div>
            <h3 className={styles.cardTitle}>Relacionamentos</h3>
            <p className={styles.cardText}>
              Conflitos familiares, crises conjugais e reconstrução após
              términos.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}>
              <FaComments />
            </div>
            <h3 className={styles.cardTitle}>Formatos de Escuta</h3>
            <p className={styles.cardText}>
              Terapia individual ou casal, check-in no divã e grupos
              terapêuticos.
            </p>
          </div>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.header}>
          <h2 className={styles.title}>Minha Abordagem</h2>
        </div>

        <div className={styles.timelineContainer}>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.content}>
              <h3 className={styles.timelineTitle}>1. Acolhimento</h3>
              <p className={styles.timelineText}>
                Escuta atenta para entender sua história e sintomas sem
                julgamentos.
              </p>
            </div>
            <div className={styles.iconPlaceholder}>
              <FaRegHeart />
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.iconPlaceholder}>
              <FaBullseye />
            </div>
            <div className={styles.content}>
              <h3 className={styles.timelineTitle}>2. Definição do Objetivo</h3>
              <p className={styles.timelineText}>
                Alinhamento de expectativas e transformação de incômodos em
                metas reais.
              </p>
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.content}>
              <h3 className={styles.timelineTitle}>3. Plano Personalizado</h3>
              <p className={styles.timelineText}>
                Construção de um plano individual com estratégias para a sua
                necessidade.
              </p>
            </div>
            <div className={styles.iconPlaceholder}>
              <FaRoute />
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.iconPlaceholder}>
              <FaChartLine />
            </div>
            <div className={styles.content}>
              <h3 className={styles.timelineTitle}>4. Reavaliações</h3>
              <p className={styles.timelineText}>
                Revisões periódicas do progresso e ajustes no plano conforme sua
                evolução.
              </p>
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.content}>
              <h3 className={styles.timelineTitle}>5. Alta Terapêutica</h3>
              <p className={styles.timelineText}>
                Preparação para seguir com autonomia e clareza após alcançar os
                objetivos.
              </p>
            </div>
            <div className={styles.iconPlaceholder}>
              <FaFlagCheckered />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowICanHelp;
