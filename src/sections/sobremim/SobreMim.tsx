import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./sobremim.module.css";

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
              Sou Ana Paula Veiga,{" "}
              <strong className={styles.highlight}>
                psicanalista formada em Recursos Humanos
              </strong>{" "}
              e apaixonada pelo desenvolvimento humano e pela{" "}
              <strong className={styles.highlight}>saúde mental</strong>. Após
              anos atuando com pessoas, decidi seguir meu antigo sonho de
              trabalhar na clínica e me dedicar integralmente à psicanálise.
            </p>

            <p>
              Minha trajetória inclui{" "}
              <strong className={styles.highlight}>
                atuação voluntária em uma ONG de apoio a mulheres em situação de
                violência
              </strong>
              , experiência que marcou profundamente minha prática. Hoje, tenho
              um olhar especial para a{" "}
              <strong className={styles.highlight}>
                saúde mental feminina
              </strong>
              , com foco em{" "}
              <strong className={styles.highlight}>
                gestação, maternidade e puerpério
              </strong>
              .
            </p>

            <p>
              Meu propósito é oferecer um{" "}
              <strong className={styles.highlight}>
                espaço acolhedor e seguro
              </strong>{" "}
              para promover{" "}
              <strong className={styles.highlight}>
                autoconhecimento, escuta e transformação emocional
              </strong>
              .
            </p>
          </div>

          <div className={styles.actions}>
            <a
              href="https://wa.me/"
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
