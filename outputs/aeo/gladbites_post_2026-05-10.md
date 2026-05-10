---
title: "GladBites made $1.6M in 90 days with no kitchen. The B2B version is already in your inbox."
slug: gladbites-ai-content-machine-and-the-b2b-mirror
canonical: /writing/gladbites-ai-content-machine-and-the-b2b-mirror
date: 2026-05-10
author: Michael Fleicher
ogImage: /writing/gladbites-og.png
description: A TikTok page selling AI-generated cookbooks pulled $1.6M in three months. The interesting question is not whether the cookbooks are real. It is whether your AI vendor is running the same playbook on you.
tags: ["AI content", "B2B AI", "evals", "honest deprecation", "founder ops"]
---

# GladBites made $1.6M in 90 days with no kitchen. The B2B version is already in your inbox.

**A short answer first.** GladBites is a TikTok-native cookbook funnel. Fifteen anonymous pages, 200+ AI-generated recipe videos a month, AI voice, AI captions, an automated checkout that drops a digital book between $10 and $25. Three months in, $1.6M in revenue, 55M organic views, and no human ever turned on a stove. It works because the format mimics a creator who actually cooks, the hook lands in the first 1.2 seconds, and TikTok has not yet built a "this food was never real" detector. That arbitrage window is the entire business.

The interesting question is not "is this marketing genius or fake slop." Both, obviously. The interesting question is: **what is the B2B equivalent of GladBites, and is your AI vendor already running it on you?**

Spoiler: yes.

---

## What GladBites actually built

Strip the food and the funnel runs like this:

1. **Generative supply.** A pipeline that produces 5–10 short videos per page per day. AI image gen for plates, AI voice for narration, templated captions ("76g Protein", "Athlete's Meal", "Lunch for $2.50 with 58g of protein"). Cost per video, rounding generously: under a dollar.
2. **Distribution at zero marginal cost.** 15 anonymous accounts, no creator face, no creator fee, no contract to renegotiate when one account gets banned. If TikTok kills three pages tomorrow, twelve are still printing.
3. **Format mimicry.** The videos copy the *visual cadence* of real food TikTokers down to the plate angle, the cut on the chew, the macro overlay. They are not better. They are *indistinguishable on a 1.2-second hook*.
4. **A funnel that closes itself.** Bio link → landing page → $10 or $25 cookbook → Stripe → email autoresponder. Zero human in the loop after the model presses publish.

The clever part is not the AI. The clever part is the **format mimicry**. The videos look enough like the real thing that the platform's recommender treats them as the real thing, and so does the viewer for the four seconds it takes to tap "Buy."

That's the whole trick. That is what is worth $1.6M for ninety days.

---

## The B2B mirror

Now do the substitution:

| GladBites | Your AI vendor |
|---|---|
| AI-generated recipe videos | AI-generated "strategy decks" and "discovery findings" |
| Indistinguishable on a 1.2-second hook | Indistinguishable in a 30-minute exec readout |
| 15 anonymous TikTok pages | 15 named "senior consultants" who are one shared GPT prompt |
| $10 cookbook, no kitchen | $80K SOW, no engineer who has ever shipped this kind of system |
| TikTok recommender can't yet detect | Your procurement process can't yet detect |
| 90-day arbitrage window | 12-month arbitrage window, and closing |

The B2B version is more profitable per unit and the buyer takes longer to notice. That is the only difference.

We see it every week:
- A 60-page "AI readiness assessment" produced in two days by Claude with the client logo dropped in. Billed at $40K.
- A "custom RAG architecture" that is the LangChain quickstart with the variable names changed.
- A "proprietary eval framework" that is `for prompt in prompts: ask_gpt(prompt); print(score)`, no rubric, no inter-rater reliability, no held-out set.

Each one passes the 30-minute exec readout. Each one fails on the day a real user types a real query.

---

## Why GladBites is honest and the B2B version is not

Here is the part nobody on LinkedIn wants to say.

**GladBites is honest.** A $10 digital cookbook with AI-generated recipes is exactly what it says it is. The buyer wanted "100 recipes for $10," they got "100 recipes for $10," and most of them will probably work because chicken-rice-broccoli is not a hard generation problem. The macro counts are made up, but if you eat the food, you eat the food. The customer churns out, the next one taps in, the funnel keeps spinning. The marginal cost of one disappointed customer is zero.

**The B2B version is not honest.** When a vendor sells your CFO a "transformation roadmap" that is a hallucinated outline of someone else's case studies, the failure mode is not "this person didn't enjoy dinner." It is "you spent $400K on a six-month deck-driven engagement that never produced running code, and your competitor shipped." The marginal cost of one disappointed B2B customer is your reputation, your next renewal, and the engineer you hired to maintain the thing.

