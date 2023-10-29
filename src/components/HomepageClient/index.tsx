import { FC } from 'react';

import styles from './styles.module.css';

const clients = [
  '/img/client1.png',
  '/img/client2.png',
  '/img/client3.jpeg',
  '/img/client4.jpg',
  '/img/client5.png',
  '/img/client6.png',
];

interface Props {}
const HomepageClient: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trust By Global Clients</h2>
      <div className={styles.content}>
        ZenUML is known to be used at Amazon, ThoughtWorks, Suncor, and many
        other companies at different sizes. Its Confluence plugin is used by
        more than 400 organizations.
      </div>
      {clients.map((client, index) => (
        <img src={client} key={index} alt="client" className={styles.client} />
      ))}
    </div>
  );
};

export default HomepageClient;
