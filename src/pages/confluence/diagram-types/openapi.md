---
title: OpenAPI and Swagger docs in Confluence
description: 'Render an OpenAPI or Swagger specification as browsable API documentation on a Confluence page. The spec stays in the page and stays current.'
keywords:
  [
    openapi confluence,
    swagger confluence,
    api documentation confluence,
    confluence swagger macro,
    openapi spec confluence,
    rest api docs confluence,
  ]
unlisted: false
---

import Head from '@docusaurus/Head';

<Head>
<script type="application/ld+json">{`{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What OpenAPI versions does ZenUML support?", "acceptedAnswer": {"@type": "Answer", "text": "ZenUML for Confluence supports OpenAPI 3.0 (and 3.1) and Swagger 2.0 specifications. Both YAML and JSON formats are accepted. Paste the spec directly into the macro editor — no file upload or conversion step required."}}, {"@type": "Question", "name": "Can I test API endpoints from Confluence with ZenUML?", "acceptedAnswer": {"@type": "Answer", "text": "The Swagger UI rendered by ZenUML includes the 'Try it out' panel for each endpoint. Whether live requests succeed depends on whether your API backend is accessible from the browser and whether CORS is configured to allow the request origin. ZenUML itself does not proxy or restrict the requests — the browser sends them directly to the URL defined in the spec's servers field."}}, {"@type": "Question", "name": "Does the OpenAPI viewer support authentication headers in Swagger UI?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Swagger UI renders the Authorize button and auth dialogs defined in your spec's securitySchemes — including HTTP Basic, Bearer tokens, API keys, and OAuth 2.0 flows. Users can enter credentials in Swagger UI's auth dialog and they will be included in 'Try it out' requests. Credentials are held in browser memory only and are not persisted by ZenUML."}}, {"@type": "Question", "name": "How do I keep my OpenAPI spec updated in Confluence?", "acceptedAnswer": {"@type": "Answer", "text": "Edit the macro and paste the updated spec into the editor, then publish the Confluence page. Each save creates a new Confluence custom content version, so the full edit history is preserved and any past spec version can be restored. For teams using CI/CD, the Confluence REST API can be used to update page content programmatically — the spec lives as plain text, making automation straightforward."}}, {"@type": "Question", "name": "Can I embed an OpenAPI spec from a URL?", "acceptedAnswer": {"@type": "Answer", "text": "The ZenUML OpenAPI viewer requires the spec to be pasted directly into the macro editor — it does not fetch specs from an external URL at render time. This keeps the rendering fully in-browser and avoids exposing internal API URLs or requiring outbound network access from the viewer. If your spec is hosted externally, copy its content into the macro editor and update it manually when the spec changes."}}]}`}</script>
</Head>


1. [Home](/confluence/)
2. ›
3. [Diagram Types](/confluence/diagram-types/)
4. ›
5. OpenAPI

OpenAPI & Swagger

# Interactive API Docs in Confluence — OpenAPI & Swagger

Paste an OpenAPI 3.0 or Swagger 2.0 specification into a Confluence macro and it renders as a fully interactive Swagger UI — browse endpoints, expand schemas, and test calls without leaving your Confluence page.

