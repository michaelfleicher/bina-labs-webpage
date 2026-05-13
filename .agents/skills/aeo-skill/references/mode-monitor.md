# AEO Skill - Mode: Monitor

> Loaded on-demand by the AEO skill router when monitor mode is detected.
> Read alongside: `references/knowledge-base.md`, `references/tools.md`, and the relevant `references/markets/<country>.md` for the target market.

## MODE 4: MONITOR (מעקב חודשי)

### Step 1: Confirm site + market + tracking baseline

```
- אתר?
- שוק/מדינה?
- האם הוגדר Channel Group "AI Traffic" ב-GA4?
- האם יש כלי AI-visibility מותקן? (Profound/Peec/Otterly/Ahrefs Brand Radar/HubSpot AEO Grader)
- כמה פרומפטים יש במאגר המעקב? (יעד: 60-100 לפלטפורמה)
```

### Step 2: Run the monthly checks

**A. AI Traffic in GA4**
- Channel Group "AI Traffic" with regex (paste exactly):
  ```
  chatgpt\.com|chat\.openai\.com|openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|bard\.google\.com|copilot\.microsoft\.com|you\.com|search\.brave\.com|meta\.ai|grok\.com|x\.ai|deepseek\.com|(?:\w+\.)?mistral\.ai
  ```
- Drag above "Referral" in priority
- **Gotchas:** Free ChatGPT does not send referrer (40-60% misclassified as Direct); ChatGPT Atlas browser masks origin; GA4 filter limit 250 chars

**B. Server logs / bot visits** (the ground truth)
- Pull last 30 days from Cloudflare Radar AI bot dashboard or Screaming Frog Log File Analyser
- Track: GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Claude-SearchBot, Google-Extended, bingbot, ChatGPT-User, Claude-User, Perplexity-User
- Watch for drops (bot was blocked) or spikes (often pre-citation)

**C. Share of Model Voice (SOMV)**
- 40% branded prompts ("what is [brand]?", "is [brand] good for X?")
- 40% category prompts ("best X for Y", "X alternatives")
- 20% executive prompts (founder name, expert name)
- Run each prompt **5-10x** for stability (HubSpot baseline: 60-100/platform)
- Calculate per engine: `(your mentions / total prompts) x 100`
- **Do NOT weight by citation position** (Fishkin/O'Donnell 2026)
- Track engines separately - only 11% of cited domains overlap across engines

**D. Brand mentions drift**
- Ahrefs Brand Radar / Google Alerts / Mention.com
- Track unlinked brand mentions month-over-month (these drive AIO more than backlinks)
- BLR = brand mentions / backlinks; target >1.0

**E. Content refresh queue**
- List pages with `dateModified` > 13 weeks
- For top-traffic / top-cited: schedule substantive 20%+ refresh + 500+ words
- **Date-only edits = spam signal** (Google HCU Dec 2025)

**F. Country-specific surfaces**
- IL: Yad2, Zap, Bizportal presence + freshness
- Other: country-specific directory recheck

**G. Negative-citation incidents**
- Wrong info about brand in any engine -> document, take screenshot
- File feedback: Google "AI Overview feedback", Bing Webmaster recrawl, publish public correction page
- Track time-to-correction

### Step 3: Generate Monitor Report

```markdown
# מעקב AEO חודשי: [site]
## חודש: [YYYY-MM] | שוק: [country]

### SOMV per engine
| Engine | This month | Last month | Trend | Notes |
|---|---|---|---|---|

### AI Traffic (GA4)
| Source | Sessions | Conversions | Conv rate |
|---|---|---|---|

### Bot visits (server logs)
| Bot | Hits/day median | vs baseline | Anomalies |
|---|---|---|---|

### Brand mentions
| Source | Count | Sentiment | BLR |
|---|---|---|---|

### Refresh queue (>13 weeks)
[list]

### Incidents
[any negative citations + correction status]

### Action items for next 30 days
1. ...
```

### Step 4: Save

Save to: `outputs/aeo/[site-slug]_monitor_[YYYY-MM].md`
