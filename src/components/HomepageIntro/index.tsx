import { FC } from 'react';
import clsx from 'clsx';
import { ReactNode } from '@mdx-js/react/lib';

import styles from './styles.module.css';

interface Props {
  title: string;
  content: ReactNode;
  image: string;
  reverse?: boolean;
}
const HomepageContent: FC<Props> = (props) => {
  const { title, content, image, reverse = false } = props;

  return (
    <div className={clsx(styles.wrapper, { [styles.reverse]: reverse })}>
      <div className={clsx(styles.container, { [styles.reverse]: reverse })}>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.desc}>{content}</div>
        </div>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default HomepageContent;
