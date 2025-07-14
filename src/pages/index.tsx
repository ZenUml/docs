import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageIntro from '../components/HomepageIntro';
import HomepageFeature from '../components/HomepageFeature';
import HomepageClient from '../components/HomepageClient';
import HomepageAnnouncement from '../components/HomepageAnnouncement';
import {
  IconUserCircle,
  IconCertificate,
  IconDeviceImacCode,
  IconCodeDots,
  IconListSearch,
  IconVectorTriangle,
} from '@tabler/icons-react';

import styles from './index.module.css';
import HomepageQuote from '../components/HomepageQuote';
import HomePageFAQ from '@site/src/components/HomePageFAQ';

function HomepageHeader() {
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.heroBackgroundOverlay} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <Heading as="h1" className={styles.heroTitle}>
              Create diagrams faster and better
            </Heading>
            <p className={styles.heroSubtitle}>
              ZenUML is a multi-platform diagram-as-code solution for sequence
              diagrams, flow chart* and more
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={styles.primaryButton}
                href="https://app.zenuml.com/?cta=main"
                id="btn_main_get_started"
              >
                Get Started
              </Link>
              <Link
                className={styles.secondaryButton}
                href="https://diagramly.ai/?src=zenuml"
                id="btn_secondary_read_docs"
              >
                Diagramly.Ai
              </Link>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.previewWrapper}>
              <img
                src="/img/zenuml-preview.png"
                alt="ZenUML Preview"
                className={styles.previewImage}
              />
              <div className={styles.previewGlow} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.clientsSection}>
        <HomepageClient />
      </div>
    </header>
  );
}

const intros = [
  {
    title: 'On-the-fly rendering and interactive approach',
    image: '/img/Demo-ServiceGateway-simpler-25s.gif',
    content: (
      <div>
        <p>
          ZenUML renders the diagram in the browser with no overhead of
          server-sider interaction. The diagram is rendered in a
          <strong> near-real-time</strong> fashion. Your thought process is not
          interrupted by inefficient drag-and-drop or a slow loading animation.{' '}
        </p>
        <p>
          The generated diagram is not just a static image. Users can interact
          with the diagram. For example, <strong>highlighting messages</strong>{' '}
          on the diagram will automatically select corresponding code in the
          editor in editing mode. This enables quick navigation in long and
          complex diagrams.
        </p>
      </div>
    ),
  },
  {
    title: 'Privacy and Security is in our DNA​',
    image: '/img/security2.png',
    content: (
      <div>
        <p>
          ZenUML was born from a Finance project and is widely used in Bank,
          FinTech, Telecom, and Retail companies. From day one, we built ZenUML
          in a way that <strong>no data is sent to our server</strong> for
          rendering including image-export. No personal data is stored,
          transmitted, or otherwise processed by ZenUML’s server.
        </p>
      </div>
    ),
    reverse: true,
  },
  {
    title: 'Standard Compliance And Rich Extension',
    image: '/img/standard-1024x943.png',
    content: (
      <div>
        <p>
          We have built-in our 20 years of experience in software development
          and architecture into ZenUML. The produced diagram is automatically
          standard compliant with OMG UML(R) 2.5.1.
        </p>
        <p>
          We have also added meaningful extensions (such as Cloud Icons) to make
          the diagram more readable.
        </p>
      </div>
    ),
  },
];
const features = [
  {
    title: 'Professional Support',
    icon: <IconUserCircle size={48} strokeWidth={2} />,
    description:
      'ZenUML is supported by a high-performance team located in Australia. We provide support for installation, training, and failures. Most of the tickets are resolved within 8 hours and the first response SLA is 24 hours. Visit Help Center',
  },
  {
    title: 'Proven solution',
    icon: <IconCertificate size={48} strokeWidth={2} />,
    description:
      'ZenUML has been tested from start-ups to Global 500 across companies from FinTech, eCommerce, Health care, Supply chain management, and Digital Security. It can be used to describe processes at almost any level of complexity.',
  },
  {
    title: 'Multi-platform',
    icon: <IconDeviceImacCode size={48} strokeWidth={2} />,
    description:
      'ZenUML can be used via Confluence (Cloud, Server, and Data Center), a Web App or browser extension, IDE addon, or Desktop. You can also choose to integrate into your own platforms with the free library.',
  },
  {
    title: 'Concise DSL',
    icon: <IconCodeDots size={48} strokeWidth={2} />,
    description:
      'ZenUML uses a (much) less verbose DSL. Compared with PlantUML you need 2 to 3 times less lines to draw the same diagram. That makes the diagram’s metadata more readable and maintainable.',
  },
  {
    title: 'Content discoverability',
    icon: <IconListSearch size={48} strokeWidth={2} />,
    description:
      'Content discoverability is essential in organizations. Unlike most other diagramming tools, ZenUML does not generate an image, it renders the diagram as a plain HTML.',
  },
  {
    title: 'More Than Sequence Diagram',
    icon: <IconVectorTriangle size={48} strokeWidth={2} />,
    description:
      'On Confluence Cloud you can use the ZenUML plugin to draw flow diagrams and other UML diagrams. This functionality is going to be ported to Confluence Server and Data Center soon.',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="A Free Sequence Diagram Online Tool"
      description="Description: JavaScript based diagramming tool that renders Markdown-inspired text definitions to create and modify sequence diagrams dynamically."
    >
      <HomepageHeader />
      <HomepageAnnouncement />
      <main className={styles.main}>
        <section>
          {intros.map((intro, idx) => (
            <HomepageIntro key={idx} {...intro} />
          ))}
        </section>
        <section className={styles.features}>
          <div className={styles.featuresWrapper}>
            {features.map((feature, idx) => (
              <HomepageFeature key={idx} {...feature} />
            ))}
          </div>
        </section>
        <section>
          <HomepageQuote />
        </section>
        <section className={styles.about}>
          <div className={styles.aboutWrapper}>
            <h2 className={styles.aboutTitle}>About ZenUML</h2>
            <p>
              <strong>ZenUML</strong> is a family of diagramming tools operated
              by P&D Vision Pty Ltd. It works on Atlassian Confluence, any
              modern browser, JetBrains Intellij IDE. It is featured as a
              leading diagram-as-code solution for sequence diagrams. Extra
              capabilities are provided on different platforms. <br />* Not all
              diagrams are available on all platforms.
            </p>
          </div>
        </section>
        <section>
          <HomePageFAQ />
        </section>
      </main>
    </Layout>
  );
}
