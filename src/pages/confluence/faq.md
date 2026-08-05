---
title: FAQ — ZenUML for Confluence
description: 'Answers on diagram limits, data privacy, Forge hosting, supported diagram types, exporting, migration from other tools, and billing through Atlassian.'
keywords:
  [
    zenuml confluence faq,
    confluence diagram app questions,
    confluence diagram data privacy,
    forge app data residency,
    confluence diagram limit,
    zenuml support,
  ]
unlisted: false
---

[Home](/confluence/) › FAQ

# Frequently Asked Questions

Everything you need to know about installing, using, and getting the most out of ZenUML for Confluence.

[Getting Started](#getting-started) [Diagram Types](#diagram-types) [Pricing & Plans](#pricing) [Features & Usage](#features) [Technical & Privacy](#technical) [Troubleshooting](#troubleshooting)

## Getting Started

### How do I install ZenUML for Confluence?

Open your Confluence Cloud site, go to **Settings → Find new apps** (or visit the [Atlassian Marketplace](https://marketplace.atlassian.com) and search for *ZenUML*). Click **Install** on the ZenUML for Confluence listing.

Confluence will ask you to review and approve the Forge permissions the app requires — these cover reading and writing page content so diagrams can be saved and displayed. Once you approve, the app is active immediately for all users on your site. No server setup or configuration is needed.

### Is ZenUML for Confluence compatible with Confluence Server or Data Center?

ZenUML for Confluence is a **Forge app and runs exclusively on Confluence Cloud**. It is not compatible with Confluence Server or Confluence Data Center.

If your organisation is on Server or Data Center and is planning a migration to Cloud, ZenUML will be available as soon as your Confluence instance is on Cloud. Contact the ZenUML team if you need help planning the transition.

### What is the difference between ZenUML Lite and ZenUML Full?

**ZenUML Lite** is the free tier. It supports all six diagram types (Sequence, Mermaid, DrawIO, PlantUML, OpenAPI, and Embed) but is limited to **100 diagrams per Confluence space**. Once a space reaches that threshold, a paywall prompt appears for new edits.

**ZenUML Full** removes the per-space diagram limit entirely. It is licensed through the Atlassian Marketplace on a per-user-tier pricing model. Both plans receive the same diagram types and features — the only difference is the space-level diagram cap.

### How do I create my first diagram?

While editing any Confluence page, type **/** (forward slash) to open the insert menu and search for *ZenUML* or *Diagram as Code*. Select the diagram type you want — Sequence, Mermaid, DrawIO, PlantUML, or OpenAPI.

The ZenUML editor opens with a starter template. Edit the code on the left side; the rendered diagram updates live on the right. Click **Publish** or **Save** when you are happy with the result. The diagram is embedded in the page and stored as Confluence custom content.

### Can I migrate diagrams from another diagramming tool?

Partially, depending on the source format:

- **DrawIO / diagrams.net:** ZenUML includes a full DrawIO editor, so existing DrawIO XML files can be opened and continued.
- **Mermaid:** Paste your Mermaid source directly into the Mermaid diagram type — no conversion needed.
- **PlantUML:** Paste your PlantUML text directly into the PlantUML diagram type.
- **Image-only diagrams (Lucidchart, Gliffy, Visio):** These cannot be imported. Diagrams stored only as images need to be recreated as code-based diagrams or re-imported into DrawIO.

## Diagram Types

### What is a ZenUML sequence diagram?

A ZenUML sequence diagram describes interactions between participants (people, services, systems) over time using a text-based DSL (domain-specific language). The ZenUML DSL is designed to be more readable and maintainable than traditional UML text formats. For example:

This renders a clean, standards-compliant UML sequence diagram. Because diagrams live as code, they are diffable in version control, reviewable in pull requests, and reproducible from a plain-text source.

### What Mermaid diagram types are supported?

ZenUML for Confluence supports all mainstream Mermaid diagram types, including:

- Flowcharts (graph TD / LR)
- Sequence diagrams
- Class diagrams
- State diagrams
- Entity relationship (ER) diagrams
- Gantt charts
- Pie charts
- User journey maps
- Git graph
- Mind maps
- Block diagrams
- Requirement diagrams

The Mermaid renderer is kept up to date with recent Mermaid.js releases. If a specific Mermaid diagram type is not rendering, check whether it is available in the current Mermaid version bundled with the app.

### Can I use DrawIO / diagrams.net in Confluence with ZenUML?

Yes. ZenUML for Confluence includes a fully integrated DrawIO (diagrams.net) editor as the **Graph** diagram type. You get the complete DrawIO canvas — drag-and-drop shapes, AWS, Azure, and GCP shape libraries, network topology shapes, BPMN shapes, and all standard export options — embedded directly in Confluence without leaving the page.

Diagrams are stored as Confluence custom content (not as file attachments), so they remain associated with the page and do not clutter the page's attachment list.

### What PlantUML diagram types does ZenUML support?

ZenUML's PlantUML renderer supports all standard PlantUML diagram types:

- Sequence diagrams
- Use case diagrams
- Class diagrams
- Activity diagrams (both legacy and new beta syntax)
- Component diagrams
- State diagrams
- Object diagrams
- Deployment diagrams
- Timing diagrams
- Mind maps and WBS (work breakdown structure)
- Network diagrams (nwdiag)

PlantUML diagrams are sent to the PlantUML rendering service to produce an image, which is then displayed in your Confluence page. See the [Technical & Privacy](#technical) section for details on data handling.

### How do I embed an OpenAPI specification in Confluence?

Use the **OpenAPI** diagram type. Insert a ZenUML macro, choose OpenAPI / Swagger, and paste your OpenAPI 3.x or Swagger 2.0 YAML or JSON specification into the editor. ZenUML renders it as an interactive Swagger UI panel directly inside your Confluence page.

Readers can browse endpoints, expand request and response schemas, and review authentication requirements without leaving Confluence. This is particularly useful for API documentation pages, internal developer portals, and architecture decision records.

### Can I embed a diagram from another Confluence page?

Yes. The **Embed** diagram type lets you reference an existing ZenUML, Graph (DrawIO), or OpenAPI macro stored on any other page within the same Confluence site. You provide the source page reference and macro identifier; ZenUML renders the diagram inline on the target page.

When the source diagram is updated on its home page, the embedded copy reflects the change automatically — there is no need to update each page that embeds it. This is ideal for reusing architecture diagrams, data-flow diagrams, or API specs across multiple documentation pages without maintaining duplicate copies.

## Pricing & Plans

### Is ZenUML for Confluence free?

**ZenUML Lite is permanently free with no time limit.** It supports all six diagram types and up to 100 diagrams per Confluence space. No credit card is required.

For teams that need more than 100 diagrams per space, **ZenUML Full** is a paid upgrade available on the Atlassian Marketplace with per-user-tier pricing. A 30-day free trial is available for Full.

### What does the 100-diagram limit mean for Lite?

The Lite plan allows up to **100 ZenUML diagrams to be saved within a single Confluence space**. Once a space reaches 100 diagrams, creating or editing diagrams in that space triggers a soft paywall prompt.

**Existing diagrams are always viewable** — the limit affects saving and editing, not rendering. The limit is per space, so a Confluence site with multiple spaces each gets its own independent 100-diagram allowance. A team with five active spaces can have up to 500 Lite diagrams across the site.

### How do I upgrade from Lite to Full?

Visit the [Atlassian Marketplace](https://marketplace.atlassian.com) listing for ZenUML for Confluence, click **Try it free** or **Buy now**, and follow the standard Atlassian Marketplace checkout. Billing is handled entirely by Atlassian — ZenUML never receives your payment details.

After purchase, the Full plan activates automatically on your Confluence site and the per-space diagram limit is removed. If ZenUML Lite is already installed, you can also trigger the upgrade from **Settings → Manage apps → ZenUML → Upgrade**.

### Does ZenUML charge per user?

ZenUML Full follows the **standard Atlassian Marketplace tier-based pricing model**. You pay a single flat fee based on the number of users at your Confluence site (for example, 1–10 users, 11–25 users, 26–50 users, and so on) — not a per-seat per-month charge for each individual user.

The Lite plan is free for any number of users.

### Is there a free trial for the Full plan?

Yes. The Atlassian Marketplace provides a standard **30-day free trial** for ZenUML Full. During the trial, all Full features are unlocked with no diagram limits across all spaces.

At the end of the trial period, if you do not purchase, the app automatically reverts to Lite plan behaviour. No credit card is required to start the trial — it is initiated through your standard Atlassian Marketplace account.

## Features & Usage

### How do I export a diagram to PNG?

Open the diagram in the ZenUML fullscreen viewer by clicking the **expand / fullscreen icon** on the diagram macro in view mode. In the toolbar, click the **Export** or **Download** button and select PNG. The diagram renders at high resolution and downloads to your computer.

For DrawIO diagrams, the DrawIO editor also offers direct export to PNG, SVG, PDF, HTML, and XML from its own **File → Export as** menu inside the editor.

### Does ZenUML have a fullscreen editor?

Yes. Every diagram type has a fullscreen mode:

- **View mode:** Click the expand icon on any diagram macro to open an immersive fullscreen viewer with zoom, pan, and export controls.
- **Edit mode:** The ZenUML editor opens as a modal overlay with a **split-pane layout** — code on the left, live preview on the right. You can drag the divider to give more space to either side. The fullscreen button in the editor header expands the entire editor to your full browser viewport.

### Can I see version history for my diagrams?

Diagram content is stored as Confluence custom content attached to the page. Confluence does not currently expose separate version history for custom content the way it does for page body text.

To track diagram history, the recommended approach is to use **Diagram as Code**: because your diagram source is plain text, you can copy it into a code block in the page body. Confluence's page version history then captures how the source changed over time. For teams with strict audit requirements, storing diagram source in a Git repository alongside other code assets is also an option.

### How does Diagram as Code work?

Diagram as Code means your diagram is **defined entirely by a text source** — ZenUML DSL, Mermaid syntax, PlantUML text, or OpenAPI YAML. The text is the single source of truth. ZenUML stores this text and renders it into a visual diagram on demand.

Because the source is plain text you can:

- Version it in Git and diff changes in pull requests
- Generate diagrams programmatically from code or documentation pipelines
- Review diagram changes in code review tools before publishing
- Reproduce the exact same diagram on any machine from the source alone

There is no proprietary binary format that requires a specific tool to open.

### Does ZenUML support AI diagram generation?

ZenUML does not include a built-in AI generation feature inside the Confluence app at this time. However, because ZenUML diagrams are text-based, you can use any AI assistant (ChatGPT, Claude, Gemini, etc.) to generate ZenUML DSL or Mermaid syntax, then paste the result directly into the ZenUML editor.

The [ZenUML MCP server](https://github.com/ZenUml/diagramly-mcp-serverless) (available separately) also enables AI assistants that support the Model Context Protocol to generate and render ZenUML diagrams programmatically as part of an agentic workflow.

### Can multiple users edit the same diagram simultaneously?

ZenUML does not support real-time collaborative co-editing (multiple cursors in the same diagram at once). Confluence's own page locking applies: only one user should have the page in edit mode at a time to avoid conflicts.

For teams with frequent diagram updates, the recommended practice is to treat diagram source the same as code: make changes in short, focused sessions and publish promptly. The text-based nature of ZenUML, Mermaid, and PlantUML diagrams makes merge conflicts easier to resolve than binary diagram formats.

## Technical & Privacy

### Is my diagram content sent to ZenUML servers?

Your diagram text and rendered output is **stored as Confluence custom content on Atlassian's infrastructure** — the same servers that store your page content. ZenUML's own Cloudflare backend handles only app lifecycle events (install/upgrade), licence status checks, and anonymous usage telemetry. Your diagram source is not sent to ZenUML servers for rendering or persistent storage.

**PlantUML is the one exception:** PlantUML diagrams are sent to a PlantUML rendering server (plantuml.com by default) to produce the image. This is consistent with how PlantUML works across all Confluence integrations and is inherent to the PlantUML architecture. If your organisation requires all data to stay within a specific region, consider using a self-hosted PlantUML server and contacting us to configure the endpoint.

### Is ZenUML built on Atlassian Forge or Connect?

ZenUML for Confluence is a **fully Forge-native app**. It uses Atlassian Forge Custom UI and Forge remotes — there is no legacy Atlassian Connect runtime in the production app.

Forge apps run in Atlassian's managed, isolated infrastructure. This means stronger security boundaries, no external webhook server required for JWT authentication, automatic security updates from Atlassian, and alignment with Atlassian's long-term platform direction (Connect is in maintenance mode; Forge is the strategic platform).

### What permissions does ZenUML require?

ZenUML requests the minimum Forge scopes needed to function:

- **Read and write Confluence custom content** — to save and load diagram data associated with macros.
- **Read page and space context** — to know which page the macro is on and to check space-level diagram counts for Lite enforcement.
- **Read user account information** — to associate diagrams with their author and display creator information.

ZenUML does **not** request admin permissions, does not read or write page body content, and does not access content outside the pages where its macros are placed.

### Does ZenUML work offline?

No. ZenUML for Confluence is a cloud app that requires an internet connection to Confluence Cloud and Atlassian's Forge runtime. There is no offline or local-only mode within Confluence.

If you need offline diagram editing, the **ZenUML standalone web app** at [app.zenuml.com](https://app.zenuml.com) works in modern browsers with limited offline capability via service worker caching, and supports the same ZenUML DSL syntax. The **ZenUML VS Code extension** also provides offline diagram editing and preview inside Visual Studio Code.

## Troubleshooting

### My diagram is not rendering — what should I check?

Work through these checks in order:

- **Syntax errors:** The ZenUML editor highlights syntax problems in the code panel and shows an inline error message below the preview. For Mermaid diagrams, even a single misplaced character can prevent rendering — read the error message carefully, as it usually names the problematic line.
- **Hard reload:** Press Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (macOS) to fully reload the Confluence page and clear cached state.
- **Browser console:** Open browser developer tools (F12) and check the Console tab for JavaScript errors. Copy any error messages when reporting a bug.
- **Browser extensions:** Ad-blockers and privacy extensions occasionally block Forge iframe content. Try in an incognito window with extensions disabled to confirm.
- **Plan check:** All diagram types are available on both Lite and Full — the plan difference is only the space diagram count, not diagram type access.

If none of these resolve the issue, file a bug report on [GitHub](https://github.com/ZenUml/conf-app/issues) with the diagram source and browser console output.

### The export to PDF or Word includes a blank where my diagram should be — why?

This is a **known limitation of Confluence's native PDF and Word export**. Confluence exports page body HTML without executing JavaScript, so Forge Custom UI macros (which render inside JavaScript-driven iframes) appear blank in exported documents.

To include a diagram in an exported document, use one of these workarounds:

- **Export to PNG first:** Use ZenUML's fullscreen viewer Export button to download the diagram as a PNG image, then insert that image into the Confluence page body before running the Confluence export.
- **DrawIO SVG export:** For DrawIO diagrams, use the DrawIO editor's File → Export as → SVG to get a vector image, then embed it in the page.

This limitation affects all Forge-based Confluence apps, not only ZenUML. It is a Confluence platform constraint, not an app-specific bug.

### I cannot find ZenUML in the Confluence slash menu — what should I do?

Try these steps in order:

- **Confirm installation:** Go to **Settings → Manage apps** and check that ZenUML appears in the list and is enabled.
- **Search by partial name:** In the slash menu, type /zen or /diagram — partial matches sometimes surface faster than browsing the full list.
- **Refresh the editor:** Close the Confluence tab and reopen it with a full page reload. Forge app registrations sometimes require a fresh session to appear in the slash menu.
- **New editor required:** ZenUML requires the **new Confluence editor**. If your space is still using the legacy editor (fabric), ZenUML macros will not appear. Contact your Confluence admin to enable the new editor for your space.
- **Admin restrictions:** Your Confluence site admin may have restricted which apps or macro types are available in specific spaces or to specific user groups. Check with your admin.

If the app is installed and enabled but still not appearing after a refresh, file a support request on [GitHub](https://github.com/ZenUml/conf-app/issues).

### How do I report a bug or request a feature?

Open a GitHub issue at [github.com/ZenUml/conf-app/issues](https://github.com/ZenUml/conf-app/issues).

**For bugs,** include:

- The diagram type (Sequence, Mermaid, DrawIO, PlantUML, OpenAPI, or Embed)
- The DSL or source text that triggers the problem
- Your browser name and version, and your OS
- Any error messages from the browser console (F12 → Console)
- Whether the issue reproduces on a freshly created diagram or only on existing ones

**For feature requests,** describe the use case rather than the specific solution — understanding the underlying need helps the team prioritise correctly.

You can also leave a review and feature suggestion via the [Atlassian Marketplace](https://marketplace.atlassian.com) listing. Reviews are read by the ZenUML product team.

## Still have questions?

Install ZenUML Lite for free and explore all diagram types right inside Confluence. No credit card, no time limit.

[Install Free on Marketplace](https://marketplace.atlassian.com/apps/1218971) [Open a GitHub Issue](https://github.com/ZenUml/conf-app/issues)
