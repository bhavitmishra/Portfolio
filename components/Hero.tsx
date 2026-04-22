import styles from "./Hero.module.css";

const STACK = [
  "Next.js", "TypeScript", "React Native",
  "Node.js", "Hono", "Express",
  "PostgreSQL", "Prisma", "Redis",
  "Docker", "Turborepo", "AWS",  // 12 = clean 3×4 grid
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={`${styles.eyebrow} animate-fade-in`}>
          Full-stack developer · Indore, India
        </div>
        <h1 className={`${styles.name} animate-fade-up-1`}>
          Bhavit<br /><em>Mishra.</em>
        </h1>
        <p className={`${styles.desc} animate-fade-up-2`}>
          I build products end-to-end — from database schema to pixel-perfect UI.
          Currently focused on high-scale web apps and developer tooling.
        </p>
        <div className={`${styles.stackRow} animate-fade-up-3`}>
          <p>Stack</p>
          <div className={styles.pills}>
            {STACK.map((s) => (
              <span key={s} className={styles.pill}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.terminal} animate-fade-up-2`}>
        <div className={styles.terminalBar}>
          <span className={styles.dot} style={{ background: "#ff5f57" }} />
          <span className={styles.dot} style={{ background: "#ffbd2e" }} />
          <span className={styles.dot} style={{ background: "#28ca41" }} />
          <span className={styles.terminalTitle}>bhavit ~ zsh</span>
        </div>
        <div className={styles.terminalBody}>
          <Line prompt="~" cmd="whoami" />
          <Out>bhavit mishra · full-stack dev</Out>

          <Line prompt="~" cmd="ls projects/" />
          <Out>PassX&nbsp;&nbsp; ProfitEye&nbsp;&nbsp; Vrinmo&nbsp;&nbsp; medium-clone</Out>
            <Line prompt="~" cmd="cat backend.txt" />
<Out>node.js · hono · express</Out>

<Line prompt="~" cmd="cat frontend.txt" />
<Out>next.js · react · typescript · react native</Out>

<Line prompt="~" cmd="cat infra.txt" />
<Out>docker · redis · turborepo · aws</Out>
          <Line prompt="~" cmd="cat status.txt" />
          <Out highlight>open to work · available now</Out>

          <Line prompt="~" cmd="_" blink />
        </div>
      </div>
    </section>
  );
}

function Line({ prompt, cmd, blink }: { prompt: string; cmd: string; blink?: boolean }) {
  return (
    <div className={styles.line}>
      <span className={styles.prompt}>{prompt} $</span>
      <span className={styles.cmd}>{cmd}</span>
      {blink && <span className={styles.blink} />}
    </div>
  );
}

function Out({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`${styles.out} ${highlight ? styles.highlight : ""}`}>
      {children}
    </div>
  );
}