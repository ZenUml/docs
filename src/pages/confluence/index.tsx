import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';
import {
  IconArrowsLeftRight,
  IconSitemap,
  IconSchema,
  IconTopologyStar3,
  IconApi,
  IconBoxMultiple,
  IconCodeDots,
  IconShieldLock,
  IconBolt,
  IconMaximize,
  IconFileExport,
  IconHistory,
  IconStarFilled,
  IconCircleCheck,
} from '@tabler/icons-react';

import styles from './index.module.css';

const MARKETPLACE_LITE =
  'https://marketplace.atlassian.com/search?query=zenuml+lite&hosting=cloud&product=confluence';

/**
 * FAQ copy lives here once; the visible accordion and the FAQPage JSON-LD are
 * both derived from it, so the structured data always matches the page text
 * (a Google requirement for FAQ rich results).
 */
const faqs: { q: string; a: string }[] = [
  {
    q: 'What diagram types does ZenUML for Confluence support?',
    a: 'Six types from one macro: ZenUML sequence diagrams (text-based, UML 2.5.1), Mermaid (flowcharts, Gantt, ER, class, state, pie and more), PlantUML (class, activity, component, use-case, deployment), DrawIO drag-and-drop flowcharts and graphs, OpenAPI/Swagger spec rendering, and Embed for reusing a diagram from another page or space.',
  },
  {
    q: 'Is ZenUML for Confluence free?',
    a: 'Yes — ZenUML Lite is completely free, no credit card required. The free Lite plan supports all six diagram types and allows up to 100 diagrams per Confluence space. For teams that need unlimited diagrams across all spaces, the paid Full version is available via the Atlassian Marketplace on a per-user subscription.',
  },
  {
    q: 'How does ZenUML compare to Gliffy and Lucidchart?',
    a: 'ZenUML stores diagrams as plain text (ZenUML DSL, Mermaid, PlantUML), making them versionable and diffable. One app covers ZenUML, Mermaid, PlantUML, DrawIO and OpenAPI, where Gliffy and Lucidchart are format-specific. ZenUML, Mermaid, DrawIO and OpenAPI render in-browser, so that diagram content never reaches ZenUML servers; PlantUML is the exception — its source is sent to the public plantuml.com rendering service, standard for PlantUML integrations. And the Lite tier is genuinely free, not a timed trial.',
  },
  {
    q: 'Can I use Mermaid syntax in Confluence with ZenUML?',
    a: 'Yes. ZenUML for Confluence includes a full Mermaid.js renderer. Write any valid Mermaid diagram — flowcharts, sequence diagrams, Gantt charts, ER diagrams, class diagrams, state diagrams, pie charts — directly in the macro editor. The live preview updates as you type. Diagrams are stored as Mermaid source text in Confluence custom content and rendered in the browser on every page view.',
  },
  {
    q: 'Does ZenUML support DrawIO diagrams in Confluence?',
    a: 'Yes. ZenUML for Confluence includes the DrawIO engine for flowcharts, network diagrams, org charts and general-purpose graphs. The DrawIO editor opens in a fullscreen modal inside Confluence with the full canvas — shapes, connectors, layers and export. No separate DrawIO account or subscription is required.',
  },
  {
    q: 'Is my diagram content sent to external servers?',
    a: 'ZenUML, Mermaid, DrawIO and OpenAPI render entirely in the browser using client-side engines — your diagram source and rendered output are never transmitted to ZenUML servers for those types. PlantUML is the exception: its source is sent to the public plantuml.com rendering service to produce the image, which is standard for how PlantUML works in every Confluence integration. Diagrams are stored as Confluence custom content within your Atlassian instance, which suits teams with strict data residency or confidentiality requirements — factor the PlantUML exception in if that applies to you.',
  },
  {
    q: 'What is the difference between the Lite and Full versions?',
    a: 'Lite is free and supports up to 100 diagrams per Confluence space, with all six diagram types included. Full removes the per-space limit and is billed per user via the Atlassian Marketplace.',
  },
  {
    q: 'How do I install ZenUML in Confluence?',
    a: 'Go to the Atlassian Marketplace and search for "ZenUML". Choose the Lite (free) or Full (paid) listing, click "Get it now", select your Confluence Cloud site and confirm. Then edit any page, type /zenuml, and pick a diagram type.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ZenUML for Confluence',
    alternateName: ['ZenUML Sequence Diagrams for Confluence', 'ZenUML Lite'],
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Diagramming',
    operatingSystem: 'Atlassian Confluence Cloud',
    url: 'https://zenuml.com/confluence/',
    description:
      'ZenUML for Confluence is an Atlassian Forge app that enables teams to create and maintain diagrams directly inside Confluence Cloud pages. It supports six diagram types: ZenUML sequence diagrams (OMG UML 2.5.1), Mermaid, PlantUML, DrawIO flowcharts, OpenAPI/Swagger specs, and embedded diagrams. ZenUML, Mermaid, DrawIO and OpenAPI render in the browser; PlantUML is the exception and is sent to the public plantuml.com rendering service.',
    featureList: [
      'ZenUML sequence diagrams (OMG UML 2.5.1 compliant)',
      'Mermaid diagrams',
      'DrawIO flowcharts and graphs',
      'PlantUML diagrams',
      'OpenAPI / Swagger specification rendering',
      'Diagram embedding',
      'Fullscreen editor with live preview',
      'Export to PNG',
      'Version history',
      'AI-assisted syntax repair and title suggestions; Diagramly AI assistant on Full',
      'Privacy-first: ZenUML, Mermaid, DrawIO and OpenAPI render in-browser (PlantUML uses plantuml.com)',
      'Copy diagram source code',
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'Lite (Free)',
        price: '0',
        priceCurrency: 'USD',
        description:
          'Free plan — up to 100 diagrams per Confluence space. Includes ZenUML, Mermaid, DrawIO, PlantUML, OpenAPI, and Embed types.',
      },
      {
        '@type': 'Offer',
        name: 'Full (Paid)',
        description:
          'Unlimited diagrams. Available via Atlassian Marketplace subscription, billed per-user.',
        url: 'https://marketplace.atlassian.com/search?query=zenuml+confluence&hosting=cloud&product=confluence',
      },
    ],
    publisher: { '@type': 'Organization', name: 'P&D VISION' },
    downloadUrl: MARKETPLACE_LITE,
    screenshot:
      'https://zenuml.com/img/docs/product-zenuml-for-confluence-05.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
];

