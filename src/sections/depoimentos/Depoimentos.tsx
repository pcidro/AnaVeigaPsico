import { FiStar } from "react-icons/fi";
import { getDepoimentosGoogle } from "../../../serverActions/depoimentos";
import DepoimentosSlider from "./DepoimentosSlider";
import styles from "./depoimentos.module.css";

export default async function Depoimentos() {
  const depoimentos = await getDepoimentosGoogle();

  if (depoimentos.ok && depoimentos.reviews.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} id="depoimentos">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={styles.title}>Palavras de quem viveu o processo</h2>
          <p className={styles.subtitle}>
            Relatos de pacientes sobre sua experiência terapêutica e o impacto
            do cuidado psicológico em suas vidas.
          </p>

          {depoimentos.ok && (
            <div
              className={styles.ratingSummary}
              aria-label="Resumo das avaliações"
            >
              <span className={styles.ratingStars} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar key={index} />
                ))}
              </span>
              <span>
                5.0 no Google
                {depoimentos.userRatingCount
                  ? ` com ${depoimentos.userRatingCount} avaliações`
                  : ""}
              </span>
            </div>
          )}
        </header>

        {depoimentos.ok ? (
          <DepoimentosSlider
            reviews={depoimentos.reviews}
            placeUrl={depoimentos.placeUrl}
          />
        ) : (
          <p className={styles.emptyState}>{depoimentos.error}</p>
        )}
      </div>
    </section>
  );
}
