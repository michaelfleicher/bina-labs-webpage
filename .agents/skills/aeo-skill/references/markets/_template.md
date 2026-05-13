# AEO Skill - Market Template (for new countries)

> Copy this file to `references/markets/<country>.md` and fill in country-specific data when the advisor encounters a market not yet covered. Pattern follows `markets/israel.md`.

## Source SKILL.md mentions to expand directly

The base SKILL.md "Pattern for Other Countries" section already names a few directories + regulations for the following markets. When creating one of these market files, you can start by transcribing these facts before researching further:

- **Australia (AU)**
  - Directories: True Local, Yellow Pages AU
  - Accessibility regulation: DDA (Disability Discrimination Act)
- **Japan (JP)**
  - Directories: Tabelog, Hot Pepper, EkiTen
  - Accessibility regulation: _To be researched per engagement._
- **Canada (CA)**
  - Directories: _To be researched per engagement._
  - Accessibility regulation: AODA (Accessibility for Ontarians with Disabilities Act; province-specific)

For any other country (Brazil, Mexico, India, Singapore, UAE, ...) start with the skeleton below and research each section.

---

## Skeleton (copy below this line into `<country>.md` and fill in)

```markdown
# AEO Skill - Market: <Country>

> Loaded on-demand by the AEO skill router when the target market is <Country>. Apply these overrides to all general AEO advice from `references/knowledge-base.md`.

If `market = <CC>` or <language>/<TLD> detected, apply all of these as overrides to general advice.

### Market context
<!-- e.g. AI usage index ranking, ChatGPT per-capita usage, share of population using AI engines daily, any country-level AI adoption stats. Cite primary sources (Anthropic AI Usage Index, OpenAI country breakdowns, local research). -->
- _To be researched per engagement._

### Language + tokenization
<!-- e.g. Tokenizer efficiency vs English for the local language (German compound words; CJK scripts; right-to-left languages; agglutinative languages like Finnish/Turkish). Include script + niqqud/diacritics guidance. Reference DictaLM-style studies if available. -->
- _To be researched per engagement._

### Schema currency + locale
<!-- e.g. inLanguage (BCP-47 like "ja-JP", "pt-BR"), Currency ISO 4217 code, addressCountry ISO 3166-1 alpha-2, date conventions, html lang + dir for RTL languages. -->
- `inLanguage`: `"<bcp-47>"`
- Currency: `"<ISO 4217>"`
- Address: `addressCountry: "<ISO 3166-1 alpha-2>"`
- Dates: ISO 8601 only
- `<html lang="<lang>" dir="<ltr|rtl>">`

### AIO coverage for the language
<!-- e.g. Is the language in Google AI Mode 36-language rollout? Coverage % vs English baseline. Bilingual strategy recommendations if coverage is low. -->
- _To be researched per engagement._

### Local directories as AI citation surfaces (not just SEO)
<!-- e.g. List directories that are actively cited by ChatGPT/Perplexity/Claude in this market - not just SEO-relevant directories. Verify with sample prompts. Examples from source: AU - True Local, Yellow Pages AU; JP - Tabelog, Hot Pepper, EkiTen. -->
- _To be researched per engagement._

### Local review platforms with AI citation weight
<!-- e.g. Country-specific review platforms beyond global ones (Trustpilot, Google). Verify which appear in AI engine citations. -->
- _To be researched per engagement._

### Local SEO caveats (<Country>-specific)
<!-- e.g. GBP review velocity issues, defamation law constraints on review handling, regional Google index quirks, dominant messaging app integration (WhatsApp / LINE / WeChat / KakaoTalk). -->
- _To be researched per engagement._

### Accessibility / data-protection regulation
<!-- e.g. National accessibility law (ADA/EAA/DDA/AODA/local equivalent), data-protection regime (GDPR/CCPA/LGPD/PIPEDA/APPI/PDPA/local), and how they overlap with AI crawlability. -->
- _To be researched per engagement._

### Local PR outlets + journalist platforms
<!-- e.g. National HARO equivalents, journalist request platforms, top earned-media outlets that AI engines cite. -->
- _To be researched per engagement._

### Local agentic commerce protocols
<!-- e.g. Country-specific marketplace integrations with OpenAI ACP / Shopify UCP, local payment rails, dominant marketplaces (Rakuten/Mercado Libre/Flipkart/JD.com). -->
- _To be researched per engagement._

### <Country> AEO pricing benchmarks
<!-- e.g. SMB / mid-market / AEO-specific retainer ranges in local currency, AEO premium vs classic SEO. Cite local market reports. -->
- _To be researched per engagement._

### Notable AI engines / models worth knowing
<!-- e.g. Locally-built or locally-tuned LLMs (DictaLM/Jamba for IL; ERNIE for CN; Naver HyperCLOVA X for KR; Sarvam/Krutrim for IN; ELYZA/Rakuten AI for JP). Mentioning them in tech B2B content earns entity-graph credibility. -->
- _To be researched per engagement._
```

---

## How to use this template (3 steps for the advisor)

1. **Detect the market** from user input (language, TLD, explicit statement, currency mentions). If unclear, ask in Round 1 of the active mode (audit / plan / content / monitor).
2. **Create the file** at `references/markets/<country>.md` by copying the skeleton above. Pre-fill any facts already named in SKILL.md (see "Source SKILL.md mentions to expand directly" above for AU / JP / CA). For unknown sections write `_To be researched per engagement._` rather than inventing data.
3. **Research + fill in** the remaining sections using primary sources (vendor docs, government accessibility regulations, local market studies). Cite sources inline. Once the file is complete, reference it from the router and apply its overrides to all four modes (audit, plan, content, monitor) for that engagement.
