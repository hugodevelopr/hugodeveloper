import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Pill(props: { title: string; desc: string; href: string }) {
  const { title, desc, href } = props;

  return (
    <Link to={href} className={styles.pill}>
      <div className={styles.pillTitle}>{title}</div>
      <div className={styles.pillDesc}>{desc}</div>
    </Link>
  );
}

function HomeHero() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <img
          className={styles.avatar}
          src="/img/me.png"
          alt="Portrait photo"
          width={160}
          height={160}
          loading="eager"
        />

        <div className={styles.heroText}>
          <Heading as="h1" className={styles.title}>
            {siteConfig.title}
          </Heading>

          <p className={styles.tagline}>{siteConfig.tagline}</p>

          <p className={styles.lead}>
            I write about building resilient backend systems: architecture trade-offs, reliability,
            event-driven patterns, and pragmatic engineering leadership — with code-level depth.
          </p>

          <div className={styles.cta}>
            <Link className="button button--primary button--lg" to="/docs/00-start-here">
              Start Here
            </Link>
            <Link className="button button--secondary button--lg" to="/blog">
              Read the Blog
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.panel}>
          <div className={styles.panelTitle}>Focus areas</div>
          <ul className={styles.list}>
            <li>System design & architecture trade-offs</li>
            <li>Distributed systems & reliability</li>
            <li>Event-driven patterns, messaging, idempotency</li>
            <li>.NET backend engineering (hands-on)</li>
            <li>Observability: tracing, metrics, structured logs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomeSections() {
  return (
    <>
      <section className={styles.grid}>
        <Pill
          title="Guides"
          desc="Actionable how-tos you can apply on real systems."
          href="/docs/01-guides"
        />
        <Pill
          title="Deep Dives"
          desc="Long-form breakdowns: failure modes, scalability, and trade-offs."
          href="/docs/02-deep-dives"
        />
        <Pill
          title="Decisions"
          desc="Public decision records (mini-ADRs): what I chose and why."
          href="/docs/06-decisions"
        />
        <Pill
          title="Reference"
          desc="Concepts, patterns, and definitions — evergreen."
          href="/docs/03-reference"
        />
      </section>

      <section className={styles.latest}>
        <div className={styles.sectionTitle}>If you only read one thing</div>
        <div className={styles.reco}>
          <Link to="/docs/00-start-here" className={styles.recoLink}>
            Start Here → how to navigate this site and find the best content
          </Link>
        </div>

        <div className={clsx(styles.sectionTitle, styles.sectionTitleSpacer)}>Latest</div>

        <div className={styles.latestLinks}>
          <Link to="/blog" className={styles.linkRow}>
            <span>Blog</span>
            <span className={styles.linkRowMeta}>new posts and opinions</span>
          </Link>

          <Link to="/docs/02-deep-dives" className={styles.linkRow}>
            <span>Deep Dives</span>
            <span className={styles.linkRowMeta}>architectural breakdowns</span>
          </Link>

          <Link to="/docs/06-decisions" className={styles.linkRow}>
            <span>Decisions</span>
            <span className={styles.linkRowMeta}>mini-ADRs</span>
          </Link>
        </div>
      </section>
    </>
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
        <HomeHero />
        <HomeSections />
      </main>
    </Layout>
  );
}
