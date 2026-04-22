import styles from "./Contact.module.css";

const LINKS = [
  { label: "Email",    val: "bhavitmishra@gmail.com",        href: "mailto:bhavitmishra@gmail.com" },
  { label: "GitHub",   val: "github.com/bhavitmishra",          href: "https://github.com/bhavitmishra" },
  { label: "LinkedIn", val: "linkedin.com/in/bhavitmishra",     href: "https://www.linkedin.com/in/bhavit-mishra-396281285/" },
  { label: "Resume",   val: "Download PDF →",             href: "#" },
];

export default function Contact() {
  return (
    <div id="contact" className={styles.section}>
      <div>
        <h2 className={styles.heading}>
          Let&apos;s build<br /><em>something.</em>
        </h2>
        <a href="mailto:bhavitmishra@gmail.com" className={styles.ctaEmail}>
          Get in touch →
        </a>
      </div>
      <div className={styles.links}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} className={styles.link}>
            <span className={styles.linkLabel}>{l.label}</span>
            <span className={styles.linkVal}>{l.val}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
