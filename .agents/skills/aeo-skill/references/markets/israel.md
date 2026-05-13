# AEO Skill - Market: Israel

> Loaded on-demand by the AEO skill router when the target market is Israel. Apply these overrides to all general AEO advice from `references/knowledge-base.md`.

If `market = IL` or Hebrew language detected, apply all of these as overrides to general advice.

### Market context
- Israel **#1 globally** on Anthropic AI Usage Index at 4.9x expected
- Per-capita ChatGPT usage 7x higher than expected by population
- 95% of Israeli tech workers use AI regularly, 78% daily
- Translation: AI visibility is disproportionately valuable in IL

### Hebrew tokenization gotcha
- GPT-4 tokenizer is ~3x less efficient on Hebrew than English (DictaLM 2.0, arXiv 2407.07080)
- **Keep Hebrew content concise** - same answer in fewer words
- **Do NOT add niqqud** (LLMs trained on ktiv male - unpointed)
- **Do NOT use transliteration** ("kidum atarim" -> instead "קידום אתרים")

### Schema currency + locale
- Use `inLanguage: "he-IL"` on Person/Article/Organization
- Currency: `"ILS"` (not "NIS" or "₪")
- Address: `addressCountry: "IL"`
- Dates: ISO 8601 only
- `<html lang="he" dir="rtl">`

### Hebrew AIO coverage gap
- Google AI Mode 36-language rollout did **not** name Hebrew
- Hebrew AIO coverage <10% vs ~16-25% English
- **Bilingual strategy recommended for B2B/tech** - Hebrew + English content, hreflang correctly set

### Israeli directories as AI citation surfaces (not just SEO)
- **Yad2** - receives 10.55% inbound from ChatGPT (actively cited)
- **Zap** - product/service citations in ChatGPT/Perplexity
- **Rest.co.il** - restaurants, hospitality
- **Calcalist business directory** - business B2B
- **Bizportal** - business news + listings
- **B144** - business search
- **Dapei Zahav (d.co.il)** - generic listings

### Local SEO caveats (IL-specific)
- Google blocked new IL reviews ~8 months post-Oct 7 2023 (still affecting GBP review velocity)
- Israeli defamation law suppresses negative reviews - leverage carefully
- **WhatsApp Business integration with GBP** is essential (Hebrew users default to WhatsApp)

### Accessibility = AEO asset
- WCAG 2.1 AA = תקנות 2013 = ת"י 5568 חלק 1
- Semantic HTML overlaps with AI crawlability
- **Warn against UserWay / EqualWeb / Nagich overlays** - they inject JS-rendered DOM changes that LLM crawlers see as cloaking-like behavior. Use them only for true accessibility shimming; do NOT rely on overlays for primary semantic structure.

### Israeli AEO pricing (May 2026 benchmarks)
- SMB: ₪1,500-3,500/mo
- Mid-market: ₪2,500-5,500/mo
- AEO-specific retainer: ₪1,750-6,000/mo (Indexbusiness.co.il)
- AEO vs classic SEO: +20-40% premium

### Hebrew AI engines / models worth knowing
- **DictaLM 2.0 / 3.0** - Hebrew-native LLM
- **AI21 Jamba** - Israeli-built, strong on Hebrew
- Mention in tech B2B content for entity-graph credibility
