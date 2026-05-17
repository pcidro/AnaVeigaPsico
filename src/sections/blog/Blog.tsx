import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "./blog.module.css";

const posts = [
  {
    title: "Maternidade sem idealização",
    slug: "maternidade-sem-idealizacao",
    description:
      "Reflexões sobre culpa, cansaço e presença possível para mães que também precisam ser cuidadas.",
    image: "/img/blog-maternidade.svg",
    alt: "Ilustração de acolhimento materno",
  },
  {
    title: "Ansiedade e escuta emocional",
    slug: "ansiedade-e-escuta-emocional",
    description:
      "Como perceber os sinais do corpo e abrir espaço para compreender o que a ansiedade tenta comunicar.",
    image: "/img/blog-ansiedade.svg",
    alt: "Ilustração sobre ansiedade e acolhimento emocional",
  },
  {
    title: "Relacionamentos e limites",
    slug: "relacionamentos-e-limites",
    description:
      "Caminhos para construir vínculos mais honestos, com afeto, clareza e respeito aos próprios limites.",
    image: "/img/blog-relacionamentos.svg",
    alt: "Ilustração sobre relacionamentos e limites",
  },
];

export default function Blog() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Leituras & cuidado</span>
          <h2 className={styles.title}>Blog</h2>
          <p className={styles.subtitle}>
            Conteúdos para atravessar emoções, maternidade e relações com mais
            presença.
          </p>
        </header>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.cardLink}
              aria-label={`Acessar o artigo ${post.title}`}
            >
              <article className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={720}
                    height={460}
                    className={styles.image}
                  />
                </div>

                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.description}>{post.description}</p>

                  <span className={styles.action}>
                    Acessar
                    <FiArrowRight className={styles.icon} aria-hidden="true" />
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
