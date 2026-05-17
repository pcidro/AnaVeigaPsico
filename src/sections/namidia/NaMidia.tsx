import Image from "next/image";
import styles from "./namidia.module.css";
import { FiArrowRight } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";

export default function NaMidia() {
  return (
    <section className={styles.section} id="na-midia">
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
            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <Image
                  src="/img/cbn.png"
                  alt="Logo da CBN"
                  width={56}
                  height={56}
                  quality={100}
                  className={styles.logoImg}
                />

                <h3 className={styles.cardTitle}>CBN</h3>
              </div>
              <p className={styles.cardDesc}>
                Entrevista exclusiva na CBN sobre os impactos da ansiedade na
                rotina moderna e estratégias clínicas de enfrentamento.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <Image
                  src="/img/escoladenegocios.png"
                  alt="Logo da Escola de Negócios"
                  width={56}
                  height={56}
                  quality={100}
                  className={styles.logoImg}
                />
                <h3 className={styles.cardTitle}>Escola dos Negócios</h3>
              </div>
              <p className={styles.cardDesc}>
                Participação no podcast debatendo sobre a importância da saúde
                mental no ambiente corporativo e liderança humanizada.
              </p>
            </article>
          </div>

          <div className={styles.columnCenter}>
            <div className={styles.imageWrapper}>
              <Image
                src="/img/ananamidiaa.png"
                alt="Ana na Mídia"
                width={440}
                height={660}
                quality={100}
                priority
                className={styles.personImage}
              />
            </div>
          </div>

          <div className={styles.columnEdge}>
            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <Image
                  src="/img/spotifylogo.png"
                  alt="Logo Spotify"
                  width={120}
                  height={0}
                  style={{ height: "auto" }}
                  className={styles.spotifyLogo}
                />
              </div>
              <h3 className={styles.cardTitleSpotify}>Maternando no divã</h3>
              <p className={styles.cardDesc}>
                Adicione doses extras de saúde & acolhimento materno! Siga e
                ouça o nosso Podcast semanal focado em maternidade real.
              </p>
              <a href="#link-podcast" className={styles.cardAction}>
                <span>Acessar podcast</span>
                <FiArrowRight className={styles.arrowIcon} />
              </a>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  Palestras e workshops personalizados
                  <FaMicrophone className={styles.micIcon} />
                </h3>
              </div>
              <p className={styles.cardDesc}>
                Leve saúde mental, inteligência emocional e treinamentos
                comportamentais sob medida para a sua empresa ou evento.
              </p>
              <a
                href="https://wa.me/"
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
