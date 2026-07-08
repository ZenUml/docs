import { FC, forwardRef } from 'react';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
interface Props {}

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  align?: string;
  id?: string;
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Content {...props} ref={forwardedRef}>
      <div className="pt-2 pb-4 text-gray-500 whitespace-pre-line">
        {children}
      </div>
    </Accordion.Content>
  ),
);
AccordionContent.displayName = 'AccordionContent';

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Item
      className="border-b border-gray-200 my-4 py-3 cursor-pointer"
      ref={forwardedRef}
      {...props}
    >
      {children}
    </Accordion.Item>
  ),
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, id, ...props }, forwardedRef) => (
    <Accordion.Header id={id}>
      <Accordion.Trigger {...props} ref={forwardedRef} asChild>
        <div className="flex items-center justify-between text-lg">
          {children}
          <ChevronDownIcon className="ml-2" aria-hidden />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);
AccordionTrigger.displayName = 'AccordionTrigger';

// Each FAQ carries a plain-text `answerText` (used verbatim in the FAQPage
// JSON-LD so the structured data matches the visible answer, as Google
// requires) and an optional richer `content` node for on-page rendering.
// Answers lead with the direct answer first — the pattern AI engines quote.
interface FaqEntry {
  id: string;
  question: string;
  answerText: string;
  content?: React.ReactNode;
}

const faqList: FaqEntry[] = [
  {
    id: 'faq-what-is-zenuml',
    question: 'What is ZenUML?',
    answerText:
      'ZenUML is a diagram-as-code tool that turns concise, Markdown-inspired text into interactive UML sequence diagrams and more. It renders entirely in your browser in near-real-time, so you go from text to a shareable diagram without drag-and-drop. ZenUML runs on Atlassian Confluence, a free web app, JetBrains and VS Code plugins, and desktop.',
  },
  {
    id: 'faq-free',
    question: 'Is ZenUML free?',
    answerText:
      'Yes. The ZenUML online editor at app.zenuml.com is free to use, and ZenUML offers a free Lite plan on the Atlassian Marketplace for Confluence, alongside paid plans that raise usage limits and add more diagram types.',
  },
  {
    id: 'faq-confluence',
    question: 'Does ZenUML work in Confluence?',
    answerText:
      'Yes. "ZenUML Diagrams for Confluence" is available on the Atlassian Marketplace for Confluence Cloud, Server, and Data Center. You add a ZenUML macro to any page and edit the diagram inline; on Confluence Cloud it also renders Mermaid, PlantUML, draw.io graphs, and OpenAPI/AsyncAPI specifications.',
  },
  {
    id: 'faq-diagram-types',
    question: 'What diagram types can ZenUML create?',
    answerText:
      'ZenUML specializes in UML sequence diagrams. On Confluence Cloud the ZenUML app additionally renders Mermaid diagrams, PlantUML, draw.io (graph) diagrams, and OpenAPI/AsyncAPI documentation, so a single app covers most diagramming needs.',
  },
  {
    id: 'faq-vs-plantuml',
    question: 'How is ZenUML different from PlantUML and Mermaid?',
    answerText:
      'ZenUML uses a much more concise DSL — typically 2 to 3 times fewer lines than PlantUML to draw the same sequence diagram. Unlike tools that export a static image, ZenUML renders the diagram as interactive HTML: highlighting a message selects the matching code, and the text stays searchable. Rendering happens client-side, so no diagram data leaves your browser.',
  },
  {
    id: 'faq-privacy',
    question: 'Is my diagram data secure?',
    answerText:
      'Yes. ZenUML renders diagrams — including image export — entirely in the browser. No diagram content or personal data is sent to, stored on, or processed by ZenUML servers. ZenUML was born from a finance project and is used across banking, FinTech, telecom, and retail.',
  },
  {
    id: 'faq-license',
    question: 'Are diagrams created with ZenUML subject to any license?',
    answerText:
      'No. ZenUML imposes no license on the diagrams or scripts you generate — the output is yours to use freely.',
  },
  {
    id: 'faq-install',
    question: 'How do I install the ZenUML Confluence plugin?',
    answerText:
      'To install ZenUML on Confluence Cloud: click Settings in your Confluence instance, choose Find new apps, search for "ZenUML Diagrams for Confluence", then click Try it free or Get app. Installation takes about a minute and requires site-admin permissions.',
    content: (
      <ul className="list-decimal">
        <li>
          Click on <b>Settings</b> on your <b>Confluence Cloud</b> instance.
        </li>
        <li>
          Click <b>Find new apps</b> from the left-hand side of the page.
        </li>
        <li>
          Locate <b>ZenUML Diagrams for Confluence (FREEMIUM)</b> or{' '}
          <b>ZenUML Diagrams and Open API Lite</b> via search.
        </li>
        <li>
          Click <b>Try it free</b> or <b>Get app.</b>
        </li>
        <li>You&apos;re done!</li>
      </ul>
    ),
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqList.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answerText,
    },
  })),
};

const HomepageFAQ: FC<Props> = () => {
  return (
    <div className="text-center py-20">
      <Head>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.content}>
        <div className="mb-10">
          <Accordion.Root type="multiple">
            {faqList.map((item) => {
              return (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger id={item.id}>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.content ?? item.answerText}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
};

export default HomepageFAQ;
