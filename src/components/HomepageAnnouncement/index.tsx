import React from 'react';
import Link from '@docusaurus/Link';
import { IconSparkles, IconCurrencyDollar } from '@tabler/icons-react';
import styles from './styles.module.css';

export default function HomepageAnnouncement() {
  return (
    <div className={styles.announcement}>
      <div className={styles.announcementContainer}>
        <div className={styles.announcementContent}>
          <div className={styles.announcementHeader}>
            <IconSparkles className={styles.announcementIcon} size={24} />
            <h3 className={styles.announcementTitle}>
              Claude Code now supports Opus! Get $110 free credit
            </h3>
          </div>
          
          <p className={styles.announcementText}>
            Great news! Claude Code now supports Opus. Register with AnyRouter to receive <strong>$110</strong> free credit. Check in daily for an additional <strong>$10</strong>!
          </p>
          
          <div className={styles.announcementSteps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                <p className={styles.stepTitle}>Register and get your token</p>
                <Link 
                  href="https://anyrouter.top/register?aff=tIIY" 
                  className={styles.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register now <IconCurrencyDollar size={16} className={styles.linkIcon} />
                </Link>
              </div>
            </div>
            
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                <p className={styles.stepTitle}>Configure environment</p>
                <code className={styles.codeBlock}>
                  cd your-project-folder<br />
                  export ANTHROPIC_AUTH_TOKEN=sk-...<br />
                  export ANTHROPIC_BASE_URL=https://anyrouter.top
                </code>
              </div>
            </div>
            
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                <p className={styles.stepTitle}>Start Claude</p>
                <code className={styles.codeBlock}>claude</code>
              </div>
            </div>
          </div>
          
          <div className={styles.announcementFooter}>
            <Link 
              href="https://anyrouter.top/register?aff=tIIY" 
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started - Claim $110 Credit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}