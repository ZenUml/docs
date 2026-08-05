---
title: Diagrams for Confluence Cloud — 6 types, one app
description: 'An Atlassian Forge app that creates sequence diagrams, Mermaid charts, DrawIO flowcharts, PlantUML and OpenAPI specs inside Confluence Cloud. Free Lite plan.'
keywords:
  [
    zenuml for confluence,
    confluence diagram app,
    sequence diagram confluence,
    mermaid for confluence,
    drawio confluence,
    confluence diagramming tool,
  ]
unlisted: false
---

import Head from '@docusaurus/Head';

<Head>
<script type="application/ld+json">{`{"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "ZenUML for Confluence", "alternateName": ["ZenUML Sequence Diagrams for Confluence", "ZenUML Lite"], "applicationCategory": "BusinessApplication", "applicationSubCategory": "Diagramming", "operatingSystem": "Atlassian Confluence Cloud", "url": "https://zenuml.com/confluence/", "description": "ZenUML for Confluence is an Atlassian Forge app that enables teams to create and maintain diagrams directly inside Confluence Cloud pages. It supports six diagram types: ZenUML sequence diagrams (OMG UML 2.5.1), Mermaid, PlantUML, DrawIO flowcharts, OpenAPI/Swagger specs, and embedded diagrams. Diagrams are rendered in the browser — no content is sent to external servers.", "featureList": ["ZenUML sequence diagrams (OMG UML 2.5.1 compliant)", "Mermaid diagrams", "DrawIO flowcharts and graphs", "PlantUML diagrams", "OpenAPI / Swagger specification rendering", "Diagram embedding", "Fullscreen editor with live preview", "Export to PNG and PDF", "Version history", "AI-assisted diagram generation", "Privacy-first: all rendering in-browser", "Copy diagram source code"], "offers": [{"@type": "Offer", "name": "Lite (Free)", "price": "0", "priceCurrency": "USD", "description": "Free plan — up to 100 diagrams per Confluence space. Includes ZenUML, Mermaid, DrawIO, PlantUML, OpenAPI, and Embed types."}, {"@type": "Offer", "name": "Full (Paid)", "description": "Unlimited diagrams. Available via Atlassian Marketplace subscription, billed per-user.", "url": "https://marketplace.atlassian.com/search?query=zenuml+confluence&hosting=cloud&product=confluence"}], "publisher": {"@type": "Organization", "name": "P&D VISION"}, "downloadUrl": "https://marketplace.atlassian.com/search?query=zenuml+lite&hosting=cloud&product=confluence", "softwareVersion": "latest", "releaseNotes": "https://zenuml.com/confluence/changelog/", "screenshot": "https://zenuml.com/confluence/assets/screenshot-editor.png"}`}</script>
<script type="application/ld+json">{`{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What diagram types does ZenUML for Confluence support?", "acceptedAnswer": {"@type": "Answer", "text": "ZenUML for Confluence supports six diagram types in a single app: (1) ZenUML Sequence Diagrams — text-based UML 2.5.1 sequence diagrams written in ZenUML DSL; (2) Mermaid — the full Mermaid.js syntax covering flowcharts, sequence diagrams, Gantt charts, ER diagrams, and more; (3) PlantUML — class diagrams, activity diagrams, component diagrams, and other PlantUML diagram types; (4) DrawIO / Graph — drag-and-drop flowcharts and general diagrams using the DrawIO engine; (5) OpenAPI / Swagger — interactive OpenAPI 3.x and Swagger 2.0 spec rendering via swagger-ui; (6) Embed — embed an existing diagram from elsewhere in your Confluence space."}}, {"@type": "Question", "name": "Is ZenUML for Confluence free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — ZenUML Lite is completely free to install and use, with no credit card required. The free Lite plan supports all six diagram types and allows up to 100 diagrams per Confluence space. It has been installed by more than 898 teams and carries a 4.5-star rating on the Atlassian Marketplace. For teams that need unlimited diagrams across all spaces, the paid Full version is available via the Atlassian Marketplace on a per-user subscription basis."}}, {"@type": "Question", "name": "How does ZenUML compare to Gliffy and Lucidchart?", "acceptedAnswer": {"@type": "Answer", "text": "ZenUML for Confluence is designed for diagram-as-code workflows, while Gliffy and Lucidchart focus on drag-and-drop visual editing. ZenUML's key differentiators are: (1) Diagram-as-code — diagrams are stored as source text (ZenUML DSL, Mermaid, PlantUML), making them easy to version, diff, and regenerate; (2) Privacy-first — all rendering happens in the browser; diagram content is never sent to ZenUML servers; (3) Multi-syntax support — one app handles ZenUML, Mermaid, PlantUML, DrawIO, and OpenAPI; (4) Free tier — the Lite plan is genuinely free, not a trial. Gliffy and Lucidchart are better choices if your team's primary workflow is drag-and-drop visual diagramming. ZenUML is better for engineering teams who prefer writing diagrams as code alongside documentation."}}, {"@type": "Question", "name": "Can I use Mermaid syntax in Confluence with ZenUML?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ZenUML for Confluence includes a full Mermaid renderer powered by Mermaid.js. You can write any Mermaid diagram — flowcharts, sequence diagrams, class diagrams, Gantt charts, ER diagrams, state diagrams, pie charts, and more — directly in the ZenUML macro editor. The live preview updates as you type. Diagrams are stored as Mermaid source text in Confluence custom content and rendered in the browser on every page view."}}, {"@type": "Question", "name": "Does ZenUML support DrawIO diagrams in Confluence?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ZenUML for Confluence includes the DrawIO engine for creating flowcharts, network diagrams, org charts, and general-purpose graphs. The DrawIO editor opens inside Confluence via a fullscreen modal, providing the full DrawIO canvas experience — shapes, connectors, layers, and export. DrawIO diagrams are stored in Confluence custom content and rendered inline on the page, so no separate DrawIO account or subscription is required."}}, {"@type": "Question", "name": "Is my diagram content sent to external servers?", "acceptedAnswer": {"@type": "Answer", "text": "No. ZenUML for Confluence is privacy-first by design. All diagram rendering — ZenUML sequence diagrams, Mermaid charts, PlantUML, DrawIO, and OpenAPI — happens entirely in the browser using client-side rendering engines. Your diagram source code and rendered output are never transmitted to ZenUML servers. Diagrams are stored as Confluence custom content within your Atlassian instance. This design makes ZenUML suitable for teams with strict data residency or confidentiality requirements."}}, {"@type": "Question", "name": "What is the difference between the Lite and Full versions?", "acceptedAnswer": {"@type": "Answer", "text": "Both versions include all six diagram types, the fullscreen editor, live preview, PNG/PDF export, version history, and the privacy-first rendering model. The key difference is scale: the Lite version is free and supports up to 100 diagrams per Confluence space. The Full version is a paid Atlassian Marketplace subscription that provides unlimited diagrams across all spaces, making it suitable for large teams or organizations with extensive documentation needs. Both are native Forge apps running on Atlassian's infrastructure."}}, {"@type": "Question", "name": "How do I install ZenUML in Confluence?", "acceptedAnswer": {"@type": "Answer", "text": "Installation takes under two minutes and requires Confluence Cloud admin permissions. Go to the Atlassian Marketplace and search for 'ZenUML' — choose the Lite (free) or Full (paid) listing. Click 'Get it now', select your Confluence Cloud site, and confirm the installation. Once installed, ZenUML macros appear in the Confluence macro browser (use the '/' slash command or the macro picker). Insert a ZenUML macro onto any page, choose your diagram type, write your diagram code in the editor, and click Publish. No server setup, no credentials, no external accounts required."}}]}`}</script>
</Head>


