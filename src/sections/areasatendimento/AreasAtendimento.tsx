import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { areasAtendimento } from "@/types/areas";
import styles from "./areasatendimento.module.css";

export default function AreasAtendimento() {
  return (
    <section className={styles.section} id="areas">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Cuidado especializado</span>
          <h2 className={styles.title}>Áreas de Atendimento</h2>
          <p className={styles.subtitle}>
            Escuta clínica para mulheres, gestantes, mães e tentantes em fases
            que pedem acolhimento.
          </p>
        </header>

        <div className={styles.grid}>
          {areasAtendimento.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className={styles.cardLink}
              aria-label={`Saiba mais sobre ${area.nome}`}
            >
              <article className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={area.imagem}
                    alt={`Imagem representando ${area.nome}`}
                    width={720}
                    height={460}
                    className={styles.image}
                  />
                </div>

                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{area.nome}</h3>
                  <p className={styles.description}>{area.descricao}</p>

                  <span className={styles.action}>
                    Saiba mais
                    <FiArrowRight className={styles.icon} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
