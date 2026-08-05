---
title: 'Publish a generated site to a live Confluence page'
description: 'Publish a Jenkins, GitHub Actions or AI-generated HTML bundle straight onto a Confluence page — no zip attachment, no external host to keep alive.'
keywords:
  [
    upload website to confluence page,
    publish static site to confluence,
    render html folder confluence cloud,
    publish generated site to confluence,
    zip file html confluence live,
    mkdocs site confluence page,
  ]
unlisted: false
---

import Head from '@docusaurus/Head';

<Head>
<script type="application/ld+json">{`{"@context": "https://schema.org", "@type": "FAQPage", "mainEntityOfPage": {"@type": "WebPage", "@id": "https://zenuml.com/publish-website-to-confluence/"}, "mainEntity": [{"@type": "Question", "name": "Can I auto-publish a new bundle every time my CI pipeline runs?", "acceptedAnswer": {"@type": "Answer", "text": "Not today. Publishing a bundle is a manual step through the Confluence page editor — select the folder, validate, publish. There is no CI or API endpoint that pushes a new build automatically. If your build already lands in a folder, republishing after each release is a few clicks, not a rebuild of your pipeline, but it is not yet a zero-touch step."}}, {"@type": "Question", "name": "Can I put per-user login inside the published site?", "acceptedAnswer": {"@type": "Answer", "text": "No. Mini Sites inherits the Confluence page's own permissions — whoever can view the page can use everything in the bundle, and whoever cannot, sees neither. There is no separate authentication layer inside the sandbox, so you cannot show different content to different logged-in users within the same published bundle."}}, {"@type": "Question", "name": "I built this with ChatGPT or Claude, not by hand — does that still work?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, as long as what came back is a self-contained HTML, CSS and JavaScript bundle with an index.html at the root. AI assistants routinely produce exactly that shape for small tools and widgets. Download the files into a folder and publish it the same way you would a hand-built or CI-generated site — Mini Sites does not care how the bundle was produced."}}, {"@type": "Question", "name": "I already have a zip file of my site — can I just attach that?", "acceptedAnswer": {"@type": "Answer", "text": "Attaching a zip or an index.html file to a Confluence page gives readers a download, not a running page — there is no inline rendering and no relative-path resolution. Unzip it locally first, then select the folder (not the zip) when you publish through the Mini-Site macro."}}]}`}</script>
</Head>

# Publish a generated site to a live Confluence page

You already have the artifact. A Jenkins or GitHub Actions build produced a folder of `index.html`, CSS
and JS. A docs generator — mkdocs, docfx, a Storybook build — exported a static site. Or you asked
ChatGPT or Claude for a small internal tool and it handed back a working HTML/CSS/JS bundle, unedited.
What none of those workflows gives you is a way to show that folder running, inline, on a Confluence
page — not a link to it, not a screenshot of it, the actual thing.

**Two things worth knowing before you start, not after:** publishing is a manual step through the page
editor today — there is no CI or API endpoint that pushes a new build automatically. And the bundle
inherits the Confluence **page's** permissions, not a per-user login of its own — there is no way to show
different content to different signed-in users inside the same published bundle.

## Where the usual workarounds fail

- **Attaching the zip file.** You can attach `index.html` or a `.zip` to a page. A reader downloads it,
  unzips it, and opens a local file — nothing renders inline, and the copy on their machine drifts from
  the page the moment either one changes. This is the "I have a zip file with index/css style sheets and
  wanted to know if it's possible to do this?" question that shows up on Atlassian's own community forum
  — attaching the file answers "can I store it here," not "can it run here."
- **Hosting it externally and pointing an iframe at it.** Netlify, GitHub Pages, an internal server — any
  of these will render the site, but now you are keeping a second account alive, managing a second access
  list so the right people (and only the right people) can reach it, and asking readers to leave the wiki
  to see it. For a build that already lives in CI, standing up a hosting target just to iframe it back
  into Confluence is a second deployment for one page.
- **Pasting a snippet into an HTML macro app.** Several Marketplace apps restore a snippet-level HTML
  macro on Confluence Cloud — good for a styled callout or an embed code, the wrong shape for a *project*.
  A snippet field has nowhere to put a stylesheet, a JS bundle and an `assets/` folder as separate,
  correctly-pathed files; you end up inlining everything into one blob or pulling from an external CDN
  the sandbox may not allow.

