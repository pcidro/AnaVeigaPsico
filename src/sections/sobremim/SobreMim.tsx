import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./sobremim.module.css";

const WHATSAPP_URL = "https://wa.me/5511954886977";

export default function SobreMim() {
  return (
    <section className={`${styles.section}`} id="sobre">
      <div className={styles.container}>
        <div className={styles.media}>
          <div className={styles.badge}>
            <span>Escuta clínica</span>
            <strong>Saúde mental feminina</strong>
          </div>

          <div className={styles.imageLarge}>
            <Image
              src="/img/anasobre1.jpg"
              alt="Ana Paula Veiga sorrindo"
              fill
              sizes="(max-width: 768px) 74vw, 360px"
              className={styles.image}
            />
          </div>

          <div className={styles.imageSmall}>
            <Image
              src="/img/anasobre2.jpg"
              alt="Ana Paula Veiga em atendimento"
              fill
              sizes="(max-width: 768px) 52vw, 260px"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Sobre mim</span>
          <h2 className={styles.title}>
            Uma escuta acolhedora para mulheres em diferentes fases da vida.
          </h2>

          <div className={styles.text}>
            <p>
              Sou Ana Veiga, cristã, esposa, mãe do Benjamim e 👼🏽👼🏽,{" "}
              <strong className={styles.highlight}>
                psicanalista e terapeuta familiar
              </strong>
              , com atuação voltada à{" "}
              <strong className={styles.highlight}>
                saúde mental feminina e materna
              </strong>
              .
            </p>

            <p>
              Atendo mulheres, gestantes e mães que enfrentam ansiedade,
              sobrecarga emocional, conflitos nos relacionamentos, desafios da
              maternidade e processos de autoconhecimento.
            </p>

            <p>
              Graduada em Recursos Humanos e apaixonada pelo desenvolvimento
              humano, após anos trabalhando diretamente com pessoas, fiz uma
              transição de carreira para seguir meu antigo sonho de atuar na
              clínica e me dedicar integralmente à psicanálise.
            </p>

            <p>
              Minha vivência com a maternidade, incluindo a experiência da perda
              gestacional, também atravessa minha escuta clínica, tornando meu
              olhar ainda mais sensível para as dores emocionais femininas, os
              processos de luto e os desafios silenciosos que muitas mulheres
              enfrentam.
            </p>

            <p>
              Hoje, meu trabalho tem um olhar especial para{" "}
              <strong className={styles.highlight}>
                a gestação, o puerpério, a maternidade e a saúde emocional da
                mulher
              </strong>
              , oferecendo um{" "}
              <strong className={styles.highlight}>
                espaço seguro, acolhedor e sem julgamentos
              </strong>{" "}
              para promover{" "}
              <strong className={styles.highlight}>
                escuta, elaboração emocional e transformação
              </strong>
              .
            </p>
          </div>

          <div className={styles.actions}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCta}
            >
              <FaWhatsapp aria-hidden="true" />
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
