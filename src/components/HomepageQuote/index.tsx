import { FC } from 'react';
import { IconQuote } from '@tabler/icons-react';

import styles from './styles.module.css';

const quotes = [
  {
    author: {
      name: 'Kushagra Mehra',
      title: 'Senior Service Architect, National Australia Bank',
      avatar: '/img/avatar1.jpeg',
    },
    content:
      'ZenUML has the most intuitive DSL among all the diagram-as-code tools for sequence diagrams. It helps me clear the logic in a system. Nice work!',
  },
  {
    author: {
      name: 'Jeff Xiong',
      title: 'Office Principle, ThoughtWorks',
      avatar: '/img/avatar2.jpg',
    },
    content:
      'ZenUML has the most intuitive DSL among all the diagram-as-code tools for sequence diagrams. It helps me clear the logic in a system. Nice work!',
  },
  {
    author: {
      name: 'Lillian Kithikii',
      title: 'Senior BA, LitheKongsulting',
      avatar: '/img/avatar3.jpeg',
    },
    content:
      'We migrated to ZenUML from another tool recently. The support team helped us to convert all our diagrams. Amazing support!',
  },
];

interface Props {}
const HomepageQuote: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.quotes}>
        {quotes.map((quote, index) => (
          <div className={styles.quote} key={index}>
            <IconQuote size={48} stroke={2} color="var(--ifm-color-primary)" />
            <div className={styles.content}>{quote.content}IconQuote</div>
            <div className={styles.author}>
              <div className={styles.avatar}>
                <img src={quote.author.avatar} alt="avatar" />
              </div>
              <div className={styles.desc}>
                <div className={styles.name}>{quote.author.name}</div>
                <div className={styles.title}>{quote.author.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageQuote;
