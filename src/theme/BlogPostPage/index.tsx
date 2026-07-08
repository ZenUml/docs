import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import type BlogPostPageType from '@theme/BlogPostPage';
import type { WrapperProps } from '@docusaurus/types';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof BlogPostPageType>;

/**
 * Wraps the theme's BlogPostPage to emit BlogPosting JSON-LD structured data
 * for every blog post. This lets AI engines and search crawlers read the
 * headline, author (E-E-A-T), publish/modified dates, and publisher without
 * parsing the rendered HTML. Wrapping (not ejecting) keeps us upgrade-safe.
 */
export default function BlogPostPageWrapper(props: Props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const siteUrl = siteConfig.url; // https://zenuml.com

  // Docusaurus passes the MDX component as `content`; its metadata and
  // frontMatter are attached as static properties.
  const { metadata } = props.content;
  const frontMatter = props.content.frontMatter as {
    image?: string;
    last_update?: { date?: string };
  };

  const canonical = siteUrl + metadata.permalink;
  const image = frontMatter.image
    ? frontMatter.image.startsWith('http')
      ? frontMatter.image
      : siteUrl + frontMatter.image
    : siteUrl + '/img/og-image.png';

  const authors = (metadata.authors ?? []).map((a) => ({
    '@type': 'Person',
    name: a.name,
    ...(a.url ? { url: a.url } : {}),
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: metadata.title,
    ...(metadata.description ? { description: metadata.description } : {}),
    datePublished: metadata.date,
    dateModified: frontMatter.last_update?.date ?? metadata.date,
    ...(authors.length ? { author: authors } : {}),
    image,
    url: canonical,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    publisher: {
      '@type': 'Organization',
      name: 'ZenUML',
      logo: {
        '@type': 'ImageObject',
        url: siteUrl + '/img/logo-90x72.png',
      },
    },
    ...(metadata.tags?.length
      ? { keywords: metadata.tags.map((t) => t.label).join(', ') }
      : {}),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <BlogPostPage {...props} />
    </>
  );
}