/** The signature element: real ZenUML DSL, colored like the actual editor. */
function DslCard() {
  return (
    <pre className={styles.dslCard} aria-label="ZenUML DSL example">
      <code>
        <span className={styles.dslComment}>{'// POST /orders'}</span>
        {'\n'}
        OrderController.<span className={styles.dslMethod}>create</span>
        (payload) {'{'}
        {'\n'}
        {'  '}OrderService.<span className={styles.dslMethod}>create</span>
        (payload) {'{'}
        {'\n'}
        {'    '}order = <span className={styles.dslKeyword}>new</span>{' '}
        Order(payload)
        {'\n'}
        {'    '}
        <span className={styles.dslKeyword}>par</span> {'{'}
        {'\n'}
        {'      '}PurchaseService.
        <span className={styles.dslMethod}>createPO</span>(order)
        {'\n'}
        {'      '}InvoiceService.
        <span className={styles.dslMethod}>createInvoice</span>(order)
        {'\n'}
        {'    }'}
        {'\n'}
        {'  }'}
        {'\n'}
        {'}'}
      </code>
    </pre>
  );
}

const diagramTypes = [
  {
    title: 'ZenUML Sequence',
    href: '/confluence/diagram-types/sequence-diagrams/',
    icon: <IconArrowsLeftRight size={28} stroke={1.75} />,
    text: 'UML 2.5.1 sequence diagrams from a concise, readable text syntax. Live preview and code-to-diagram highlighting.',
  },
  {
    title: 'Mermaid',
    href: '/confluence/diagram-types/mermaid/',
    icon: <IconSitemap size={28} stroke={1.75} />,
    text: 'Full Mermaid.js support — flowcharts, sequence, Gantt, ER, class, state and pie charts, written directly in the page.',
  },
  {
    title: 'PlantUML',
    href: '/confluence/diagram-types/plantuml/',
    icon: <IconSchema size={28} stroke={1.75} />,
    text: 'Class, component, activity, use-case and deployment diagrams. Paste existing PlantUML source straight in.',
  },
  {
    title: 'DrawIO / Graph',
    href: '/confluence/diagram-types/drawio/',
    icon: <IconTopologyStar3 size={28} stroke={1.75} />,
    text: 'Drag-and-drop flowcharts, network diagrams and org charts on the DrawIO engine. No DrawIO account needed.',
  },
  {
    title: 'OpenAPI / Swagger',
    href: '/confluence/diagram-types/openapi/',
    icon: <IconApi size={28} stroke={1.75} />,
    text: 'Render an OpenAPI or Swagger spec as browsable API documentation that lives on the page and stays current.',
  },
  {
    title: 'Embed',
    href: '/confluence/diagram-types/',
    icon: <IconBoxMultiple size={28} stroke={1.75} />,
    text: 'Reuse a diagram from another page or space as a live reference — one source of truth, many pages.',
  },
];

