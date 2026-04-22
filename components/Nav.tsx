import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>Bhavit M.</span>
      <ul className={styles.links}>
        <li><a href="#projects">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="mailto:bhavitmishra@gmail.com" className={`${styles.cta} nav-cta`}>
        Hire me
      </a>
    </nav>
  );
}