⭐ 4.8 on Atlassian Marketplace  ·  1,000+ installs  ·  Used by enterprise teams

# Diagrams that live inside your Confluence pages

ZenUML for Confluence is an Atlassian Forge app that lets teams create, edit, and maintain sequence diagrams, Mermaid charts, DrawIO flowcharts, PlantUML diagrams, and OpenAPI specs directly on Confluence Cloud pages — no external tools, no copy-pasting images.

[⚡ Install Free — Lite Plan](https://marketplace.atlassian.com/search?query=zenuml+lite&hosting=cloud&product=confluence) · [See All Features](/confluence/features/)

✓ Free Lite plan — no credit card ✓ Installs in under 2 minutes ✓ Diagrams render in-browser — private by design ✓ Used by teams at Amazon & ThoughtWorks

## What is ZenUML for Confluence?

ZenUML for Confluence is an add-on for **Atlassian Confluence Cloud** that embeds a full-featured diagramming environment directly into the Confluence page editor. Rather than exporting a diagram as an image from an external tool and uploading it, teams write or draw diagrams inside a Confluence macro. The source code is stored in Confluence custom content, and the diagram is re-rendered in the browser on every page view — keeping diagrams and documentation in sync.

The app supports **six diagram types** in a single installation: ZenUML sequence diagrams (standards-compliant with OMG UML 2.5.1), Mermaid charts, PlantUML diagrams, DrawIO flowcharts, OpenAPI/Swagger specification rendering, and an embed type for reusing existing diagrams. Engineering teams, solution architects, and technical writers use it to keep architecture documentation, API specs, and process flows up to date alongside their Confluence pages.

ZenUML for Confluence is published on the Atlassian Marketplace by **P&D VISION** and is available in two variants. The **Lite** plan is free and supports up to 100 diagrams per Confluence space — it has been installed by more than 898 teams and is rated 4.5 stars. The **Full** plan removes the per-space limit and is rated 4.8 stars. Both variants are native Atlassian Forge apps: they run on Atlassian infrastructure and never transmit diagram content to external servers.

## 6 Diagram Types, One App

Install once. Every diagram type your engineering team needs is available from the same Confluence macro.

### ZenUML Sequence

Write UML 2.5.1-compliant sequence diagrams in ZenUML DSL — a concise, readable text syntax. Live preview, syntax highlighting, and AI-assisted generation included. Ideal for API flows, service interactions, and system design docs.

### Mermaid

Full Mermaid.js support — flowcharts, sequence diagrams, Gantt charts, ER diagrams, class diagrams, state diagrams, and pie charts. Write Mermaid directly in Confluence without any external tool.

### PlantUML

Render PlantUML class diagrams, component diagrams, activity diagrams, use-case diagrams, and deployment diagrams. Paste your existing PlantUML code directly into the editor.

### DrawIO / Graph

Drag-and-drop flowcharts, network diagrams, org charts, and general-purpose graphs using the DrawIO engine — fully embedded in Confluence. No DrawIO account required.

### OpenAPI / Swagger

Paste an OpenAPI 3.x or Swagger 2.0 spec in YAML or JSON and get an interactive swagger-ui rendered on the Confluence page — complete with endpoint explorer and request/response schemas.

### Embed

Reuse an existing ZenUML sequence diagram, DrawIO graph, or OpenAPI spec from another Confluence page or space. Keep a single source of truth and let all referencing pages stay in sync automatically.

[Explore all diagram types](/confluence/diagram-types/)

## Built for engineering teams

Everything you need to create, maintain, and share technical diagrams — without leaving Confluence.

### Fullscreen Editor

A distraction-free fullscreen editing modal with split-pane layout: code on the left, live diagram on the right. Resize panes to suit your workflow.

### Live Preview

See your diagram update in real time as you type. No save-to-preview cycle — the rendered output tracks the editor cursor-by-cursor.

### Export PNG & PDF

Export any diagram to PNG or PDF directly from the viewer. Share diagrams in presentations, design docs, or review threads without re-screenshotting.

### Version History

Every save is a new Confluence custom content version. Browse, restore, and compare previous diagram states through Confluence's built-in version history.

### Copy Code

Copy the diagram source to clipboard with one click. Move diagrams between pages, share in Slack, or check them into a Git repository alongside your code.

### Diagram as Code

Diagrams are stored as plain text — ZenUML DSL, Mermaid, PlantUML, or DrawIO XML. Diffs are readable, merges are possible, and regeneration is instant when your architecture changes.

### AI-Assisted Generation

Describe a flow in natural language and let AI generate the ZenUML or Mermaid source for you. Edit the output directly in the editor — AI is a starting point, not a black box.

### Privacy-First

All rendering happens in the browser. Diagram content — including confidential architecture diagrams and API specs — is never sent to ZenUML servers. Suitable for teams with strict data residency requirements.

[See full feature list](/confluence/features/)

## Free vs Paid

Start free. Upgrade when your team grows. Both variants include all six diagram types.

| Feature | Lite Free | Full Paid |
|---|---|---|
| All 6 diagram types | ✓ | ✓ |
| Fullscreen editor + live preview | ✓ | ✓ |
| Export PNG & PDF | ✓ | ✓ |
| Version history | ✓ | ✓ |
| AI-assisted diagram generation | ✓ | ✓ |
| Privacy-first in-browser rendering | ✓ | ✓ |
| Diagrams per Confluence space | Up to 100 | Unlimited |
| Atlassian Marketplace rating | ⭐ 4.5 | ⭐ 4.8 |
| Installs | 898+ | — |
| Price | Free | Marketplace subscription |

[Install Lite — Free](https://marketplace.atlassian.com/search?query=zenuml+lite&hosting=cloud&product=confluence) · [Install Full — Paid](https://marketplace.atlassian.com/search?query=zenuml+confluence&hosting=cloud&product=confluence) · [Full pricing details](/confluence/pricing/)

## Frequently Asked Questions

Common questions about ZenUML for Confluence — diagram types, privacy, pricing, and getting started.

### What diagram types does ZenUML for Confluence support?

- **ZenUML Sequence** — text-based UML 2.5.1 sequence diagrams using ZenUML DSL
- **Mermaid** — full Mermaid.js syntax (flowcharts, Gantt, ER, class, state, pie, and more)
- **PlantUML** — class, activity, component, use-case, and deployment diagrams
- **DrawIO / Graph** — drag-and-drop flowcharts and graphs using the DrawIO engine
- **OpenAPI / Swagger** — interactive rendering of OpenAPI 3.x and Swagger 2.0 specs
- **Embed** — reuse a diagram from another page or space as a live reference

### Is ZenUML for Confluence free?

Yes — **ZenUML Lite is completely free**, no credit card required. The free Lite plan supports all six diagram types and allows up to 100 diagrams per Confluence space. It has been installed by more than 898 teams and carries a 4.5-star rating on the Atlassian Marketplace. For teams that need unlimited diagrams across all spaces, the paid **Full version** is available via the Atlassian Marketplace on a per-user subscription basis and is rated 4.8 stars.

### How does ZenUML compare to Gliffy and Lucidchart?

- **Diagram as code** — ZenUML stores diagrams as plain text (ZenUML DSL, Mermaid, PlantUML), making them versionable and diffable
- **Multi-syntax** — one app covers ZenUML, Mermaid, PlantUML, DrawIO, and OpenAPI; Gliffy/Lucidchart are format-specific
- **Privacy-first** — all rendering is in-browser; diagram content never reaches ZenUML servers
- **Genuinely free tier** — Lite is free, not a timed trial

### Can I use Mermaid syntax in Confluence with ZenUML?

Yes. ZenUML for Confluence includes a full **Mermaid.js renderer**. You can write any valid Mermaid diagram — flowcharts, sequence diagrams, Gantt charts, ER diagrams, class diagrams, state diagrams, pie charts, and more — directly in the ZenUML macro editor. The live preview updates as you type. Diagrams are stored as Mermaid source text in Confluence custom content and rendered in the browser on every page view. No external Mermaid account or service is required.

### Does ZenUML support DrawIO diagrams in Confluence?

Yes. ZenUML for Confluence includes the **DrawIO engine** for creating flowcharts, network diagrams, org charts, and general-purpose graphs. The DrawIO editor opens in a fullscreen modal inside Confluence, providing the full DrawIO canvas — shapes, connectors, layers, and export. Diagrams are stored in Confluence custom content and rendered inline on the page. No separate DrawIO account or subscription is required.

### Is my diagram content sent to external servers?

**No.** ZenUML for Confluence is privacy-first by design. All diagram rendering — ZenUML sequence diagrams, Mermaid charts, PlantUML diagrams, DrawIO graphs, and OpenAPI specs — happens entirely in the **browser using client-side engines**. Your diagram source code and rendered output are never transmitted to ZenUML servers. Diagrams are stored as Confluence custom content within your Atlassian instance. This design makes ZenUML suitable for teams with strict data residency or confidentiality requirements.

### What is the difference between the Lite and Full versions?

- **Lite (free)** — up to 100 diagrams per Confluence space. Rated 4.5★, 898+ installs.
- **Full (paid)** — unlimited diagrams across all spaces. Rated 4.8★. Billed per user via Atlassian Marketplace.

### How do I install ZenUML in Confluence?

1. Go to the [Atlassian Marketplace](https://marketplace.atlassian.com/search?query=zenuml+lite&hosting=cloud&product=confluence) and search for "ZenUML".
2. Choose the **Lite** (free) or **Full** (paid) listing and click **"Get it now"**.
3. Select your Confluence Cloud site and confirm the installation.

[View full FAQ →](/confluence/faq/)

## Install in Minutes

ZenUML is a native Atlassian Forge app — no servers to configure, no external accounts to create.

1

### Find on Marketplace

Go to the Atlassian Marketplace and search for **"ZenUML"**. Choose Lite (free) or Full (paid) based on your team's needs.

2

### Click "Get it now"

Select your Confluence Cloud site and confirm. Atlassian handles the install — no download, no ZIP file, no server configuration. Admin permission required.

3

### Insert a macro and diagram

On any Confluence page, type `/ZenUML` or use the macro picker to insert a diagram. Choose your type, write or paste your code, and click Publish.

[⚡ Install Lite — Free](https://marketplace.atlassian.com/search?query=zenuml+lite&hosting=cloud&product=confluence) · [Install Full — Paid](https://marketplace.atlassian.com/search?query=zenuml+confluence&hosting=cloud&product=confluence)

Used by engineering teams at Amazon, ThoughtWorks, and more.  |  Published by **P&D VISION** on Atlassian Marketplace.
