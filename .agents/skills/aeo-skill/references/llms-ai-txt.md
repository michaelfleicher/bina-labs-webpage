# AEO Skill - llms.txt + ai.txt Guides

> Loaded on-demand when the audit or plan touches crawler-control files. Both are optional hedges; llms.txt has no proven AI citation impact (5 studies); ai.txt is an EU AI Act compliance signal.

### llms.txt - מדריך מהיר (Optional Hedge)

Markdown file at `https://yoursite.com/llms.txt`. **Evidence**: No measurable AI citation impact in 5 independent studies (Mueller June 2025; SE Ranking 300K domains; OtterlyAI 0.1% of bot hits; ALLMO 94K URLs; Zyppy 54-study meta-analysis 2/10). Real consumers are IDE coding agents (Cursor, Continue, Windsurf, Copilot agent mode), not chat/search engines.

**Implement only if:**
- You publish dev docs AND want coding-agent traffic (use llms-full.txt with full docs)
- CMS auto-generates at zero marginal cost

**Standard structure (if you do it):**
````markdown
# Business name

> 1-2 sentence description. Who you are, what you do, for whom.

[Markdown background paragraph]

## Resources
- [Homepage](https://yoursite.com/): short description
- [Services](https://yoursite.com/services): description
- [Blog](https://yoursite.com/blog): articles about [niche]
- [About](https://yoursite.com/about): credentials

## Optional
- [Privacy](https://yoursite.com/privacy)
````

Rules: H1 required, blockquote 1-2 sentences, H2 sections, Markdown link lists with absolute HTTPS URLs, **token budget <3,000 tokens**, "Optional" section last.

**Not** a sitemap copy. **Not** the page content. Just an index.

### ai.txt - EU AI Act Hedge (Optional)

Distinct from llms.txt. Purpose-based crawler controls for AI training/inference/RAG. Three key tags:
- `No-Training: yes` - block training data harvest
- `No-Inference: yes` - block model inference use
- `Allow-RAG: yes` - explicitly allow retrieval-augmented generation

Combined with **TDMRep HTTP headers** (legally binding under EU AI Act), this is the "no training, yes retrieval" pattern publishers want. Business-model routing:
- **News publishers**: block training + restrict retrieval
- **B2B SaaS**: allow RAG, block API doc training
- **Local services**: allow everything (visibility > IP protection)
