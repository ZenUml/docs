import React, { useEffect, useRef, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from './styles.module.css';

/**
 * Renders ZenUML DSL as a live diagram using @zenuml/core — the same engine the
 * Confluence app ships. The library manipulates the DOM and self-injects its
 * stylesheet at import time, so it must only ever load in the browser:
 * BrowserOnly + a dynamic import inside useEffect keep it out of the SSR pass.
 */
function ClientDiagram({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { default: ZenUml } = await import('@zenuml/core');
        if (cancelled || !ref.current) return;
        // naked=true renders the bare diagram without the viewer frame chrome.
        const zenuml = new ZenUml(ref.current, true);
        await zenuml.render(code, { theme: 'theme-default' });
      } catch (e) {
        if (!cancelled) setError(String(e));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [code]);

  if (error) {
    // Never fail the page over a rendering problem — fall back to the source.
    return (
      <pre className={styles.fallback}>
        <code>{code}</code>
      </pre>
    );
  }
  return <div ref={ref} className={styles.canvas} />;
}

export default function ZenUmlDiagram({
  code,
  caption,
}: {
  code: string;
  caption?: string;
}) {
  return (
    <figure className={styles.wrapper}>
      <BrowserOnly
        fallback={<div className={styles.loading}>Rendering diagram…</div>}
      >
        {() => <ClientDiagram code={code} />}
      </BrowserOnly>
      <figcaption>
        {caption ?? 'Rendered live in your browser by @zenuml/core — the same engine the Confluence app uses.'}
      </figcaption>
    </figure>
  );
}
