# dspmsoftware.com — Build Spec

> Status: AWAITING FINAL APPROVAL — all open questions resolved; ready to build on approval.
> Decisions incorporated from Jay's review: Why title approved, AI data security guide is fast-follow
> (not launch), no Defender Issue 01 repurposing, full vendor list incorporated, vendor profiles
> in scope at launch (criteria selected autonomously), Worker confirmed provisioned.

---

## 1. Site Identity

| Field | Value |
|---|---|
| Domain | dspmsoftware.com |
| Site name | DSPM Software |
| Topbar brand HTML | `DSPM <span>Software</span>` |
| Tagline | `independent guidance for DSPM buyers` |
| Newsletter name | The Independent Defender |
| Newsletter family | Defender (ASM + NHI + DSPM) |
| Feeds | Defender Free list |
| Sibling sites | attacksurfacemanagementsoftware.com, nonhumanidentitysoftware.com |

---

## 2. Accent Colors

| Token | Value | Used for |
|---|---|---|
| `--accent` | `#2E5CA6` | Links, active nav, callout borders, button backgrounds, step numbers |
| `--accent-dim` | `#1F3F78` | Button hover, link hover |
| `--accent-pale` | `#E6ECF7` | Verdict backgrounds, callout fills, tool gate bar |

FOUC guard in every `<head>`:
```html
<style>:root{--accent:#2E5CA6;--accent-dim:#1F3F78;--accent-pale:#E6ECF7}</style>
```

---

## 3. Newsletter Infrastructure

| Field | Value |
|---|---|
| Worker URL | `https://newsletter-dspmsoftware.whereismy328.workers.dev/subscribe` |
| MailerLite group ID | `189858273326793780` (Defender Free) |
| POST body | `{ email: "<address>", group_id: "189858273326793780" }` |
| Success check | `data.message === 'Subscribed'` |
| Wiring pattern | ASM pattern: auto-wire all `.newsletter-form` elements by class selector (not IDs) |
| Status element | Dynamically inserted `<p class="newsletter-status">` after the form |
| Worker status | Confirmed provisioned |

---

## 4. Vendor Roster

### Category 1 — Cloud-Native Pure-Plays

| Vendor | Profile page | Notes |
|---|---|---|
| Cyera | Yes | Cloud-native agentless leader; AI-native classification; shadow/dark data strength |
| Sentra | Yes | Cloud-first; data lineage and business-context focus |
| Symmetry Systems (DataGuard) | Yes | Graph-based; object-level permissions; Zero Trust and data sovereignty |
| Concentric AI | Yes | Semantic Intelligence engine; deep learning on unstructured text and AI prompts |

### Category 2 — CNAPP & Infrastructure Security Giants

| Vendor | Profile page | Notes |
|---|---|---|
| Wiz | Yes | DSPM integrated into Security Graph; toxic-combination detection |
| Palo Alto (Prisma Cloud) | No | CNAPP platform play; index entry only |
| SentinelOne | No | Runtime threat + data posture via Singularity; index entry only |
| Orca Security | No | Agentless CNAPP with native DSPM; index entry only |

### Category 3 — Legacy Data Security & Governance (DSPs)

| Vendor | Profile page | Notes |
|---|---|---|
| BigID | Yes | Data intelligence scale across legacy + cloud; privacy ops and compliance |
| Varonis | Yes | Unstructured data access governance; DDR and automated least-privilege |
| Securiti.ai | Yes | Data Command Center; AI governance + DSAR + privacy compliance |
| Thales (Imperva) | No | DSPM + native encryption/tokenization; index entry only |
| Spirion | No | Hybrid discovery and classification; index entry only |
| Netwrix | No | Access auditing and legacy structured data; index entry only |
| OpenText | No | Information management portfolio; index entry only |

### Category 4 — Hyper-Scale Cloud & Ecosystem

| Vendor | Profile page | Notes |
|---|---|---|
| Microsoft Purview / Defender DSPM | No | Ecosystem play; buyers already know it; index entry only |
| IBM Guardium | No | Enterprise risk management integration; index entry only |

### Category 5 — Architectural & Resiliency Outliers

| Vendor | Profile page | Notes |
|---|---|---|
| Cyberhaven | No | DSPM + DLP; endpoint + cloud data lineage; index entry only |
| DataStealth | No | Network-layer approach; no agents; legacy mainframe strength; index entry only |
| Rubrik | No | Backup-stream DSPM; cyber resilience angle; index entry only |
| Cohesity | No | Same backup-stream DSPM pattern as Rubrik; index entry only |

