import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import {
  areasAtendimento,
  getAreaBySlug,
  type AreaAtendimento,
} from "@/types/areas";
import styles from "./page.module.css";

const WHATSAPP_URL = "https://wa.me/5511954886977";

type AreaPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return areasAtendimento.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return {
    title: `${area.nome} | Ana Veiga Psicanalista`,
    description: area.descricao,
  };
}

function AreaContent({ area }: { area: AreaAtendimento }) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src={area.imagem}
          alt={`Imagem representando ${area.nome}`}
          fill
          priority
          sizes="100vw"
          unoptimized={area.slug === "ansiedade-feminina"}
          className={styles.heroImage}
        />
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Área de atendimento</span>
          <h1 className={styles.title}>{area.nome}</h1>
          <p className={styles.heroSubtitle}>{area.descricao}</p>
        </div>
      </section>

      <section className={styles.body}>
        <Link href="/#areas" className={styles.backLink}>
          <FiArrowLeft aria-hidden="true" />
          <span>Voltar para áreas</span>
        </Link>

        <p className={styles.description}>{area.descricao}</p>

        <div className={styles.contentGrid}>
          <div className={styles.mainText}>{area.texto}</div>

          <aside className={styles.signs} aria-labelledby="sinais-title">
            <span className={styles.signsEyebrow}>Quando procurar</span>
            <h2 id="sinais-title" className={styles.signsTitle}>
              Sinais de que é pra você
            </h2>

            <ul className={styles.signsList}>
              {area.sinais.map((sinal) => (
                <li key={sinal}>
                  <FiCheck className={styles.checkIcon} aria-hidden="true" />
                  <span>{sinal}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Vamos conversar sobre isso?</h2>
          <p className={styles.ctaText}>
            Você pode iniciar seu processo com calma, no seu tempo, em um
            espaço de escuta e acolhimento.
          </p>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Quero iniciar meu processo
            <FaWhatsapp aria-hidden="true" />
          </Link>
        </section>
      </section>
    </main>
  );
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return <AreaContent area={area} />;
}
