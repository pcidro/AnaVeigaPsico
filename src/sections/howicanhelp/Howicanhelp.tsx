"use client";
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
    <section className={`${styles.section}`}>
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
              Terapia individual ou casal e grupos terapêuticos.
            </p>
          </div>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.header}>
          <h2 className={styles.title}>Como funcionam os atendimentos?</h2>
        </div>
        <div className={styles.timelineContainer}>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.content}>
              <h3 className={styles.timelineTitle}>1. Primeira conversa</h3>
              <p className={styles.timelineText}>
                No primeiro encontro, conversamos com calma para que eu possa
                conhecer sua história, entender o que você está vivendo e
                acolher suas demandas.
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
              <h3 className={styles.timelineTitle}>
                2. Entendimento dos objetivos
              </h3>
              <p className={styles.timelineText}>
                Juntas, identificamos o que está causando sofrimento e quais
                aspectos você deseja compreender, elaborar e transformar ao
                longo do processo.
              </p>
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.content}>
              <h3 className={styles.timelineTitle}>
                3. Início do acompanhamento
              </h3>
              <p className={styles.timelineText}>
                As sessões são conduzidas em um ambiente acolhedor e
                confidencial, onde você terá um espaço seguro para falar sobre
                suas experiências, emoções e desafios, no seu próprio tempo e
                com total respeito à sua história.
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
              <h3 className={styles.timelineTitle}>4. Evolução contínua</h3>
              <p className={styles.timelineText}>
                Ao longo do processo, acompanhamos seus avanços e percepções,
                promovendo reflexões e ajustes que favoreçam seu bem-estar
                emocional.
              </p>
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.content}>
              <h3 className={styles.timelineTitle}>
                5. Encerramento do processo
              </h3>
              <p className={styles.timelineText}>
                Quando os objetivos terapêuticos forem alcançados, o processo
                pode ser finalizado de forma gradual, para que você siga com
                mais autonomia, clareza e segurança.
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
