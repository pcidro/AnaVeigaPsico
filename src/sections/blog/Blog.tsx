import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiUser } from "react-icons/fi";
import styles from "./blog.module.css";
import { Post } from "@/types/postType";

type blogProps = {
  posts: Post[];
};

export default function Blog({ posts }: blogProps) {
  return (
    <section className={`${styles.section}`} id="blog">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Leituras & cuidado</span>
          <h2 className={styles.title}>Blog</h2>
          <p className={styles.subtitle}>
            Textos sobre emoções, maternidade e relações para acolher reflexões
            e oferecer novos caminhos de compreensão.
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
                    src={post.metadata.imagem_de_capa.url}
                    alt={post.title}
                    width={720}
                    height={460}
                    className={styles.image}
                  />
                </div>

                <div className={styles.content}>
                  {post.metadata.categoria && (
                    <span className={styles.categoryBadge}>
                      {post.metadata.categoria}
                    </span>
                  )}
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.description}>{post.metadata.resumo}</p>
                  <p className={styles.writtenby}>
                    <FiUser className={styles.authorIcon} />
                    Escrito por <span>{post.metadata.escrito_por}</span>
                  </p>
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
