import styles from "./About.module.css";

const STATS = [
  { value: "4+",  label: "Live projects" },
  { value: "∞",   label: "Stack layers" },
  { value: "0",   label: "Meetings preferred" },
];

export default function About() {
  return (
    <div id="about" className={styles.section}>
      <div className={styles.left}>
        <p className={styles.quote}>
          Building things that <em>actually ship</em> — not just look good in Figma.
        </p>
      </div>
      <div className={styles.right}>
        <p className={styles.body}>
          I&apos;m a full-stack developer and CS student based in Indore. I care about
          the whole product — not just my slice of it. From designing the DB schema
          to wiring up payment webhooks to making the UI feel right on a 5-year-old
          Android phone.
          <br /><br />
          I&apos;ve built production apps handling real transactions, competed in
          hackathons, and I write clean code that future-me won&apos;t regret.
        </p>
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <p>{s.value}</p>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