**Profile selection criteria (applied autonomously per Jay's instruction):**
Profiles are written for vendors that are (a) category leaders with high pre-RFP search intent, (b) architecturally distinctive enough to warrant a dedicated explanation, and (c) not already contextually obvious to the buyer from their existing product category (which excludes Microsoft, IBM, and the CNAPP-extension players). The 8 profiled vendors cover every meaningful architectural fault line in the market.

---

## 5. Page Inventory — 24 pages at launch

### Infrastructure / root (not pages, but listed for completeness)

| File | Status |
|---|---|
| `styles.css` | Verbatim copy from NHI |
| `config.js` | New — DSPM values |
| `nav.js` | New — DSPM nav |
| `newsletter.js` | New — DSPM Worker + group_id + ASM-class wiring |
| `vendors.json` | New — DSPM vendor data (feeds tool) |
| `favicon.svg` | Exists |
| `og-image.svg` | Exists as `og-image-dspm.svg` — rename |

### Home — `/index.html`

New content. Structure:
- Lead paragraph: pre-RFP homework problem; vendor content capture; what this site is
- "The problem hiding in plain sight" section
- "What this site covers" section (the four architectural fault lines)
- "Start here" card grid → Landscape, Vendors, Comparisons, Guides
- "Why independent" section

### Why — `/why/index.html`

New content. Title: **"The Data You Trust Is the Data You Haven't Classified."** Covers: why vendor-produced DSPM content fails the buyer, what independent coverage means for a market this volatile, how to use this site.

### Landscape — `/landscape/index.html`

New content. Core asset. Four fault lines as the organizing frame:
1. Cloud-native / agentless vs. collector / agent-based
2. Privacy-first / governance-led vs. security-first / behavioral
3. Identity-centric access mapping vs. classification-first
4. DSPM-as-feature-of-CNAPP vs. standalone platform

Sections: two-buyer framing (security team vs. compliance/governance), category walkthrough, consolidation direction, "where to go next" nav.

### Vendor Index — `/landscape/vendor-index/index.html`

New content. All 20 vendors in tabular form, organized by category. Each row: vendor name, primary category, deployment model, one-line description, profile link if one exists. No rankings. No sponsored placements.

### Vendor Profiles — `/vendors/[slug]/index.html`

8 pages. Each follows the `styles.css` tool-page pattern (`.tool-header`, `.tool-specs`, `.pros-cons`, `.verdict`). Template sections for each:
- Tool header (name, category, URL)
- Spec grid (deployment model, data store coverage, pricing tier, AI/ML capabilities)
- Overview section
- Architecture and key capabilities
- Strengths and limitations (pros-cons block)
- Target environment / fit guidance
- Verdict block
- Related comparisons (if any)

Slugs:

| Vendor | URL |
|---|---|
| Cyera | `/vendors/cyera/` |
| Varonis | `/vendors/varonis/` |
| BigID | `/vendors/bigid/` |
| Sentra | `/vendors/sentra/` |
| Symmetry Systems | `/vendors/symmetry-systems/` |
| Wiz | `/vendors/wiz/` |
| Securiti.ai | `/vendors/securiti/` |
| Concentric AI | `/vendors/concentric-ai/` |

### Comparisons Hub — `/comparisons/index.html`

New content. Brief framing + card grid.

### Comparisons — 4 head-to-heads

| Page | URL | Fault line | Priority |
|---|---|---|---|
| Cyera vs. Varonis | `/comparisons/cyera-vs-varonis/` | Agentless cloud-native vs. behavioral/collector | 1 |
| BigID vs. Securiti | `/comparisons/bigid-vs-securiti/` | Privacy-first governance pair | 2 |
| Sentra vs. Cyera | `/comparisons/sentra-vs-cyera/` | Two cloud-native pure-plays | 3 |
| Wiz vs. Standalone DSPM | `/comparisons/wiz-dspm-vs-standalone/` | Feature-of-CNAPP vs. standalone platform | 3 |

### Guides Hub — `/guides/index.html`

New content. Brief framing + card grid.

### Guides — 2 at launch, 1 fast-follow

| Page | URL | Priority | Scope |
|---|---|---|---|
| Agentless vs. Agent-Based | `/guides/agentless-vs-agent-based/` | 1 | Launch |
| Before a DSPM POC | `/guides/dspm-poc-evaluation/` | 2 | Launch |
| DSPM and AI Data Security | `/guides/dspm-ai-data-security/` | — | Fast follow (not launch) |

### Tools Hub — `/tools/index.html`

New content. Brief framing + card grid.

### Tools — 2 at launch

| Page | URL | Pattern |
|---|---|---|
| Vendor Comparison | `/tools/vendor-comparison/` | Filterable table from `vendors.json`; filters: category, deployment model, pricing, AI coverage |
| Architecture Fit Selector | `/tools/architecture-fit/` | Decision-tree tool; inputs: cloud-native %, compliance framework, existing CNAPP; output: recommended approach |

### Subscribe — `/subscribe/index.html`

New content. Standard subscribe page.

---

## 6. nav.js Structure

```
[Why]
  The data you trust (→ /why/)

[Landscape]
  Market overview (→ /landscape/)
  ├ Vendor index (→ /landscape/vendor-index/)

[Vendors]
  All vendors (→ /landscape/vendor-index/)
  ├ Cyera (→ /vendors/cyera/)
  ├ Varonis (→ /vendors/varonis/)
  ├ Wiz (→ /vendors/wiz/)
  └ more (→ /landscape/vendor-index/)

[Tools]
  All tools (→ /tools/)
  ├ Vendor comparison (→ /tools/vendor-comparison/)
  └ Architecture fit (→ /tools/architecture-fit/)

[Comparisons]
  All comparisons (→ /comparisons/)
  ├ Cyera vs. Varonis
  ├ BigID vs. Securiti
  ├ Wiz vs. Standalone
  └ more (→ /comparisons/)

[Guides]
  All guides (→ /guides/)
  ├ Agentless vs. agent-based
  ├ Before a DSPM POC
  └ more (→ /guides/)

[Subscribe →]  (nav-subscribe style)
```

---

## 7. Newsletter Block Markup

Standard on every content page. Only `.page-label` text and `<p>` body vary by page. No IDs on input or button — newsletter.js wires by `.newsletter-form` class.

```html
<div class="newsletter-block">
  <span class="page-label">The Independent Defender</span>
  <p>Covers the DSPM market the way your vendors hope you won't. Twice monthly.</p>
  <div class="newsletter-form">
    <input type="email" placeholder="your@email.com" aria-label="Email address">
    <button type="button">Subscribe free</button>
  </div>
</div>
```

---

## 8. SEO / Meta Pattern

Every page:
- `<title>`: `[Page Title] | DSPM Software` (home: `DSPM Software — Independent Buyer's Guide`)
- `<meta name="description">`: unique per page, no fabricated statistics
- `<link rel="canonical">`: absolute URL
- OG tags: title, description, URL, type (`website` for home; `article` for all others)
- Two `ld+json` blocks: content type (`WebSite`/`Organization` for home, `Article` elsewhere) + `BreadcrumbList`
- Inline accent FOUC guard
- Load order: inline style → `styles.css` → `config.js defer` → `nav.js defer`
- Pre-`</body>`: `<script src="/nav.js">` + `<script src="/newsletter.js">`
- `<meta name="robots" content="index, follow">` on all pages

---

## 9. What Is Reused Verbatim vs. New

### Verbatim from NHI (zero edits)
- `styles.css` — entire design system
- HTML structural boilerplate: topbar, layout/sidebar/main wrappers, footer, breadcrumb, font preconnect
- All CSS class names and component patterns (callout, verdict, pros-cons, wins-grid, compare-table, card-grid, step-list, newsletter-block, newsletter-form)
- Page-local `<style>` blocks for two-col-contrast, compare-table overrides, wins-grid — copied as-is; all reference `var(--accent)` only

### New
- `config.js`, `nav.js`, `newsletter.js`, `vendors.json`
- All `<title>`, `<meta>`, canonical URLs, OG tags, LD+JSON
- All body copy

---

## 10. Build Order

1. `config.js`, `nav.js`, `newsletter.js`, `vendors.json`
2. Home, Why, Subscribe
3. Landscape, Vendor Index
4. Vendor profiles (8 pages)
5. Comparisons hub + 4 head-to-heads (Priority 1 first)
6. Guides hub + 2 launch guides
7. Tools hub + 2 tools
