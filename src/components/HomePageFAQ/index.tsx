import { FC, forwardRef } from 'react';
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
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Header>
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

const faqList = [
  {
    title:
      'Are diagrams/scripts created using zenuml.com/sequence-diagram subject to any license?',
    content: 'No license is imposed by ZenUML on the generated output.',
  },
  {
    title: 'How to Install Confluence Plugin',
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

const HomepageFAQ: FC<Props> = () => {
  return (
    <div className="text-center py-20">
      <h2 className={styles.title}>FAQ</h2>
      <div className={styles.content}>
        <div className="mb-10">
          <Accordion.Root type="multiple">
            {faqList.map((item) => {
              return (
                <AccordionItem key={item.title} value={item.title}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
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