Same generative trick. Different blast radius.

---

## What this means if you are the buyer

Three filters that GladBites would not survive but that most "AI consultancies" currently do:

### 1. Demand the eval before the deck.

If a vendor cannot tell you, in week one, **how they will measure whether the system works**, with a rubric, a held-out set, and an honest disagreement number between human raters - they are selling you a cookbook with no kitchen. This is non-negotiable. Evals are 80% of the job. The deck is the wrapper.

### 2. Demand the prototype before the contract.

A 4-week paid pilot that produces working code in your environment costs less than the SOW you are about to sign. If the vendor cannot build something real in four weeks, they cannot build something real in forty. We have written about this in our [manifesto](/manifesto). It is the single best filter we know.

### 3. Demand a name on every line of code.

Not a logo. A name. A senior engineer who can be called at 11pm in week 14 and asked why the retrieval recall dropped. If the answer is "we'll have to check with the team," you bought a TikTok page.

---

## What this means if you are the builder

Three things GladBites got right that serious AI builders keep getting wrong:

1. **Ship at the speed of the platform, not the speed of the org.** GladBites publishes 5–10 times a day. Your team ships once a quarter. Both of you are using the same models. One of you is using them.
2. **Format mimicry is a feature, not a bug.** The reason GladBites works is that it looks like the thing the user already trusts. If your B2B AI product looks like an "AI dashboard" and feels like an "AI dashboard," you are competing with everyone. If it looks like the spreadsheet your buyer already uses, with one quiet upgrade, you are not.
3. **The arbitrage window always closes.** TikTok will eventually flag synthetic food. Procurement will eventually demand a real engineer on the call. Build the business that survives the day after the window closes, not the one that maximizes revenue inside it.

---

## The honest take

GladBites is not a marketing genius and it is not a fraud. It is an arbitrage. Someone noticed that TikTok's recommender is currently blind to a specific kind of synthetic content and they industrialized the gap. They will print money until the gap closes, and then they will move to the next gap. That is fine. That is content marketing in 2026.

The reason it matters to anyone reading this is that **the same arbitrage is being run, right now, on enterprise AI buyers, by people who are wearing nicer shirts**. The buyer is slower, the contracts are bigger, and the customer doesn't get to swipe past.

If you are buying AI: get the eval before the deck, the prototype before the contract, and the name on every line of code.

If you are building AI: ship at platform speed, mimic the format your user already trusts, and build for the day after the arbitrage closes.

If you are GladBites: nice run. We hope you saved.

---

## FAQ

**Q: Is GladBites' $1.6M number real?**
A: The screenshots show a Stripe-style dashboard reading $1,613,17X.XX in net volume over the displayed window. The number is plausible for the format - 55M organic views into a $10–$25 cookbook funnel converts at low single-digit percent, and the math gets you there. We have not independently verified the dashboard. The point of the post does not depend on the exact number; it depends on the playbook.

**Q: Is making AI-generated cookbooks unethical?**
A: A $10 digital cookbook of AI-generated recipes is, in our view, fine. The recipes mostly work, the buyer knows what they bought, and nobody is harmed. The same playbook applied to medical advice, financial guidance, or enterprise AI strategy is not fine, because the failure modes are not "the chicken was dry."

**Q: Why is this a B2B AI story?**
A: Because the same generative tools that produce indistinguishable food videos in 60 seconds also produce indistinguishable strategy decks, eval frameworks, and "custom RAG architectures" in 60 seconds. The B2B buyer's detector is currently weaker than TikTok's recommender, and the contracts are 1000x larger.

**Q: What is the single best filter against this in B2B?**
A: Demand a working prototype, in your environment, in four weeks, before signing the main contract. If the vendor cannot or will not, walk. We have refunded four engagements ourselves under this rule. It is the best money any of those clients ever spent.

**Q: What is "format mimicry" in B2B AI products?**
A: The deliberate choice to make the AI feature look and feel like the existing tool the user already trusts - the same spreadsheet, the same ticket queue, the same email thread - with one quiet capability upgrade, instead of dropping a new "AI dashboard" the user has to learn. Adoption follows the format the user already uses.

**Q: How long is the B2B AI arbitrage window?**
A: Our estimate, with low confidence: 12–18 months from now. After that, procurement will get better at smelling generated work, junior staff will get better at producing real work with AI, and the gap will collapse. Build accordingly.

---

*Written by Michael Fleicher, Principal at [Bina Labs](/about). Two-time CTO. We embed senior AI engineers into B2B teams that are tired of decks that don't run in production. If you want to talk about an actual build - not a roadmap - [start here](/contact).*
