---
title: DrawIO diagrams in Confluence Cloud
description: 'Drag-and-drop flowcharts, network diagrams and org charts in Confluence using the DrawIO engine. No DrawIO account and no separate subscription.'
keywords:
  [
    drawio confluence,
    draw.io confluence alternative,
    confluence flowchart macro,
    network diagram confluence,
    org chart confluence,
    confluence graph diagram,
  ]
unlisted: false
---

import Head from '@docusaurus/Head';

<Head>
<script type="application/ld+json">{`{"@context": "https://schema.org", "@type": "WebPage", "name": "DrawIO Diagrams in Confluence — Flowcharts & Graphs | ZenUML", "url": "https://zenuml.com/confluence/diagram-types/drawio/", "description": "Create DrawIO flowcharts, network diagrams, org charts, and graphs directly in Confluence using ZenUML's embedded DrawIO editor. No separate DrawIO account required.", "breadcrumb": {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://zenuml.com/confluence/"}, {"@type": "ListItem", "position": 2, "name": "Diagram Types", "item": "https://zenuml.com/confluence/diagram-types/"}, {"@type": "ListItem", "position": 3, "name": "DrawIO / Flowcharts"}]}, "isPartOf": {"@type": "SoftwareApplication", "name": "ZenUML for Confluence", "url": "https://zenuml.com/confluence/"}}`}</script>
<script type="application/ld+json">{`{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Does DrawIO work the same as diagrams.net in ZenUML?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — ZenUML embeds the same open-source DrawIO engine that powers diagrams.net. You get the full canvas: shape libraries, connectors, layers, styling, and multi-page diagrams. The editor runs entirely in your browser inside Confluence, so the experience is functionally identical to diagrams.net without needing to leave Confluence or maintain a separate account."}}, {"@type": "Question", "name": "Can I import an existing .drawio file into Confluence?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. DrawIO diagrams are stored as DrawIO XML, which is the same format used by .drawio and .xml files created in diagrams.net or the DrawIO desktop app. To import an existing diagram, open the DrawIO editor in ZenUML, use the Extras > Edit Diagram option to paste the XML directly, or use the File > Import from menu inside the editor. Your existing diagram will render exactly as it did in the standalone DrawIO tool."}}, {"@type": "Question", "name": "Do I need a DrawIO account?", "acceptedAnswer": {"@type": "Answer", "text": "No. ZenUML embeds the open-source DrawIO engine and runs it entirely inside Confluence. You do not need a diagrams.net account, a DrawIO subscription, or any external service. The only requirement is that ZenUML for Confluence is installed in your Atlassian Confluence Cloud instance."}}, {"@type": "Question", "name": "Can multiple people edit the same DrawIO diagram?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, in the same way that any Confluence page content can be edited by multiple people. When a user opens the DrawIO editor and saves, the new version becomes the current state of the diagram on the page. Confluence's built-in version history keeps every previous save, so earlier states can be reviewed and restored at any time. Simultaneous real-time co-editing (multiple cursors in the same DrawIO canvas at the same moment) is not supported — edits are sequential, last save wins."}}, {"@type": "Question", "name": "How do I export a DrawIO diagram from Confluence?", "acceptedAnswer": {"@type": "Answer", "text": "There are two ways. From the page viewer, click the diagram to open the fullscreen viewer and use the Export button to download a PNG or PDF of the rendered diagram. From inside the DrawIO editor itself, use File > Export As to export in DrawIO XML, SVG, PNG, PDF, or HTML format. The XML export gives you a .drawio-compatible file you can open in diagrams.net or the DrawIO desktop app."}}]}`}</script>
</Head>


Part of ZenUML for Confluence  ·  6 diagram types, one app

# Full DrawIO Editor, Right in Confluence

Create flowcharts, network diagrams, org charts, and any visual diagram using the open-source DrawIO engine — embedded directly into Confluence Cloud. No DrawIO account, no external tool, no copy-pasting images.

