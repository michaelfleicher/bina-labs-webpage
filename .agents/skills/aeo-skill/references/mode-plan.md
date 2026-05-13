# AEO Skill - Mode: Plan

> Loaded on-demand by the AEO skill router when plan mode is detected.
> Read alongside: `references/knowledge-base.md`, `references/tools.md`, and the relevant `references/markets/<country>.md` for the target market.

## MODE 2: PLAN (תוכנית אופטימיזציה)

### Step 1: Gather Context

Ask ONE AT A TIME.

**Round 0 - Market + Operator Type:**
```
- באיזה שוק/מדינה העסק פועל? (ישראל/ארה"ב/אירופה/גלובלי)
- מהו סוג העסק? (שירות מקומי / מסחר / SaaS / שירותים מקצועיים / מדיה/בלוג)
```

**Round 1 - Business:**
```
ספר לי על העסק:
- שם העסק ואתר
- מה התחום/נישה?
- מי קהל היעד?
- מה השירותים/מוצרים העיקריים?
```

**Round 2 - Current state:**
```
מה המצב הנוכחי?
- יש אתר? מבוסס על מה? (וורדפרס, ויקס, קוד, Webflow, Shopify...)
- SSR או SPA? (קריטי - SPA = בלתי נראה ל-ChatGPT/Claude/Perplexity)
- עושים SEO כרגע? איזה כלי? (Ahrefs/Semrush/RankMath/Yoast)
- יש Google Business Profile?
- יש בלוג/מאמרים? כמה לחודש?
- יש Wikidata Q-item? Wikipedia?
- מי הסופרים/המומחים שמייצגים את העסק?
```

### Step 2: Generate AEO Roadmap

