"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.drawerOpen);
    } else {
      document.body.classList.remove(styles.drawerOpen);
    }
    return () => document.body.classList.remove(styles.drawerOpen);
  }, [isOpen]);

  return (
    <>
      <header className={styles.siteHeader}>
        <div className={styles.headerContent}>
          <Link href="#">
            <Image
              src="/img/logo.png"
              height={250}
              width={320}
              alt="Ana Veiga Psicanalista"
              className={styles.logoImg}
            />
          </Link>

          <nav className={styles.desktopNav} aria-label="Navegação Principal">
            <ul className={styles.navList}>
              <li>
                <Link href="#inicio" className={styles.navLink}>
                  Início
                </Link>
              </li>
              <li>
                <Link href="#sobre" className={styles.navLink}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className={styles.navLink}>
                  Depoimentos
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            href="#agendar"
            className={`${styles.btnCta} ${styles.desktopCta}`}
          >
            Agende uma Sessão
          </Link>

          <button
            className={styles.mobileMenuBtn}
            aria-label="Abrir menu mobile"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </header>

      <div
        className={`${styles.drawerOverlay} ${isOpen ? styles.active : ""}`}
        aria-hidden={!isOpen}
        onClick={closeMenu}
      ></div>

      <aside
        className={`${styles.mobileDrawer} ${isOpen ? styles.active : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.drawerTop}>
          <Link href="#" className={styles.drawerLogo} onClick={closeMenu}>
            <Image
              src="/img/logo.png"
              height={250}
              width={320}
              alt="Ana Veiga Psicanalista"
              className={styles.drawerLogoImg}
            />
          </Link>
          <button
            className={styles.closeDrawerBtn}
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={styles.drawerDivider}></div>

        <nav className={styles.mobileNavContainer}>
          <ul className={styles.mobileNavList}>
            <li>
              <Link
                href="#inicio"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="#sobre"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#depoimentos"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                Depoimentos
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.drawerFooter}>
          <Link
            href="#agendar"
            className={`${styles.mobileCta}`}
            onClick={closeMenu}
          >
            Agende uma Sessão
          </Link>
        </div>
      </aside>
    </>
  );
}
