import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import getPostBySlug from "@/actions/getPostBySlug";
import styles from "./page.module.css";

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

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <Link href="/" className={styles.backLink}>
          <FiArrowLeft aria-hidden="true" />
          <span>Voltar para a home</span>
        </Link>

        <header className={styles.header}>
          <span className={styles.eyebrow}>Blog</span>
          <h1 className={styles.title}>{post.title}</h1>
          {post.metadata.resumo && (
            <p className={styles.summary}>{post.metadata.resumo}</p>
          )}
          {publishedAt && <time className={styles.date}>{publishedAt}</time>}
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
      </article>
    </main>
  );
}
