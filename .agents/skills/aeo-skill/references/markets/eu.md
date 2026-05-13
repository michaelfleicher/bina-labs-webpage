# AEO Skill - Market: EU

> Loaded on-demand by the AEO skill router when the target market is in the European Union. Apply these overrides to all general AEO advice from `references/knowledge-base.md`.

If `market = EU` (or a specific EU member state) is detected, apply all of these as overrides to general advice. The EU is multi-language (DE / FR / IT / ES / NL / PL / ...); detect the sub-market and apply the relevant directory + language overrides below.

### Market context
- _To be researched per engagement._

### Language + tokenization
- Multi-language market. Detect the specific sub-market (DE, FR, IT, ES, ...) and apply per-language content + schema overrides.
- _Per-language tokenization quirks to be researched per engagement (e.g., German compound words can shift token budgets)._

### Schema currency + locale
- Currency: `"EUR"` (note: non-Eurozone EU members differ - research per engagement)
- Address: `addressCountry` varies per country (`"DE"`, `"FR"`, `"IT"`, `"ES"`, `"NL"`, ...)
- `inLanguage`: `"de-DE"`, `"fr-FR"`, `"it-IT"`, `"es-ES"`, ... per sub-market
- Dates: ISO 8601 only

### AIO coverage for EU languages
- Google AI Mode 36-language rollout covers the major EU languages.
- Hebrew-style AIO coverage gap (see `israel.md`) is IL-specific and does NOT apply to major EU languages.

### EU directories as AI citation surfaces (not just SEO)

#### Germany (DE)
- **Trusted Shops**
- **Gelbe Seiten**
- **Handelsregister**
- **Kununu**

#### France (FR)
- **Pages Jaunes**
- **Société.com**
- **Trustpilot FR**

#### Other EU sub-markets (IT, ES, NL, ...)
- _To be researched per engagement._

### Local review platforms with AI citation weight
- _To be researched per engagement (per sub-market)._

### Local SEO caveats (EU-specific)
- _To be researched per engagement._

### Accessibility / data-protection regulation
- **WCAG 2.1 AA**
- **EAA** (European Accessibility Act)
- **GDPR** (General Data Protection Regulation)

### EU AI Act crawler signals
- **ai.txt** and **TDMRep HTTP headers** are legally binding under the EU AI Act.
- For EU-based sites: implement both. Combined, this is the "no training, yes retrieval" pattern publishers want.
- Business-model routing:
  - News publishers: block training + restrict retrieval
  - B2B SaaS: allow RAG, block API doc training
  - Local services: allow everything (visibility > IP protection)

### Local PR outlets + journalist platforms
- _To be researched per engagement (per sub-market)._

### Local agentic commerce protocols
- _To be researched per engagement._

### EU AEO pricing benchmarks
- _To be researched per engagement._

### Notable AI engines / models worth knowing
- _To be researched per engagement (per sub-market)._