None of the three actually answers the underlying ask, captured almost verbatim across several
Atlassian Community threads: *how do I publish the HTML page my build already generates, so it renders on
a Confluence page instead of sitting in a zip attachment.*

## How Mini Sites publishes the folder

[Mini Sites for Confluence](/mini-sites/) takes the folder you already have — not a snippet, not a URL —
and runs it live on the page:

- **Upload the folder, not a file.** Select the directory that contains `index.html`; nested folders and
  relative paths (`assets/data.json`, `images/logo.png`, `style.css`) resolve exactly as they do on disk.
- **It runs in a sandboxed, isolated embed.** Each macro instance gets its own non-routable sandbox — the
  bundle executes real JavaScript, event handlers and all, with no public URL of its own to leak or keep
  alive.
- **Confluence permissions are inherited.** The app is built on Atlassian Forge; access follows the page
  automatically. There is no second sharing model, no external hosting account, and no separate list of
  who's allowed to view it.
- **Every bundle is validated and scanned before it goes live** — an `index.html` at the root, relative
  paths only, no `../` traversal, and a scan for accidentally committed credentials.

That is the whole workaround-elimination story: the build you already produce goes straight onto the
page where people read it, with no second host and no second permission list to keep in sync.

## What Mini Sites can't do

Stated plainly, because it changes what you should publish here:

- **No live or authenticated data fetch.** The sandbox has no outbound network access — it cannot call
  your internal API, pull a live Jira board, or refresh from anywhere at runtime. If the bundle needs
  current numbers, ship them as a JSON file inside the folder and republish when they change.
- **No persistent storage.** Nothing the bundle writes at runtime survives past the page view — there is
  no database or write-back inside the sandbox.
- **No host-page DOM access.** The bundle cannot read or modify the Confluence page around it; it is
  fully isolated in its own frame.
- **No per-user auth inside the bundle**, as noted above — access control happens at the Confluence page
  level, not inside the published site.

If what you need is a live-refreshing dashboard pulling authenticated data, that is a different job —
this page, and Mini Sites, are for a **static build that already exists as files**, however it was
produced.

## Publish your first bundle

1. Install [Mini Sites for Confluence](https://marketplace.atlassian.com/apps/4169123443/mini-sites-embed-html-prototypes-for-confluence)
   from the Atlassian Marketplace.
2. Edit a Confluence page and type `/Mini-Site` to insert the macro.
3. Click **Upload**, then **Browse files…**, and select the folder that directly contains your build's
   `index.html` — the mkdocs `site/` directory, the docfx output folder, or wherever your CI step writes
   the finished bundle.
4. Wait for the file list to appear, click **Validate & publish**, then publish the Confluence page. The
   site renders inline immediately.

To update it after your next build, repeat steps 2–4 on the same page with the new folder.

## Questions people ask

**Can I auto-publish a new bundle every time my CI pipeline runs?**
Not today. Publishing is a manual step through the page editor — select the folder, validate, publish.
There is no CI or API endpoint that pushes a build automatically yet. If your pipeline already produces
the folder, republishing after a release is a few clicks, not a change to your build process — just not
a zero-touch one.

**Can I put per-user login inside the published site?**
No. Mini Sites inherits the Confluence page's own permissions — whoever can view the page can use
everything in the bundle, and whoever cannot, sees neither. There is no separate auth layer inside the
sandbox for showing different content to different signed-in users.

**I built this with ChatGPT or Claude, not by hand — does that still work?**
Yes, as long as what came back is a self-contained HTML/CSS/JS bundle with an `index.html` at the root.
AI assistants routinely produce exactly that shape for small internal tools and widgets. Download the
files into a folder and publish it the same way you would a hand-built or CI-generated site — Mini Sites
does not care how the bundle was produced.

**I already have a zip file of my site — can I just attach that?**
Attaching a zip or an `index.html` file to a page gives readers a download, not a running page — nothing
renders inline and relative paths do not resolve. Unzip it locally first, then select the **folder** (not
the zip) when you publish through the Mini-Site macro.

## Related

- [Mini Sites for Confluence](/mini-sites/) — what the app is, permissions, security and limits.
- [How to embed HTML in a Confluence page](/embed-html-in-confluence/) — the four ways to get HTML onto
  a Confluence Cloud page, compared.

[Install Mini Sites for Confluence →](https://marketplace.atlassian.com/apps/4169123443/mini-sites-embed-html-prototypes-for-confluence)