const features = [
  {
    title: 'Diagram as code',
    icon: <IconCodeDots size={32} stroke={1.75} />,
    text: 'Diagrams are plain text — reviewable, versionable, diffable. The rendered diagram can never drift from its source.',
  },
  {
    title: 'Private by design',
    icon: <IconShieldLock size={32} stroke={1.75} />,
    text: 'ZenUML, Mermaid, DrawIO and OpenAPI render in the browser and never reach ZenUML servers. PlantUML is the exception — it renders via the public plantuml.com service.',
  },
  {
    title: 'Live preview',
    icon: <IconBolt size={32} stroke={1.75} />,
    text: 'The diagram re-renders as you type. Highlight a message on the diagram to jump to its line of code.',
  },
  {
    title: 'Fullscreen editor',
    icon: <IconMaximize size={32} stroke={1.75} />,
    text: 'Open any diagram in a fullscreen editor with syntax highlighting when the work needs room.',
  },
  {
    title: 'PNG export',
    icon: <IconFileExport size={32} stroke={1.75} />,
    text: 'Export any diagram as a PNG image for slides, tickets or docs outside Confluence.',
  },
  {
    title: 'Version history',
    icon: <IconHistory size={32} stroke={1.75} />,
    text: 'Diagrams are Confluence custom content: page history, permissions and backups apply to them like any page.',
  },
];