[Install Free — Lite Plan](https://marketplace.atlassian.com/search?query=zenuml+lite&hosting=cloud&product=confluence) · [All Diagram Types](/confluence/diagram-types/)

✓ Powered by the diagrams.net open-source engine ✓ No DrawIO account required ✓ Import existing .drawio files ✓ Renders in-browser — private by design

## What is DrawIO in ZenUML for Confluence?

ZenUML for Confluence includes a **full DrawIO diagram editor** as one of its six built-in diagram types. DrawIO (also known as diagrams.net) is the world's most widely used open-source diagramming engine — the same one that powers diagrams.net and the DrawIO desktop app. ZenUML embeds that engine directly inside Confluence Cloud, so you can create and edit visual diagrams without leaving your documentation.

When you insert a ZenUML Graph macro on a Confluence page and choose the DrawIO type, the editor opens in a **fullscreen modal** inside Confluence. The full DrawIO canvas is available: shape libraries (general, network, flowchart, UML, BPMN, and more), smart connectors, layers, styling controls, and multi-page diagrams. When you click Save & Exit, the diagram is stored as **DrawIO XML** in Confluence custom content and displayed inline on the page.

Because the DrawIO engine runs client-side in the browser, your diagram content is **never transmitted to ZenUML servers**. Diagrams are stored entirely within your Atlassian Confluence instance. No DrawIO account, no diagrams.net login, and no external subscription is required — only ZenUML for Confluence installed from the Atlassian Marketplace.

## 8 Types of Diagrams You Can Build

DrawIO's built-in shape libraries cover every common visual diagram type your team needs.

### Flowcharts

Map decisions, processes, and workflows with standard flowchart shapes — start/end terminals, decision diamonds, process boxes, and connectors with condition labels.

### Network Diagrams

Document cloud and on-premise infrastructure: servers, load balancers, databases, firewalls, and network zones. Includes AWS, Azure, and GCP icon libraries.

### Org Charts

Visualise team structures and reporting hierarchies. Add photos, titles, and department labels. Rearrange by dragging nodes — the connectors follow automatically.

### Mind Maps

Capture brainstorming sessions and topic hierarchies in a radial layout. Add branches, sub-branches, and colour coding directly on the canvas.

### BPMN Process Flows

Model business processes using BPMN 2.0 notation — events, gateways, tasks, pools, and lanes. Suitable for process analysis, audit trails, and compliance documentation.

### UML Class Diagrams

Draw class relationships, inheritance hierarchies, and interface implementations visually. Useful when a code-based tool like PlantUML is less convenient than direct canvas editing.

### ER Diagrams

Design database schemas visually with entities, attributes, and relationship cardinality lines. Export to PNG for handoff or keep updated inline on your Confluence data model page.

### Architecture Diagrams

Sketch system architecture — microservices, event buses, storage layers, and external integrations — with free-form shapes and custom icons. No fixed notation required.

## When to use DrawIO vs. ZenUML DSL or Mermaid

ZenUML for Confluence offers both visual and code-based diagram types. The right choice depends on your diagram style and who will maintain it.

### Use DrawIO when…

- Your team includes non-technical members who prefer a visual canvas
- The diagram is spatial or network-topology-based, where layout matters as much as structure
- You are working with existing `.drawio` or `.xml` files you want to reuse
- You need custom icons, logos, or free-form shapes that cannot be expressed in text syntax
- The diagram is an org chart, BPMN process flow, or infrastructure map
- Precise pixel-level control over layout is important

### Use ZenUML DSL or Mermaid when…

- Your team lives in code editors and prefers text over drag-and-drop
- The diagram represents a *sequence* of interactions — API calls, service flows, authentication flows
- You want the diagram source checked into a Git repository alongside your code
- You need to generate or regenerate diagrams from templates or scripts
- You want diffs between diagram versions to be readable as text
- The diagram will change frequently and textual editing is faster than canvas editing

Both diagram types coexist in the same ZenUML for Confluence installation. You can use DrawIO for your architecture overview and ZenUML DSL for the API sequence diagrams — on the same page, in the same Confluence space.

## Four steps from page to diagram

The DrawIO editor is embedded inside Confluence — nothing to install beyond the ZenUML Forge app.

1

### Insert the macro

On any Confluence page, type `/ZenUML` or open the macro picker. Select **Graph** as the diagram type.

2

### DrawIO editor opens

The full DrawIO canvas opens in a **fullscreen modal** — shape panel on the left, canvas in the centre, properties on the right. The complete diagrams.net experience, inside Confluence.

3

### Create or edit your diagram

Drag shapes from the library, draw connectors, add labels, apply styles, and arrange your layout. You can also paste in existing DrawIO XML to import a diagram you already have.

4

### Click Save & Exit

The diagram is saved as DrawIO XML in Confluence custom content and displayed inline on the page. Every save creates a new version — recoverable at any time through Confluence version history.

## Who uses DrawIO in Confluence and why

DrawIO in ZenUML for Confluence serves teams across disciplines — from infrastructure engineers to product managers to HR operations.

### Infrastructure teams documenting cloud architecture

A DevOps or platform engineer uses DrawIO to maintain a network topology diagram on the Confluence space for their service. They drag in AWS and GCP shape icons, connect services with labelled arrows, and add firewall boundaries as swim lanes. Because the diagram lives on the Confluence page rather than in a separate draw.io file or Lucidchart document, it stays next to the runbooks and is updated by the same engineers who update the infrastructure.

### Business analysts mapping BPMN process flows

A business analyst uses the BPMN shape library to model an order-fulfilment process across three departments — Sales, Warehouse, and Finance — using pools and lanes. The diagram is attached to the process documentation Confluence page and reviewed in quarterly audits. When a step changes, the analyst opens the DrawIO editor directly from the page, makes the update, and publishes — no version mismatch between the document and the diagram.

### HR and operations building org charts

An HR operations manager keeps the company org chart on a Confluence page using DrawIO. Employee names, titles, and reporting lines are maintained in the canvas. When someone joins, leaves, or moves teams, the manager opens the macro, edits the node, and publishes. The org chart is always live — no stale PowerPoint exports pinned to the page.

### Data engineers maintaining ER diagrams

A data engineer uses DrawIO to draw an entity-relationship diagram for the core data model and embeds it on the data platform Confluence space. When the schema evolves, they open the editor, move the affected entities and relationships, and save. The Confluence page becomes the authoritative source-of-truth for the data model — reviewable by anyone on the team without a database tool.

### Product managers facilitating workshop mind maps

A product manager runs a discovery workshop and captures the output as a mind map in DrawIO directly on the meeting-notes Confluence page. Participants can see the diagram grow in real time as the PM updates it. After the session, the mind map stays embedded in the Confluence page — no need to export a screenshot and attach a file that immediately becomes out of date.

## DrawIO in Confluence — Frequently Asked Questions

Common questions about using DrawIO diagrams in Confluence via ZenUML.

### Does DrawIO work the same as diagrams.net in ZenUML?

Yes — ZenUML embeds the **same open-source DrawIO engine** that powers diagrams.net. You get the full canvas: shape libraries (general, network, flowchart, UML, BPMN, AWS, Azure, GCP), smart connectors, layers, styling, and multi-page diagrams. The editor runs entirely in your browser inside Confluence, so the experience is functionally identical to diagrams.net without needing to leave Confluence or maintain a separate account.

### Can I import an existing .drawio file into Confluence?

Yes. DrawIO diagrams are stored as **DrawIO XML**, which is the same format used by `.drawio` and `.xml` files created in diagrams.net or the DrawIO desktop app. To import an existing diagram, open the DrawIO editor in ZenUML and use **Extras > Edit Diagram** to paste the XML directly, or use **File > Import from** inside the editor. Your existing diagram will render exactly as it did in the standalone DrawIO tool.

### Do I need a DrawIO account?

**No.** ZenUML embeds the open-source DrawIO engine and runs it entirely inside Confluence. You do not need a diagrams.net account, a DrawIO subscription, or any external service. The only requirement is that **ZenUML for Confluence** is installed in your Atlassian Confluence Cloud instance — available free on the Atlassian Marketplace.

### Can multiple people edit the same DrawIO diagram?

Yes, in the same way that any Confluence page content can be edited by multiple people. When a user opens the DrawIO editor and saves, the new version becomes the current state of the diagram on the page. Confluence's built-in **version history** keeps every previous save, so earlier states can be reviewed and restored at any time. Note: simultaneous real-time co-editing (multiple cursors in the same DrawIO canvas at the same moment) is not supported — edits are sequential, last save wins.

### How do I export a DrawIO diagram from Confluence?

- **From the page viewer** — click the diagram to open the fullscreen viewer and use the Export button to download a **PNG or PDF** of the rendered diagram.
- **From inside the DrawIO editor** — use **File > Export As** to export in DrawIO XML, SVG, PNG, PDF, or HTML format. The XML export gives you a `.drawio`-compatible file you can open in diagrams.net or the DrawIO desktop app.

[View full FAQ →](/confluence/faq/)

## Add DrawIO diagrams to your Confluence space today

Install ZenUML for Confluence free from the Atlassian Marketplace. DrawIO, sequence diagrams, Mermaid, PlantUML, and OpenAPI — all in one app. No server setup, no external accounts.

[Install Lite — Free](https://marketplace.atlassian.com/search?query=zenuml+lite&hosting=cloud&product=confluence) · [Install Full — Paid](https://marketplace.atlassian.com/search?query=zenuml+confluence&hosting=cloud&product=confluence) · [Compare plans](/confluence/pricing/)

1,000+

Confluence installs

4.8 ★

Marketplace rating

6

Diagram types in one app

Free

Lite plan — no credit card
