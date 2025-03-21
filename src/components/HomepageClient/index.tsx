import type { FC } from 'react';

import styles from './styles.module.css';

// Using existing images as placeholders
// You can replace these with actual company logos later
const clientData = [
  { src: '/img/clients/amazon-logo.svg', name: 'Amazon' },
  { src: '/img/clients/thoughtworks-logo.svg', name: 'ThoughtWorks' },
  { src: '/img/clients/suncor-logo.svg', name: 'Suncor' },
  { src: '/img/clients/coles-logo.svg', name: 'Coles' },
  { src: '/img/clients/woolworths-logo.svg', name: 'Woolworths' },
  { src: '/img/clients/airwallex-logo.svg', name: 'Airwallex' },
  { src: '/img/clients/nginx-logo.svg', name: 'Nginx' },
  { src: '/img/clients/f5-logo.svg', name: 'F5' },
  { src: '/img/clients/moonactive-logo.svg', name: 'MoonActive' },
  { src: '/img/clients/slicepay-logo.svg', name: 'Slicepay' },
  { src: '/img/clients/shell-energy-logo.svg', name: 'Shell Energy' },
];

const HomepageClient: FC = () => {
  // Create a duplicated array for infinite scrolling effect
  const scrollableClientData = [...clientData, ...clientData];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Trusted By Global Clients</h2>
        <p className={styles.subtitle}>
          Powering sequence diagrams at leading organizations worldwide
        </p>
      </div>

      <div className={styles.clientsContainer}>
        <div className={styles.clientsTrack}>
          {scrollableClientData.map((client, index) => (
            <img
              key={`client-${client.name}-${index}`}
              src={client.src}
              alt={client.name}
              className={styles.client}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageClient;
