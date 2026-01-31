import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function ValueCard(props: {
  title: string;
  desc: string;
  href: string;
  meta: string;
}) {
  const { title, desc, href, meta } = props;

  return (
    <Link to={href} className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.cardTitle}>{title}</span>
        <span className={styles.cardMeta}>{meta}</span>
      </div>
      <div className={styles.cardDesc}>{desc}</div>
      <div className={styles.cardCta}>Open →</div>
    </Link>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Principal-level software architecture, hands-on. Deep dives, guides, and decisions built from real-world systems."
    >
      <main className={styles.page}>
        {/* Background */}
        <div className={styles.bg} aria-hidden="true">
          <div className={styles.glowA} />
          <div className={styles.glowB} />
          <div className={styles.grid} />
          <div className={styles.noise} />
          <div className={styles.vignette} />
        </div>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.kicker}>Author</div>

            <Heading as="h1" className={styles.title}>
              Hugo Moura
            </Heading>

            <p className={styles.lead}>
              I document how I design and evolve backend systems under real-world constraints.
              Trade-offs. Reliability. Execution.
            </p>

            <div className={styles.actions}>
              <Link to="/docs/00-start-here" className={styles.primary}>
                Explore the work
              </Link>
              <Link to="/blog" className={styles.secondary}>
                Blog
              </Link>
            </div>

            <div className={styles.signals}>
              <span className={styles.signal}>Architecture</span>
              <span className={styles.signal}>Distributed Systems</span>
              <span className={styles.signal}>Event-driven</span>
              <span className={styles.signal}>Observability</span>
              <span className={styles.signal}>.NET</span>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.portraitWrap}>
              <div className={styles.portraitHalo} aria-hidden="true" />
              <img
                src="/img/avatar.png"
                alt="Portrait photo"
                className={styles.portrait}
                width={360}
                height={360}
                loading="eager"
              />
              <div className={styles.portraitFrame} aria-hidden="true" />
            </div>

            <div className={styles.signature}>
              <div className={styles.signatureLine} aria-hidden="true" />
              <div className={styles.signatureText}>
                <div className={styles.signatureName}>Hugo Moura</div>
                <div className={styles.signatureRole}>Principal Software Engineer</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY STAY */}
        <section className={styles.why}>
          <div className={styles.whyTitle}>Content map</div>

          <div className={styles.cards}>
            <ValueCard
              title="Systems & Architecture"
              meta="architecture"
              href="/docs/02-deep-dives"
              desc="How systems behave under load, failure, and change."
            />
            <ValueCard
              title="Engineering Practice"
              meta="practice"
              href="/docs/01-guides"
              desc="Execution patterns, tooling, and operational choices."
            />
            <ValueCard
              title="Technical Decisions"
              meta="decisions"
              href="/docs/06-decisions"
              desc="Context, options considered, trade-offs, consequences, and validation signals."
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
