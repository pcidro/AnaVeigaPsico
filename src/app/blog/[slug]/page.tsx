import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft, FiCalendar, FiClock, FiShare2 } from "react-icons/fi";
import getPostBySlug from "@/actions/getPostBySlug";
import { getDataHome } from "@/actions/getdata";
import styles from "./page.module.css";
import { Post } from "@/types/postType";

const WHATSAPP_URL = "https://wa.me/5511954886977";

type BlogParams = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  if (!date) return null;

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return null;

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

export default async function BlogPage({ params }: BlogParams) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const publishedAt = formatDate(post.metadata.data_da_publicacao);
  const content = post.metadata.conteudo ?? "";

  const allPostsResponse = await getDataHome();
  const allPosts: Post[] = allPostsResponse?.objects || [];
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const postUrl = `https://anaveigapsico.vercel.app/blog/${slug}`;

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${post.title} — ${post.metadata.resumo ?? ""}\n\n${postUrl}`,
  )}`;

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <Link href="/" className={styles.backLink}>
          <FiArrowLeft aria-hidden="true" />
          <span>Voltar para a home</span>
        </Link>

        <header className={styles.header}>
          <div className={styles.badgeRow}>
            <span className={styles.eyebrow}>Blog</span>
            {post.metadata.categoria && (
              <span className={styles.categoryBadge}>
                {post.metadata.categoria}
              </span>
            )}
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          {post.metadata.resumo && (
            <p className={styles.summary}>{post.metadata.resumo}</p>
          )}
          <div className={styles.meta}>
            <p className={styles.writtenby}>
              <Image
                src="/img/anasobre1.jpg"
                alt="Ana Veiga"
                width={44}
                height={44}
                className={styles.authorAvatar}
              />
              Por <span>{post.metadata.escrito_por}</span>
            </p>
            {publishedAt && (
              <time className={styles.date}>
                <FiCalendar className={styles.metaIcon} aria-hidden="true" />
                {publishedAt}
              </time>
            )}
            {post.metadata.tempo_de_leitura && (
              <p className={styles.readingTime}>
                <FiClock className={styles.metaIcon} aria-hidden="true" />
                {post.metadata.tempo_de_leitura} min de leitura
              </p>
            )}
          </div>
        </header>

        {post.metadata.imagem_de_capa?.url && (
          <div className={styles.cover}>
            <Image
              src={post.metadata.imagem_de_capa.url}
              alt={post.title}
              width={1200}
              height={720}
              priority
              className={styles.coverImage}
            />
          </div>
        )}

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className={styles.share}>
          <span className={styles.shareLabel}>
            <FiShare2 aria-hidden="true" />
            Compartilhar
          </span>
          <div className={styles.shareButtons}>
            <Link
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.shareBtn} ${styles.shareBtnWhatsapp}`}
              aria-label="Compartilhar no WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
              WhatsApp
            </Link>
          </div>
        </div>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Vamos conversar sobre isso?</h2>
          <p className={styles.ctaText}>
            Você pode iniciar seu processo com calma, no seu tempo, em um espaço
            de escuta e acolhimento.
          </p>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Quero saber mais
            <FaWhatsapp aria-hidden="true" />
          </Link>
        </section>

        {relatedPosts.length > 0 && (
          <section className={styles.relatedPostsSection}>
            <h2 className={styles.relatedTitle}>Continue lendo</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImageWrapper}>
                    <Image
                      src={relatedPost.metadata.imagem_de_capa.url}
                      alt={relatedPost.title}
                      width={400}
                      height={240}
                      className={styles.relatedImage}
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    {relatedPost.metadata.categoria && (
                      <span className={styles.categoryBadge}>
                        {relatedPost.metadata.categoria}
                      </span>
                    )}
                    <h3 className={styles.relatedCardTitle}>
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