```markdown
# תוכנית AEO: [business name]
## שוק: [country] | תחום: [niche] | קהל: [audience] | סוג מפעיל: [type]
## תאריך: [YYYY-MM-DD]

---

### שלב 1: תשתיות סריקה ורינדור (שבוע 1-2)
**מטרה:** לוודא שהאתר נקרא ע"י כל מנועי ה-AI

- [ ] אבטחת SSL (HTTPS)
- [ ] אופטימיזציית מובייל ו-Core Web Vitals
- [ ] **רינדור צד שרת (SSR/SSG/pre-render)** - אם האתר SPA, ChatGPT/Claude/Perplexity לא רואים תוכן
- [ ] H1 בדף הבית: "[שם העסק] - [שירות מרכזי]"
- [ ] ניווט ברור: שירותים נגישים מ-Header, Footer ודף הבית
- [ ] Alt text מדויק על כל התמונות (מאומת מול תוכן התמונה)
- [ ] Sitemap.xml + robots.txt
- [ ] **אימות גישת בוטים** - GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Claude-SearchBot, bingbot, Google-Extended, ChatGPT-User, Claude-User, Perplexity-User. בדוק שאין חסימה שגויה ע"י תוסף SEO
- [ ] **Cloudflare AI Crawl Control** - לוודא שלא חוסם בטעות (default מאז 1 ביולי 2025 לאתרים חדשים)
- [ ] **ניתוח לוגים** - חיבור Screaming Frog Log Analyser או Cloudflare Radar לזיהוי תנועת בוטים
- [ ] **(אופציונלי, אזור EU)** ai.txt + TDMRep headers
- [ ] **(אופציונלי)** llms.txt - רק אם יש docs לפיתוח או CMS שיוצר אוטומטית. אין ראיות לעליית ציטוטים.

### שלב 2: תוכן וסכמות (שבוע 2-4)
**מטרה:** להפוך את האתר ל"מקור תשובות" למנועי AI

- [ ] **שדרוג עמוד אודות** - ארוך, מפורט, עם credentials, byline, תמונה
- [ ] **Author Profile + Person schema** בכל עמוד תוכן עם sameAs ל-LinkedIn, Wikidata, Crunchbase, ORCID
- [ ] **Organization schema** בדף הבית עם sameAs, contactPoint, areaServed
- [ ] **Article/NewsArticle schema** עם author->Person @id (closed-loop entity reference) + dateModified
- [ ] **Q&A Schema (FAQPage)** - 9 שאלות בדף הבית, 5-7 בכל עמוד שירות; תשובות 40-60 מילה (לא Quick Win יותר, אבל איתות חילוץ ל-AI)
- [ ] **כותרות H2/H3 בצורת שאלות** - מיפוי סמנטי ישיר לפרומפטים
- [ ] **Answer Capsule** - כל H2 נפתח ב-40-60 מילה תשובה עצמאית
- [ ] **שפה החלטית** - drop "אולי", "ייתכן", "תלוי"; SVO outperforms hedging by 14%
- [ ] **צפיפות סטטיסטיקות + ציטוטים מומחים + קישורים סמכותיים** (Princeton: +28-41% נראות)
- [ ] **13+ רשימות/טבלאות** במאמרי קורנרסטון
- [ ] **רידינג רמה Flesch-Kincaid 6-8**

### שלב 3: סמכותיות ומותג (שבוע 4-12)
**מטרה:** לבסס את העסק כמקור אמין ביותר בתחום (לזכור: brand mentions r=0.664 vs backlinks r=0.218)

- [ ] **Google Business Profile** - פרופיל מלא + הזרמת ביקורות (לישראל: שילוב WhatsApp Business)
- [ ] **הצגת ביקורות באתר** עם Review/AggregateRating schema
- [ ] **Wikidata Q-item** - שלב 1, נמוך-סף, מזהה מכונה
- [ ] **תכנון Wikipedia** - אחרי 2-3 כתבות עריכתיות עצמאיות
- [ ] **(SaaS/B2B)** G2 / Capterra / Trustpilot - פרופיל מלא + airflow של ביקורות
- [ ] **(SaaS/B2B/IL tech)** LinkedIn - דף החברה + פרופילי מנהלים פעילים
- [ ] **Reddit / קהילות נישה** - בניית נוכחות אורגנית 6+ חודשים, בלי אסטרוטרפינג
- [ ] **PR דיגיטלי / earned mentions** - Qwoted, Featured.com, Help a B2B Writer, Source of Sources, #JournoRequest. **המטרה: brand mentions, לא בהכרח קישורים.** יחס BLR>1.0.
- [ ] **רישום לאינדקסים מקומיים** - [country-specific list - for IL: Yad2, Zap, Rest.co.il, Calcalist, B144, Dapei Zahav, Bizportal]
- [ ] **YouTube** - ערוץ + סרטון לכל עמוד קורנרסטון (YouTube = #1 מצוטט ב-AIO 18.2%). פרק מרקרים, transcript ידני, 10-20 דק.

### שלב 4: תוכן שוטף ורענון (חודשי)
**מטרה:** לשמור על נראות AI לאורך זמן

- [ ] **1-2 מאמרי קורנרסטון בחודש** - מבוססי שאלות, עם Answer Capsule + stats + quotes + 13+ lists
- [ ] **רענון 13-שבועי** - 50% מציטוטי AI מתוכן <=13 שבועות. **לא רק לחיצה על "פרסם" - חידוש 20%+ תוכן או 500+ מילים + עדכון dateModified + תווית "Updated: [Month Year]" גלויה**. עדכון תאריך בלבד = איתות ספאם (Google HCU דצמבר 2025).
- [ ] **סרטון YouTube חודשי** עם transcript באתר
- [ ] **מעקב שוטף** - ראה MODE 4 monitor
- [ ] **תיעוד ראיות (evidence log)** - לכל אזכור מותג ב-AI, צילום מסך + תאריך + פרומפט

---

### לוח זמנים מומלץ
| שבוע | פעולה | אבן דרך |
|------|--------|---------|
| 1-2 | תשתיות + רינדור + גישת בוטים | בוטים מאומתים, SSR פעיל |
| 2-4 | תוכן + Schema + Author entity | Person/Org/Article schema פעיל + Wikidata Q-item הוגש |
| 4-8 | סמכותיות שלב א' - GBP, G2, Reddit base | GBP מלא + 10+ ביקורות + פרופיל G2 |
| 8-12 | סמכותיות שלב ב' - PR, YouTube, Wikidata אישור | 2-3 earned mentions + 4 סרטונים + Q-item פעיל |
| 12+ | תחזוקה חודשית | רענון 13-שבועי + מעקב SOMV |

### תקציב מוערך
| פריט | עלות |
|------|------|
| תשתיות טכניות + SSR | [estimate] |
| Schema + Author entity | [estimate] |
| מאמרי קורנרסטון | [estimate per article] |
| YouTube הפקה | [estimate per video] |
| PR / earned mentions | [estimate per mention] |
| כלי מעקב AI (Profound/Peec/Otterly/Ahrefs Brand Radar) | [estimate monthly] |
| **סה"כ חד-פעמי** | [total] |
| **חודשי** | [monthly] |

[For IL benchmarks: SMB ₪1,500-3,500/mo; mid-market ₪2,500-5,500; AEO-specific retainer ₪1,750-6,000/mo (Indexbusiness.co.il May 2026); +20-40% premium over classic SEO]
```

### Step 3: Save

Save to: `outputs/aeo/[business-slug]_plan_[YYYY-MM-DD].md`
