---
title: Diagram types — 6 formats in one Confluence app
description: 'Sequence, Mermaid, PlantUML, DrawIO, OpenAPI and Embed — six diagram types from a single Confluence macro. Pick the format that fits the document.'
keywords:
  [
    confluence diagram types,
    uml diagrams confluence,
    flowchart confluence,
    confluence architecture diagram,
    diagram formats confluence,
    confluence macro diagram,
  ]
unlisted: false
---

# 6 Diagram Types in One Confluence App

ZenUML for Confluence covers every diagramming need your engineering and documentation team has — sequence diagrams, flowcharts, UML, API specs, and more — from a single Forge app installation. No switching tools, no pasting images, no external accounts.

[⚡ Install Free — Lite Plan](https://marketplace.atlassian.com/search?query=zenuml+lite&hosting=cloud&product=confluence) [See All Features](/confluence/features/)

✓ All 6 types on the free Lite plan ✓ All rendering in-browser — private by design ✓ One macro, one picker — choose the type on insert

## Choose the Right Diagram Type

Each type targets a different authoring workflow. Pick the one that fits your diagram — or mix types across Confluence pages freely.

## Sequence Diagrams

Write UML 2.5.1-compliant sequence diagrams in **ZenUML DSL** — a concise, readable text syntax. Live preview updates as you type. AI-assisted generation included. Ideal for teams who want diagrams that live alongside code.

- REST and gRPC API call flows
- Microservice interaction documentation
- Authentication and authorization sequences
- System design and architecture reviews

[Learn more →](/confluence/diagram-types/sequence-diagrams/)

## Mermaid

Full **Mermaid.js** support for the widest variety of diagram subtypes in a single text syntax. Write Mermaid directly in Confluence without any external tool or service — the renderer runs entirely in the browser.

- Flowcharts and process diagrams
- Class diagrams and ER diagrams
- Gantt charts and project timelines
- State machines and pie charts

[Learn more →](/confluence/diagram-types/mermaid/)

## DrawIO / Flowcharts

The full **DrawIO drag-and-drop editor** embedded inside Confluence as a fullscreen modal. No separate DrawIO account or subscription required — diagrams are stored as Confluence custom content and rendered inline on your pages.

- General-purpose flowcharts and process maps
- Network and infrastructure diagrams
- Org charts and team structures
- Wireframes and system overviews

[Learn more →](/confluence/diagram-types/drawio/)

## PlantUML

Render **PlantUML** diagrams from text syntax directly in Confluence. Paste existing PlantUML code or write new diagrams in the editor — live preview, version history, and copy-to-clipboard included.

- Class diagrams and inheritance hierarchies
- Component and deployment diagrams
- Activity and state diagrams
- Use-case diagrams for requirements

[Learn more →](/confluence/diagram-types/plantuml/)

## OpenAPI / Swagger

Paste an **OpenAPI 3.0 or Swagger 2.0** specification in YAML or JSON and get an interactive **Swagger UI** rendered directly on the Confluence page — endpoint explorer, request schemas, and response bodies, all without leaving Confluence.

- API reference documentation embedded in Confluence
- Keeping specs co-located with architecture decisions
- Review and onboarding for new API consumers
- Internal developer portals built on Confluence

[Learn more →](/confluence/diagram-types/openapi/)

## Embed

Reference an existing ZenUML sequence diagram, DrawIO flowchart, or OpenAPI spec stored on another Confluence page. Every page that embeds the diagram automatically renders the **latest saved version** — single source of truth, zero copy-paste drift.

- Reusing a master architecture diagram across multiple docs
- Linking a shared API spec from several team pages
- Surfacing a central component diagram in sub-space pages
- Keeping onboarding docs in sync with design evolution

[How it works ↓](#faq)

## Which Diagram Type Should I Use?

Use this table as a quick reference. When multiple types fit, prefer diagram-as-code (ZenUML, Mermaid, PlantUML) for text that needs to stay in sync with code, and DrawIO for visual layouts that benefit from spatial arrangement.

| I need to document… | Best type | Also works | Why |
|---|---|---|---|
| API call sequences between services | ZenUML Sequence | Mermaid sequence | ZenUML DSL is the most concise syntax for request/response flows; live preview makes iteration fast |
| A decision or process flowchart | Mermaid | DrawIO | Mermaid `flowchart` diagrams render branching logic cleanly from text; DrawIO if visual layout precision matters |
| Object model or class hierarchy | PlantUML | Mermaid classDiagram | PlantUML class syntax is the most complete for full UML class notation (visibility, stereotypes, notes) |
| Network topology or infrastructure layout | DrawIO | PlantUML deployment | DrawIO's shape library covers network icons; spatial placement is clearer for topology than text syntax |
| REST or OpenAPI endpoint reference | OpenAPI / Swagger | — | Interactive Swagger UI gives consumers a try-it-out explorer; no equivalent in other types |
| Project schedule or roadmap | Mermaid | DrawIO | Mermaid `gantt` type renders timelines directly from text date ranges |
| Database entity-relationship model | Mermaid | PlantUML | Mermaid `erDiagram` is concise and renders relationship cardinalities clearly |
| Reusing a diagram from another page | Embed | — | Embed always shows the latest version of the source diagram; no manual copy needed |
| Org chart or team structure | DrawIO | Mermaid | DrawIO's drag-and-drop layout is more practical for visual hierarchies with photos or color coding |
| State machine or event-driven flow | PlantUML | Mermaid stateDiagram | PlantUML state syntax supports nested states, concurrent regions, and guards with clear notation |

## Diagram as Code vs. Visual Editing

ZenUML for Confluence deliberately supports both authoring philosophies. Understanding the trade-offs helps you pick the right type for each diagram.

✍️

### Diagram as Code

**Types: ZenUML, Mermaid, PlantUML** You write plain text using a diagram-specific syntax. The renderer converts that text into an SVG diagram at render time.

- Source is stored as plain text — readable, searchable, copyable
- Diffs are meaningful: changing a line in the spec changes a line in the diagram source
- Works well with copy-to-clipboard and AI generation: the AI outputs text you paste straight in
- Version history is human-readable — you can see exactly what changed between saves
- Faster for complex repeating structures (large sequence diagrams, many classes) because you type rather than drag
- Trade-off: layout is auto-computed — you cannot freely position individual elements

🖱️

### Visual Editing

**Type: DrawIO** You drag, drop, and connect shapes on a canvas. The diagram data is stored as an XML representation of the canvas state.

- Precise spatial control — place every element exactly where you want it
- Rich shape library — network icons, AWS/Azure shapes, BPMN, org chart templates
- No syntax to learn — accessible to non-engineers and less technical writers
- Ideal for diagrams where visual layout conveys meaning (topology, floor plans, org charts)
- Works in the same ZenUML macro and Confluence page — same install, same export, same version history
- Trade-off: bulk updates require manual repositioning; not trivially diffable as text

**Practical recommendation:** Use diagram-as-code (ZenUML, Mermaid, PlantUML) for diagrams that need to stay in sync with code changes — API flows, data models, state machines. Use DrawIO for diagrams where visual positioning and custom iconography are the primary value — infrastructure maps, network topologies, org charts. Use Embed to reuse either type across multiple pages without duplicating the source.

## Frequently Asked Questions

Common questions about diagram types in ZenUML for Confluence.

### How many diagram types does ZenUML for Confluence support?

- **ZenUML Sequence** — text-based UML 2.5.1 sequence diagrams in ZenUML DSL
- **Mermaid** — full Mermaid.js syntax: flowcharts, Gantt, ER, class, state, sequence, pie
- **DrawIO / Flowcharts** — drag-and-drop canvas using the DrawIO engine
- **PlantUML** — class, component, deployment, activity, state, and use-case diagrams
- **OpenAPI / Swagger** — interactive rendering of OpenAPI 3.x and Swagger 2.0 specs
- **Embed** — reference an existing diagram from another Confluence page as a live embed

### What is the difference between diagram-as-code and visual diagramming?

**Diagram-as-code** (ZenUML, Mermaid, PlantUML) means writing your diagram in a text syntax — the renderer computes the layout and produces the visual output. The source is plain text, which makes it easy to version, diff, copy, and generate with AI. **Visual diagramming** (DrawIO) means dragging and dropping shapes on a canvas, then connecting them manually. You control the exact position of every element. This is better for diagrams where spatial layout itself conveys meaning — network topologies, org charts, floor plans. Both approaches store diagrams as Confluence custom content and render in the browser. Both are part of the same ZenUML macro.

### Which diagram type should I use for API documentation?

- **API endpoint reference** (routes, parameters, request/response schemas) — use **OpenAPI / Swagger**. Paste your OpenAPI 3.x or Swagger 2.0 YAML/JSON and get an interactive Swagger UI explorer directly on the Confluence page.
- **API call sequence** (who calls whom, in what order) — use **ZenUML Sequence** or **Mermaid sequence**. Both render clear actor-to-actor message flows.

### Can I use the Embed type to reuse a diagram across multiple pages?

Yes. The **Embed** type lets you select any existing diagram stored in a Confluence page (in the same space or another space you have access to) and display it on the current page. The embed always renders the **latest saved version** of the source diagram — you update the original once and every embedding page automatically reflects the change. This is the recommended approach for shared component diagrams, master architecture diagrams, and canonical API specs that multiple teams reference.

### Do all six diagram types work on the free Lite plan?

- **Lite (free)** — up to 100 diagrams per space, all six types
- **Full (paid)** — unlimited diagrams across all spaces, all six types

[View full FAQ →](/confluence/faq/)

## All Six Types — One Install

Install ZenUML for Confluence once from the Atlassian Marketplace and every diagram type is immediately available from the same macro — no configuration, no external accounts.

[⚡ Install Lite — Free](https://marketplace.atlassian.com/search?query=zenuml+lite&hosting=cloud&product=confluence) [Install Full — Paid](https://marketplace.atlassian.com/search?query=zenuml+confluence&hosting=cloud&product=confluence) [Compare plans](/confluence/pricing/)

Rated 4.8★ on Atlassian Marketplace  ·  1,000+ installs  ·  Published by **P&D VISION**