export default function ConfluenceHub(): JSX.Element {
  return (
    <Layout
      title="Diagrams for Confluence Cloud — 6 types, one app"
      description="An Atlassian Forge app that creates sequence diagrams, Mermaid charts, DrawIO flowcharts, PlantUML and OpenAPI specs inside Confluence Cloud. Free Lite plan."
    >
      <Head>
        <link rel="canonical" href="https://zenuml.com/confluence/" />
        {/* LCP image on this page — preload the WebP the <picture> below will
            actually pick, so the browser starts the fetch before it parses
            the <img> tag. */}
        <link
          rel="preload"
          as="image"
          href="/img/docs/product-zenuml-for-confluence-05.webp"
          fetchPriority="high"
        />
        {jsonLd.map((schema, idx) => (
          <script key={idx} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Head>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Atlassian Marketplace app</p>
            <Heading as="h1" className={styles.heroTitle}>
              Diagrams that live inside your Confluence pages
            </Heading>
            <p className={styles.heroSub}>
              Write a few lines of text in a macro — get a rendered, interactive
              diagram on the page. Sequence, Mermaid, PlantUML, DrawIO and
              OpenAPI, with no external tools and no copy-pasted images.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.ctaPrimary} href={MARKETPLACE_LITE}>
                Install free — Lite plan
              </Link>
              <Link
                className={styles.ctaGhost}
                to="/confluence/diagram-types/"
              >
                See all 6 diagram types
              </Link>
            </div>
            <ul className={styles.heroProof}>
              <li>
                <IconCircleCheck size={18} stroke={2} /> Free Lite plan — no
                credit card
              </li>
              <li>
                <IconCircleCheck size={18} stroke={2} /> Installs in under 2
                minutes
              </li>
              <li>
                <IconCircleCheck size={18} stroke={2} /> 5 of 6 types render
                in-browser — private by design
              </li>
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.screenFrame}>
              <div className={styles.screenBar}>
                <span />
                <span />
                <span />
              </div>
              <picture>
                <source
                  srcSet="/img/docs/product-zenuml-for-confluence-05.webp"
                  type="image/webp"
                />
                <img
                  src="/img/docs/product-zenuml-for-confluence-05.png"
                  alt="ZenUML editor in Confluence: DSL source on the left, rendered sequence diagram on the right"
                  width={1400}
                  height={701}
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <DslCard />
          </div>
        </div>

        <div className={styles.trustBand}>
          <span className={styles.trustItem}>
            <IconStarFilled size={16} /> 4.8 on Atlassian Marketplace
          </span>
          <span className={styles.trustDot}>·</span>
          <span className={styles.trustItem}>1,000+ installs</span>
          <span className={styles.trustDot}>·</span>
          <span className={styles.trustItem}>
            Used by teams at Amazon &amp; ThoughtWorks
          </span>
        </div>
      </header>

      <main>
        {/* ── What is ─────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.split}>
            <div>
              <Heading as="h2">What is ZenUML for Confluence?</Heading>
              <p>
                ZenUML for Confluence is an add-on for{' '}
                <strong>Atlassian Confluence Cloud</strong> that embeds a
                full-featured diagramming environment directly into the page
                editor. Instead of exporting an image from an external tool and
                uploading it, teams write or draw diagrams inside a Confluence
                macro. The source is stored as Confluence custom content, and
                the diagram is re-rendered in the browser on every page view —
                so diagrams and documentation stay in sync.
              </p>
              <p>
                Engineering teams, solution architects and technical writers
                use it to keep architecture documentation, API specs and
                process flows current, next to the pages that describe them.
                It is published on the Atlassian Marketplace by{' '}
                <strong>P&amp;D VISION</strong> in two variants: the free{' '}
                <strong>Lite</strong> plan and the unlimited{' '}
                <strong>Full</strong> plan — both native Atlassian Forge apps.
              </p>
            </div>
            <figure className={styles.splitFigure}>
              <img
                src="/img/docs/product-zenuml-for-confluence-04.png"
                alt="A rendered ZenUML sequence diagram inside a Confluence page, with the macro toolbar visible"
                width={1400}
                height={870}
                loading="lazy"
              />
              <figcaption>
                The rendered diagram on a Confluence page — a live macro, not a
                pasted screenshot.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── Six types ───────────────────────────────────────── */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionHead}>
            <Heading as="h2">6 diagram types, one app</Heading>
            <p>
              Install once. Every diagram type your engineering team needs is
              available from the same Confluence macro.
            </p>
          </div>
          <div className={styles.typeGrid}>
            {diagramTypes.map((t) => (
              <Link key={t.title} to={t.href} className={styles.typeCard}>
                <span className={styles.typeIcon}>{t.icon}</span>
                <span className={styles.typeTitle}>{t.title}</span>
                <span className={styles.typeText}>{t.text}</span>
                <span className={styles.typeMore}>Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Features ────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <Heading as="h2">Built for engineering teams</Heading>
          </div>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureItem}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
          <p className={styles.sectionFootnote}>
            <Link to="/confluence/features/">See the full feature list →</Link>
          </p>
        </section>

        {/* ── Privacy ─────────────────────────────────────────── */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.split}>
            <figure className={styles.splitFigure}>
              <img
                src="/img/security2.png"
                alt="Illustration of ZenUML's privacy model: diagrams render locked inside the user's own environment"
                width={1500}
                height={1000}
                loading="lazy"
              />
              <figcaption>
                Rendering stays client-side for five of six diagram types;
                diagram content never leaves your Atlassian instance for
                those. PlantUML is the one exception — see below.
              </figcaption>
            </figure>
            <div>
              <Heading as="h2">
                Your diagrams stay in Confluence — with one exception
              </Heading>
              <p>
                ZenUML sequence, Mermaid, DrawIO, OpenAPI and Embed all render{' '}
                <strong>in the browser</strong> with client-side engines. The
                source text is stored as Confluence custom content inside
                your own Atlassian instance — ZenUML servers never receive
                it, not even for PNG export.
              </p>
              <p>
                <strong>PlantUML is the exception:</strong> its source is sent
                to the public plantuml.com rendering service to produce the
                image, which is standard for how PlantUML works in every
                Confluence integration. Teams with strict data-residency or
                confidentiality requirements should account for this when
                choosing PlantUML versus ZenUML DSL or Mermaid for sequence
                diagrams.
              </p>
            </div>
          </div>
        </section>

        {/* ── Free vs Paid ────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <Heading as="h2">Free vs Paid</Heading>
          </div>
          <div className={styles.planRow}>
            <div className={styles.planCard}>
              <p className={styles.planName}>Lite — free</p>
              <p className={styles.planPrice}>
                $0 <span>forever · no credit card</span>
              </p>
              <ul>
                <li>Up to 100 diagrams per Confluence space</li>
                <li>All 6 diagram types included</li>
                <li>Full editor, live preview, fullscreen viewer</li>
                <li>PNG export</li>
              </ul>
              <Link className={styles.ctaPrimary} href={MARKETPLACE_LITE}>
                Install Lite free
              </Link>
            </div>
            <div className={styles.planCard}>
              <p className={styles.planName}>Full — paid</p>
              <p className={styles.planPrice}>
                Per-user <span>via Atlassian Marketplace</span>
              </p>
              <ul>
                <li>
                  <strong>Unlimited diagrams</strong> per space
                </li>
                <li>Everything in Lite</li>
                <li>Priority support</li>
                <li>Billed and managed by Atlassian</li>
              </ul>
              <Link className={styles.ctaGhostDark} to="/confluence/pricing/">
                Full pricing details
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────── */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionHead}>
            <Heading as="h2">Frequently asked questions</Heading>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p className={styles.sectionFootnote}>
            <Link to="/confluence/faq/">View the full FAQ →</Link>
          </p>
        </section>

        {/* ── Install ─────────────────────────────────────────── */}
        <section className={styles.installBand}>
          <Heading as="h2">Install in minutes</Heading>
          <ol className={styles.installSteps}>
            <li>
              <span>1</span> Find <strong>ZenUML</strong> on the Atlassian
              Marketplace and click “Get it now”.
            </li>
            <li>
              <span>2</span> Pick your Confluence Cloud site and confirm.
            </li>
            <li>
              <span>3</span> Edit any page, type <code>/zenuml</code>, and
              insert your first diagram.
            </li>
          </ol>
          <Link className={styles.ctaPrimary} href={MARKETPLACE_LITE}>
            Get started free
          </Link>
        </section>
      </main>
    </Layout>
  );
}
