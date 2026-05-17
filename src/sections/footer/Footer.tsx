import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import styles from "./footer.module.css";

const navigationLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Na mídia", href: "#na-midia" },
  { label: "Blog", href: "#blog" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
  {
    label: "Podcast",
    href: "https://open.spotify.com/",
    icon: FaSpotify,
  },
];

export default function Footer() {
  return (
    <footer className={`${styles.footer} animeLeft`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <Link href="#inicio" className={styles.logoLink}>
              <Image
                src="/img/logofooter.png"
                alt="Ana Veiga Psicanalista"
                width={320}
                height={250}
                className={styles.logo}
              />
            </Link>
            <p className={styles.subtitle}>
              Você não precisa carregar tudo sozinha.
            </p>
          </div>

          <nav className={styles.navColumn} aria-label="Navegação rápida">
            <h2 className={styles.columnTitle}>Navegação rápida</h2>
            <ul className={styles.navList}>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.socialColumn}>
            <h2 className={styles.columnTitle}>Redes sociais</h2>
            <ul className={styles.socialList}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.copy}>
          <p>© 2026 Ana Veiga. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