[Install Free on Marketplace](https://marketplace.atlassian.com/apps/1218014/zenuml-sequence-diagram) · [All Diagram Types](/confluence/diagram-types/)

What is it?

## What is the OpenAPI viewer?

The ZenUML OpenAPI viewer is a Confluence macro that accepts an **OpenAPI or Swagger specification** written in YAML or JSON and renders it as an interactive [Swagger UI](https://swagger.io/tools/swagger-ui/) directly on the page. Readers can expand endpoints, read request and response schemas, view example payloads, and — when a backend is reachable — send live test requests, all from inside Confluence.

The spec is stored as plain text in Confluence custom content. Rendering happens entirely in the browser using the Swagger UI library — your API specification never leaves your Confluence instance during the rendering process. There is no external API documentation hosting service involved, and no ZenUML server receives the spec content.

The viewer is one of six diagram types bundled in a single ZenUML for Confluence installation. It is available in both the **free Lite plan** and the paid Full plan with no difference in OpenAPI functionality between the two.

Supported Formats

## OpenAPI 3.0, Swagger 2.0, JSON, YAML

The viewer accepts all common OpenAPI and Swagger specification formats. Paste whichever format your toolchain already produces — no conversion step is required.

OpenAPI 3.0 / 3.1

Swagger 2.0

YAML

JSON

### OpenAPI 3.x

The current OpenAPI Specification standard. Supports `components`, `requestBody`, multiple server URLs, and link objects. ZenUML renders OpenAPI 3.0 and 3.1 documents.

### Swagger 2.0

The widely-used predecessor to OpenAPI 3.x. If your existing toolchain generates Swagger 2.0 JSON or YAML, paste it as-is — the viewer handles it without any migration.

### YAML or JSON

Both serialisation formats are accepted. YAML is the more readable choice for hand-authored specs; JSON integrates cleanly with code-generation tools. Either format renders identically in Swagger UI.

Example

## A minimal OpenAPI spec in Confluence

Paste any valid OpenAPI YAML or JSON directly into the ZenUML macro editor. The snippet below is a self-contained example — copy it into the editor to see the Swagger UI rendered on your page.

openapi: "3.0.3" info: title: Petstore API version: "1.0.0" description: A sample API for demonstration purposes servers: - url: https://petstore.example.com/v1 paths: /pets: get: summary: List all pets operationId: listPets parameters: - name: limit in: query schema: type: integer responses: "200": description: A list of pets post: summary: Create a pet operationId: createPet requestBody: required: true content: application/json: schema: $ref: "#/components/schemas/Pet" responses: "201": description: Pet created components: schemas: Pet: type: object required: [id, name] properties: id: type: integer name: type: string

The rendered Swagger UI shows collapsible endpoint sections, parameter tables, request body schemas, response codes, and a "Try it out" panel — all generated from the spec text above.

Who is this for?

## API developers, technical writers, and platform teams

Any team that maintains API documentation benefits from keeping specs in Confluence alongside the rest of their technical documentation.

### API Developers

Paste your spec into a Confluence page and share a readable, interactive API reference with your teammates — without setting up a separate Swagger UI hosting environment. When the spec changes, update the macro content and republish.

### Technical Writers

Keep the canonical API spec on the same Confluence page as the narrative documentation, ADRs, and usage guides. Readers see both the reference and the context in one place, with no link-jumping to an external tool.

### Platform & Integration Teams

Document internal APIs and integration contracts in the same Confluence spaces where implementation notes and runbooks live. Consumers can explore the spec interactively and test endpoints against staging without switching tools.

Use Cases

## Four ways teams use the OpenAPI viewer

From internal microservices to public developer portals, the viewer fits wherever your API documentation needs to live close to your team's work.

01

### Internal microservice contracts

Engineering teams document internal REST APIs in the Confluence spaces where sprint plans and architecture decision records live. When a service adds a new endpoint or changes a response schema, the spec is updated in the macro and the page re-published. All consumers see the latest spec — formatted, searchable, and interactive — on the same page they already bookmark.

02

### API design review in Confluence

Before implementation begins, API designers share a draft spec on a Confluence design doc. Stakeholders explore the proposed endpoints in Swagger UI, leave inline Confluence comments on specific fields, and flag breaking changes — all within the page. Iteration happens on the spec text rather than on a static PDF or a screenshot of an external tool.

03

### Runbooks with embedded API reference

Operations and platform teams embed the relevant API spec sections in runbooks and incident response pages. When an on-call engineer responds to an alert, the Swagger UI is right there on the runbook page — they can read parameters, check response codes, and test calls against a staging endpoint without opening a separate tab.

04

### Partner and integration documentation

Teams that share APIs with external partners or other internal divisions publish the spec on a Confluence space shared with those audiences. The interactive Swagger UI gives consumers a self-service reference experience without requiring a dedicated developer portal or external hosting infrastructure.

Comparison

## OpenAPI viewer vs. other API documentation tools

ZenUML's OpenAPI viewer is not a replacement for purpose-built API portals — it solves a different problem: keeping your spec readable and interactive inside the Confluence workspace where your team's documentation already lives.

| Dimension | ZenUML OpenAPI viewer in Confluence | Standalone Swagger UI self-hosted | API portals e.g. Stoplight, Readme |
|---|---|---|---|
| **Where it lives** | Inside a Confluence page, next to your team docs | Separate URL, separate infrastructure | External SaaS portal, separate login |
| **Spec storage** | Confluence custom content (version-controlled) | File system or environment variable | Proprietary platform storage |
| **Rendering** | In-browser, Swagger UI — spec never leaves Confluence | In-browser, Swagger UI | Cloud-rendered, vendor-hosted |
| **Infrastructure needed** | None — included in the Confluence macro | A server or container to host the app | Vendor subscription |
| **Context alongside spec** | Full Confluence page content — ADRs, guides, diagrams | None (standalone app) | Guides supported, separate from org docs |
| **Audience** | Teams already working in Confluence | Internal developers with server access | External developers, large API products |

If you need a polished public developer portal with custom branding, versioning across many releases, and a dedicated consumer sign-up flow, a purpose-built API portal is the right tool. If you need your API spec to be readable and testable where your engineers and writers already work, the ZenUML OpenAPI viewer is the lower-friction choice.

FAQ

## Frequently asked questions

### What OpenAPI versions does ZenUML support?

ZenUML for Confluence supports **OpenAPI 3.0** (and 3.1) and **Swagger 2.0** specifications. Both YAML and JSON formats are accepted. Paste the spec directly into the macro editor — no file upload or conversion step required.

### Can I test API endpoints from Confluence with ZenUML?

The Swagger UI rendered by ZenUML includes the "Try it out" panel for each endpoint. Whether live requests succeed depends on whether your API backend is accessible from the browser and whether CORS is configured to allow the request origin. ZenUML itself does not proxy or restrict the requests — the browser sends them directly to the URL defined in the spec's `servers` field.

### Does the OpenAPI viewer support authentication headers in Swagger UI?

Yes. Swagger UI renders the **Authorize button** and auth dialogs defined in your spec's `securitySchemes` — including HTTP Basic, Bearer tokens, API keys, and OAuth 2.0 flows. Users can enter credentials in Swagger UI's auth dialog and they will be included in "Try it out" requests. Credentials are held in browser memory only and are not persisted by ZenUML.

### How do I keep my OpenAPI spec updated in Confluence?

Edit the macro and paste the updated spec into the editor, then publish the Confluence page. Each save creates a new Confluence custom content version, so the full edit history is preserved and any past spec version can be restored. For teams using CI/CD, the Confluence REST API can be used to update page content programmatically — the spec lives as plain text, making automation straightforward.

### Can I embed an OpenAPI spec from a URL?

The ZenUML OpenAPI viewer requires the spec to be **pasted directly into the macro editor** — it does not fetch specs from an external URL at render time. This keeps the rendering fully in-browser and avoids exposing internal API URLs or requiring outbound network access from the viewer. If your spec is hosted externally, copy its content into the macro editor and update it manually when the spec changes.

Get started for free

## Embed your first API spec in Confluence today

ZenUML Lite is free on the Atlassian Marketplace — no credit card, no external accounts. The OpenAPI viewer is included in the free plan alongside five other diagram types.

[Install Free on Marketplace](https://marketplace.atlassian.com/apps/1218014/zenuml-sequence-diagram) · [All Diagram Types](/confluence/diagram-types/)
