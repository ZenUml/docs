import { FC, ReactNode } from 'react';

import styles from './styles.module.css';

type Props = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
};

const HomepageFeature: FC<Props> = (props) => {
  const { title, icon, description } = props;
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{description}</div>
      </div>
    </div>
  );
};

export default HomepageFeature;
