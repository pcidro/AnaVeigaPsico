import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/5511954886977";

export default function Hero() {
  return (
    <>
      <section className={styles.hero} id="inicio">
        <div className={styles.heroBgDesktop}>
          <Image
            src="/img/herodesktop.png"
            alt="Background Ana Veiga"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className={styles.bgImage}
          />
        </div>

        <div className={styles.heroBgMobile}>
          <Image
            src="/img/heromobile.png"
            alt="Background Ana Veiga Mobile"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className={styles.bgImage}
          />
        </div>

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>
            Psicanalista especializada em saúde emocional de mulheres
          </span>

          <h1 className={styles.heroTitle}>
            Você não precisa carregar tudo sozinha.
          </h1>

          <p className={styles.heroDescription}>
            Atendimento psicanalítico online para desafios da maternidade,
            ansiedade sobrecarga emocional, autoestima, luto, relacionamentos e
            saúde mental feminina.
          </p>

          <Link
            href={WHATSAPP_URL}
            id="btn-agendar"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Agendar minha consulta
            <FaWhatsapp className={styles.ctaIcon} />
          </Link>
        </div>
      </section>

      <div className={styles.scrollingStrip}>
        <div className={styles.scrollingTrack}>
          <div className={styles.scrollingContent}>
            <span>
              Ansiedade • Depressão • Autoconhecimento • Relacionamentos •
              Maternidade • Autoestima • Limites • Luto • Identidade • Bem-estar
              •&nbsp;
            </span>
          </div>
          <div className={styles.scrollingContent} aria-hidden="true">
            <span>
              Ansiedade • Depressão • Autoconhecimento • Relacionamentos •
              Maternidade • Autoestima • Limites • Luto • Identidade • Bem-estar
              •&nbsp;
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
