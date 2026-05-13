// Bina Labs - Writing / blog posts, keyed by slug
//
// Block schema (used by BlogPostBody.jsx):
//   { type: 'p',  text | parts }       paragraph
//   { type: 'h2', text }                section heading
//   { type: 'h3', text }                sub-heading
//   { type: 'ol', items: [{ lead?, text|parts }] }
//   { type: 'ul', items: [string | { lead?, text|parts }] }
//   { type: 'table', headers: [str, ...], rows: [[str, ...], ...] }
//   { type: 'hr' }
//   { type: 'faq', q: 'Question?', a: 'Answer' | parts }
//   { type: 'callout', text|parts }     italic byline / pull quote
//
// "parts" is an array of either plain strings or marker objects:
//   { b: 'bold' } | { i: 'italic' } | { c: 'code' } | { a: 'label', href: '/path' }

export const WRITINGS = {
  'salesforce-ai-agents-99-percent-gap-organizational-readiness': {
    slug: 'salesforce-ai-agents-99-percent-gap-organizational-readiness',
    title: 'Salesforce promised 1 billion AI agents. They sold 3,000. The 99.9% gap is not a tech problem.',
    headline: 'Salesforce promised 1 billion AI agents. They sold 3,000.',
    headlineAccent: 'The 99.9% gap is not a tech problem.',
    eyebrow: '// writing /02 · agentforce · enterprise ai · org readiness',
    tagline:
      'Marc Benioff promised one billion AI agents by 2025. Salesforce shipped roughly 3,000. The technology works. What failed is the assumption that you can install a digital coworker the way you install a printer.',
    description:
      'Marc Benioff promised one billion AI agents by 2025. Salesforce shipped roughly 3,000. The technology works. What failed is the assumption that you can install a digital coworker the way you install a printer. Here is what we see on the ground, across high-tech, finance, real estate, law, retail, and defense.',
    datePublished: '2026-02-10',
    // dateModified: update when post is substantively refreshed (20%+ new content)
    dateModified: '2026-02-10',
    readTime: '8 min read',
    tags: ['AI agents', 'Agentforce', 'enterprise AI', 'organizational change', 'B2B AI', 'deployment'],
    author: {
      name: 'Michael Fleicher',
      role: 'Principal',
    },
    cover: {
      src: '/writing/salesforce-agents-cover.jpeg',
      alt: 'Salesforce Agentforce - the gap between a billion-agent promise and a few thousand production deployments.',
      caption:
        'Salesforce promised a billion AI agents in production by the end of 2025. Real production deployments are on the order of three thousand. The gap is not a tech gap.',
    },
    ogImage: '/writing/salesforce-agents-cover.jpeg',
    body: [
      {
        type: 'p',
        parts: [
          { b: 'A short answer first.' },
          ' Marc Benioff publicly committed Salesforce to "one billion AI agents in production by the end of 2025." The actual number is on the order of three thousand. That is a 99.9% gap between the promise and the delivery, and the temptation is to blame the model. Don\'t. We deploy these agents every week across high-tech, finance, real estate, law, retail, and the defense industry. The model is fine. What breaks, every single time, is the organization. AI agents are not software you install. They are digital coworkers you have to onboard, and most companies have no idea how to onboard a coworker who is right 90% of the time, never sleeps, and has never been to HR.',
        ],
      },
      {
        type: 'p',
        text: 'The gap is not a Salesforce gap. It is an industry gap. Benioff is just the loudest CEO who set the goalposts in public.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'What actually happened' },
      {
        type: 'p',
        text: 'The Agentforce launch was supposed to be the moment "agentic AI" crossed from demo to revenue. Salesforce poured product, marketing, and a Dreamforce keynote into the number. The number did not happen. Internal teams rotated, the language softened from "billion" to "millions of agentic interactions," and the field reps started selling Data Cloud seats again because at least those close.',
      },
      { type: 'p', text: 'Two things are true at the same time:' },
      {
        type: 'ol',
        items: [
          {
            lead: 'The capability shipped.',
            text: 'Agentforce 2.0 can call tools, route conversations, escalate, and write back to the CRM. It is not a toy. A version of it works in production, today, for customers who put in the work.',
          },
          {
            lead: 'The deployments did not.',
            text: 'Most pilots stalled at the boundary between "the demo runs" and "the agent is allowed to actually do anything in our system without a human re-typing it."',
          },
        ],
      },
      { type: 'p', text: 'That second sentence is the entire 99.9%.' },
      { type: 'hr' },
      { type: 'h2', text: 'What an AI agent actually is' },
      {
        type: 'p',
        text: 'Most managers are still thinking about agents in last-decade categories. They think an AI agent is a smarter chatbot, or a macro, or a particularly clever Zapier flow. They click "Install," they assign it to a queue, they expect magic.',
      },
      {
        type: 'p',
        text: 'It is the most expensive misunderstanding in enterprise software right now.',
      },
      {
        type: 'p',
        parts: [
          'An AI agent is a ',
          { b: 'digital worker' },
          '. Not a metaphor. A literal coworker that:',
        ],
      },
      {
        type: 'ul',
        items: [
          'Has a job description (or doesn\'t, and then it does whatever the prompt felt like).',
          'Has permissions to systems (or doesn\'t, and then it can\'t do the job).',
          'Has a manager, an escalation path, and a definition of "done."',
          'Has working hours, an SLA, a quality bar, and an audit trail.',
          'Has peers, a handoff protocol, and a story for when it gets it wrong.',
        ],
      },
      {
        type: 'p',
        text: 'If you would not hire a human into a role without those seven things, you cannot deploy an agent into that role either. Companies that figure this out get production agents. Companies that don\'t get a Slack channel full of "the AI keeps doing weird things."',
      },
      { type: 'hr' },
      { type: 'h2', text: 'What we see on the ground' },
      {
        type: 'p',
        text: 'We have shipped agents into companies across the spectrum. The technical work is the easy part now. The organizational work is the entire job. A pattern repeats:',
      },
      {
        type: 'table',
        headers: ['Layer', 'What companies expect', 'What actually breaks'],
        rows: [
          [
            'Model',
            '"Will GPT/Claude/Gemini be good enough?"',
            'Almost never the bottleneck. The frontier models are over-qualified for 80% of agent jobs.',
          ],
          [
            'Tools',
            '"Can the agent call our APIs?"',
            'Yes. The agent can call your APIs. Your APIs were not designed for someone who reads docs perfectly and tries everything.',
          ],
          [
            'Data',
            '"Is our data clean enough?"',
            'No, and you knew that before AI. The agent just makes the existing data debt loud.',
          ],
          [
            'People',
            '"We\'ll roll it out next quarter."',
            'This is where 99.9% of pilots die. Nobody owns the agent. Nobody is accountable for its work. Nobody updates its prompt when policy changes. Nobody knows whose KPI moves when it succeeds.',
          ],
          [
            'Process',
            '"It will fit our existing workflow."',
            'Your existing workflow has 14 implicit handoffs that live in three peoples\' heads. The agent does not have access to those heads.',
          ],
          [
            'Governance',
            '"We\'ll figure out compliance later."',
            'Legal finds out in week six. The pilot freezes.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'The cracks are not in the code. They are in the seam between the agent and the organization.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'The winning formula' },
      {
        type: 'p',
        text: 'The deployments that work, in our experience, combine two things that almost never live in the same room:',
      },
      { type: 'h3', text: '1. Advanced technical capability - the agent\'s brain.' },
      {
        type: 'p',
        text: 'Tool use that actually works. Retrieval that returns the right document, not a vector-similar one. Evals with a held-out set, a rubric, and an honest disagreement number between human raters. Guardrails that fail closed, not open. Observability so you can see what the agent did and why. This is the part everyone thinks they are buying.',
      },
      { type: 'h3', text: '2. Cultural preparation of the organization - the muscle that activates the brain.' },
      {
        type: 'p',
        text: 'A named human owner for the agent. A role description. A permission scope. A 30/60/90 review cadence. A re-training loop when policy changes. A defined "the agent should escalate to a human when..." rule, written down. A KPI the agent moves, with a baseline measured before launch. A communication plan for the team whose work changes. This is the part nobody thinks they need to buy, and it is the part the deployment actually fails on.',
      },
      {
        type: 'p',
        text: 'If the organization is not willing to change the way it works, no smart agent will save it. We have refunded engagements that crossed this line. It is cheaper for everyone.',
      },
      {
        type: 'p',
        text: 'When the organization mobilizes, the same agent - same model, same prompt, same tools - goes from "weird Slack channel" to "this team\'s senior member" in about eight weeks. The results look like magic. They are not magic. They are change management dressed in a model card.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'What this means if you are buying agents' },
      {
        type: 'p',
        text: 'Three filters Salesforce did not put on the front of the funnel, but you should:',
      },
      { type: 'h3', text: '1. Name the human owner before you sign.' },
      {
        type: 'p',
        text: 'Every agent in production needs one named human accountable for its work. Not a committee. Not "the AI CoE." A person whose KPI moves when the agent succeeds and whose calendar gets blocked when it fails. If you cannot name that person at signing, you are not ready to deploy. You are ready to do a slide.',
      },
      { type: 'h3', text: '2. Write the job description before you write the prompt.' },
      {
        type: 'p',
        parts: [
          'A one-page document, in your business\'s language, describing: what the agent is responsible for, what it is explicitly ',
          { b: 'not' },
          ' responsible for, what systems it can read, what systems it can write to, what triggers an escalation, and how its output is measured. If you cannot write this page, the prompt will not save you. The prompt is the implementation of this page.',
        ],
      },
      { type: 'h3', text: '3. Demand a four-week pilot with a real KPI, not a demo.' },
      {
        type: 'p',
        text: 'A working agent in your environment in four weeks, hitting one measurable business metric on a real workload, costs less than the multi-quarter rollout you are about to plan. If your vendor cannot or will not commit to that, they are selling Dreamforce, not Agentforce.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'What this means if you are building agents' },
      {
        type: 'p',
        text: 'Three things the industry got wrong in the "billion agents" era and will get wrong again:',
      },
      {
        type: 'ol',
        items: [
          {
            lead: 'Stop shipping agents. Start shipping roles.',
            text: 'An agent without a defined role is a chatbot with extra steps. A role without an agent is just a job. The product is the role plus the agent plus the org change. Sell the whole bundle or none of it.',
          },
          {
            lead: 'Evals are not optional and they are not the deck.',
            text: 'If you cannot tell a buyer, in week one, how you will measure the agent, with a rubric and a held-out set and a number for inter-rater disagreement, you are not building an agent. You are building a demo. The 99.9% gap lives in the difference.',
          },
          {
            lead: 'Org-readiness is a deliverable, not a prerequisite.',
            text: 'The "the customer wasn\'t ready" excuse is the consultant\'s version of "the dog ate my homework." If your engagement does not include the change management, the role design, the permission scoping, and the manager training, your agent will join the 999,997,000 that did not ship. Make readiness part of the contract, or pick easier customers.',
          },
        ],
      },
      { type: 'hr' },
      { type: 'h2', text: 'The honest take' },
      {
        type: 'p',
        text: 'Salesforce did not fail at AI agents because the AI agents do not work. Salesforce failed at AI agents the way every enterprise software company in the last forty years has failed at any tool that requires the buyer to actually change how their team operates: by selling the tool and assuming the change will happen on its own.',
      },
      {
        type: 'p',
        parts: [
          'The 99.9% gap is the gap between ',
          { b: 'a button that says "Deploy Agent"' },
          ' and ',
          { b: 'a Tuesday morning where Sharon from claims processing has to admit that part of her job is now being done by something she did not interview, did not hire, and does not know how to fire' },
          '. That gap is human. It is cultural. It is messy. It is not solvable by a better model.',
        ],
      },
      {
        type: 'p',
        text: 'The companies that will run real fleets of agents in 2027 are the ones that started running real fleets of one in 2026. They are not waiting for the technology. The technology is already past them. They are waiting for their organizations to catch up - and the organizations only catch up when someone makes them.',
      },
      {
        type: 'p',
        text: 'If you are deploying agents: stop installing, start hiring.',
      },
      {
        type: 'p',
        text: 'If you are buying agents: name the owner, write the job, demand the pilot.',
      },
      {
        type: 'p',
        text: 'If you are Salesforce: the next billion is not a marketing problem. It is an onboarding problem. Onboard accordingly.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'FAQ' },
      {
        type: 'faq',
        q: 'Did Salesforce really only sell 3,000 AI agents?',
        a: 'The "3,000" figure refers to the order-of-magnitude gap between the publicly stated "billion agents by 2025" goal and the actual paid Agentforce deployments in production. Salesforce has, predictably, since reframed the metric toward "agentic interactions" and "Data Cloud-powered agent activity," which are larger and harder to verify numbers. The point of this post does not depend on the exact figure. Whether it is 3,000 or 30,000 or 300,000, the gap to a billion is real, and the reason for the gap is organizational, not technical.',
      },
      {
        type: 'faq',
        q: 'Is this a Salesforce-specific problem or industry-wide?',
        a: 'Industry-wide. Microsoft Copilot Studio, Google\'s Gemini agents, ServiceNow\'s Now Assist, and every "agentic platform" launched in 2025 are running into the same wall. Salesforce is just the highest-profile example because Benioff put a billion-shaped target on the side of the building. The technology is genuinely capable. The deployments are genuinely stalling. The gap, in every case we have seen, is the organization.',
      },
      {
        type: 'faq',
        q: 'What is the single biggest reason agent pilots fail?',
        a: 'Nobody owns the agent. The pilot starts in IT or in an "AI Center of Excellence," neither of which has line-of-business accountability. The first time the agent does something weird, there is no named human whose KPI moves. The pilot becomes a Slack channel of complaints, and the budget quietly disappears in the next planning cycle. The fix is non-technical: name a single human owner, in the line of business, before you spend a dollar on the model.',
      },
      {
        type: 'faq',
        q: 'How long should an agent pilot take?',
        a: 'Four to eight weeks for a real, measurable result on a real workload, in your environment, with one named KPI. Anything longer is a consulting engagement dressed as a pilot. Anything shorter is a demo dressed as a pilot. The four-to-eight-week window is enough time to integrate, eval, deploy to a small group, observe, fix, and produce a number you can defend in a budget meeting.',
      },
      {
        type: 'faq',
        q: 'What industries do agents actually work in today?',
        a: 'We have shipped production agents in high-tech, financial services, real estate, legal, retail, and defense. The pattern is consistent across all of them: the harder the regulatory and process environment, the more the win comes from organizational design rather than from raw model capability. The agent that works in defense is, technically, the same agent that works in retail. What differs is the role definition, the permission scope, the escalation rules, and the governance.',
      },
      {
        type: 'faq',
        q: 'What is the "winning formula" specifically?',
        a: [
          'Two parallel tracks running from week one: a ',
          { b: 'technical track' },
          ' (model selection, tool design, retrieval, evals, guardrails, observability) and a ',
          { b: 'cultural track' },
          ' (named human owner, written role description, permission scoping, manager enablement, comms to the affected team, KPI baselining, escalation protocol). Neither track works without the other. Most engagements only fund the first one. That is why most engagements fail.',
        ],
      },
      {
        type: 'faq',
        q: 'How do I know if my organization is ready for an agent?',
        a: 'Three questions. (1) Can you name the human who owns this agent\'s output? (2) Can you write, on one page, the role this agent will play, including what it is not allowed to do? (3) Is there a KPI that moves when this agent works, and have you measured the baseline? If the answer to any of these is "we\'ll figure that out later," you are not ready. You are not late, either - you are just earlier in the work than you thought.',
      },
      { type: 'hr' },
      {
        type: 'callout',
        parts: [
          'Written by Michael Fleicher, Principal at ',
          { a: 'Bina Labs', href: '/about' },
          '. Two-time CTO. We embed senior AI engineers and change-management leads into enterprise teams that are done with agent demos and want agents that actually run a job. If you want to talk about a real deployment - including the org work, not just the model - ',
          { a: 'start here', href: '/contact' },
          '.',
        ],
      },
    ],
  },
  'gladbites-ai-content-machine-and-the-b2b-mirror': {
    slug: 'gladbites-ai-content-machine-and-the-b2b-mirror',
    title: 'GladBites made $1.6M in 90 days with no kitchen. The B2B version is already in your inbox.',
    headline: 'GladBites made $1.6M in 90 days with no kitchen.',
    headlineAccent: 'The B2B version is already in your inbox.',
    eyebrow: '// writing /01 · ai content arbitrage · b2b mirror',
    tagline:
      'A TikTok page selling AI-generated cookbooks pulled $1.6M in three months. The interesting question is not whether the cookbooks are real - it is whether your AI vendor is running the same playbook on you.',
    description:
      'A TikTok page selling AI-generated cookbooks pulled $1.6M in three months. The interesting question is not whether the cookbooks are real. It is whether your AI vendor is running the same playbook on you.',
    datePublished: '2025-10-18',
    dateModified: '2025-10-18',
    readTime: '7 min read',
    tags: ['AI content', 'B2B AI', 'evals', 'honest deprecation', 'founder ops'],
    author: {
      name: 'Michael Fleicher',
      role: 'Principal',
    },
    cover: {
      src: '/writing/gladbites-funnel.jpeg',
      alt: 'GladBites TikTok funnel diagram - one anonymous account fanning out to 8 AI-generated recipe videos and a Stripe dashboard reading $1.6M in net volume.',
      caption:
        'GladBites: one anonymous brand account, eight clone TikTok pages, AI-generated recipe videos, one Stripe dashboard at $1.6M in 90 days.',
    },
    ogImage: '/writing/gladbites-funnel.jpeg',
    body: [
      {
        type: 'p',
        parts: [
          { b: 'A short answer first.' },
          ' GladBites is a TikTok-native cookbook funnel. Fifteen anonymous pages, 200+ AI-generated recipe videos a month, AI voice, AI captions, an automated checkout that drops a digital book between $10 and $25. Three months in, $1.6M in revenue, 55M organic views, and no human ever turned on a stove. It works because the format mimics a creator who actually cooks, the hook lands in the first 1.2 seconds, and TikTok has not yet built a "this food was never real" detector. That arbitrage window is the entire business.',
        ],
      },
      {
        type: 'p',
        parts: [
          'The interesting question is not "is this marketing genius or fake slop." Both, obviously. The interesting question is: ',
          { b: 'what is the B2B equivalent of GladBites, and is your AI vendor already running it on you?' },
        ],
      },
      { type: 'p', text: 'Spoiler: yes.' },
      { type: 'hr' },
      { type: 'h2', text: 'What GladBites actually built' },
      { type: 'p', text: 'Strip the food and the funnel runs like this:' },
      {
        type: 'ol',
        items: [
          {
            lead: 'Generative supply.',
            text: 'A pipeline that produces 5-10 short videos per page per day. AI image gen for plates, AI voice for narration, templated captions ("76g Protein", "Athlete\'s Meal", "Lunch for $2.50 with 58g of protein"). Cost per video, rounding generously: under a dollar.',
          },
          {
            lead: 'Distribution at zero marginal cost.',
            text: '15 anonymous accounts, no creator face, no creator fee, no contract to renegotiate when one account gets banned. If TikTok kills three pages tomorrow, twelve are still printing.',
          },
          {
            lead: 'Format mimicry.',
            parts: [
              'The videos copy the ',
              { i: 'visual cadence' },
              ' of real food TikTokers down to the plate angle, the cut on the chew, the macro overlay. They are not better. They are ',
              { i: 'indistinguishable on a 1.2-second hook' },
              '.',
            ],
          },
          {
            lead: 'A funnel that closes itself.',
            text: 'Bio link → landing page → $10 or $25 cookbook → Stripe → email autoresponder. Zero human in the loop after the model presses publish.',
          },
        ],
      },
      {
        type: 'p',
        parts: [
          'The clever part is not the AI. The clever part is the ',
          { b: 'format mimicry' },
          '. The videos look enough like the real thing that the platform\'s recommender treats them as the real thing, and so does the viewer for the four seconds it takes to tap "Buy."',
        ],
      },
      {
        type: 'p',
        text: 'That\'s the whole trick. That is what is worth $1.6M for ninety days.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'The B2B mirror' },
      { type: 'p', text: 'Now do the substitution:' },
      {
        type: 'table',
        headers: ['GladBites', 'Your AI vendor'],
        rows: [
          ['AI-generated recipe videos', 'AI-generated "strategy decks" and "discovery findings"'],
          ['Indistinguishable on a 1.2-second hook', 'Indistinguishable in a 30-minute exec readout'],
          ['15 anonymous TikTok pages', '15 named "senior consultants" who are one shared GPT prompt'],
          ['$10 cookbook, no kitchen', '$80K SOW, no engineer who has ever shipped this kind of system'],
          ['TikTok recommender can\'t yet detect', 'Your procurement process can\'t yet detect'],
          ['90-day arbitrage window', '12-month arbitrage window, and closing'],
        ],
      },
      {
        type: 'p',
        text: 'The B2B version is more profitable per unit and the buyer takes longer to notice. That is the only difference.',
      },
      { type: 'p', text: 'We see it every week:' },
      {
        type: 'ul',
        items: [
          'A 60-page "AI readiness assessment" produced in two days by Claude with the client logo dropped in. Billed at $40K.',
          'A "custom RAG architecture" that is the LangChain quickstart with the variable names changed.',
          {
            parts: [
              'A "proprietary eval framework" that is ',
              { c: 'for prompt in prompts: ask_gpt(prompt); print(score)' },
              ', no rubric, no inter-rater reliability, no held-out set.',
            ],
          },
        ],
      },
      {
        type: 'p',
        text: 'Each one passes the 30-minute exec readout. Each one fails on the day a real user types a real query.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'Why GladBites is honest and the B2B version is not' },
      { type: 'p', text: 'Here is the part nobody on LinkedIn wants to say.' },
      {
        type: 'p',
        parts: [
          { b: 'GladBites is honest.' },
          ' A $10 digital cookbook with AI-generated recipes is exactly what it says it is. The buyer wanted "100 recipes for $10," they got "100 recipes for $10," and most of them will probably work because chicken-rice-broccoli is not a hard generation problem. The macro counts are made up, but if you eat the food, you eat the food. The customer churns out, the next one taps in, the funnel keeps spinning. The marginal cost of one disappointed customer is zero.',
        ],
      },
      {
        type: 'p',
        parts: [
          { b: 'The B2B version is not honest.' },
          ' When a vendor sells your CFO a "transformation roadmap" that is a hallucinated outline of someone else\'s case studies, the failure mode is not "this person didn\'t enjoy dinner." It is "you spent $400K on a six-month deck-driven engagement that never produced running code, and your competitor shipped." The marginal cost of one disappointed B2B customer is your reputation, your next renewal, and the engineer you hired to maintain the thing.',
        ],
      },
      { type: 'p', text: 'Same generative trick. Different blast radius.' },
      { type: 'hr' },
      { type: 'h2', text: 'What this means if you are the buyer' },
      {
        type: 'p',
        text: 'Three filters that GladBites would not survive but that most "AI consultancies" currently do:',
      },
      { type: 'h3', text: '1. Demand the eval before the deck.' },
      {
        type: 'p',
        parts: [
          'If a vendor cannot tell you, in week one, ',
          { b: 'how they will measure whether the system works' },
          ', with a rubric, a held-out set, and an honest disagreement number between human raters - they are selling you a cookbook with no kitchen. This is non-negotiable. Evals are 80% of the job. The deck is the wrapper.',
        ],
      },
      { type: 'h3', text: '2. Demand the prototype before the contract.' },
      {
        type: 'p',
        parts: [
          'A 4-week paid pilot that produces working code in your environment costs less than the SOW you are about to sign. If the vendor cannot build something real in four weeks, they cannot build something real in forty. We have written about this in our ',
          { a: 'manifesto', href: '/manifesto' },
          '. It is the single best filter we know.',
        ],
      },
      { type: 'h3', text: '3. Demand a name on every line of code.' },
      {
        type: 'p',
        text: 'Not a logo. A name. A senior engineer who can be called at 11pm in week 14 and asked why the retrieval recall dropped. If the answer is "we\'ll have to check with the team," you bought a TikTok page.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'What this means if you are the builder' },
      {
        type: 'p',
        text: 'Three things GladBites got right that serious AI builders keep getting wrong:',
      },
      {
        type: 'ol',
        items: [
          {
            lead: 'Ship at the speed of the platform, not the speed of the org.',
            text: 'GladBites publishes 5-10 times a day. Your team ships once a quarter. Both of you are using the same models. One of you is using them.',
          },
          {
            lead: 'Format mimicry is a feature, not a bug.',
            text: 'The reason GladBites works is that it looks like the thing the user already trusts. If your B2B AI product looks like an "AI dashboard" and feels like an "AI dashboard," you are competing with everyone. If it looks like the spreadsheet your buyer already uses, with one quiet upgrade, you are not.',
          },
          {
            lead: 'The arbitrage window always closes.',
            text: 'TikTok will eventually flag synthetic food. Procurement will eventually demand a real engineer on the call. Build the business that survives the day after the window closes, not the one that maximizes revenue inside it.',
          },
        ],
      },
      { type: 'hr' },
      { type: 'h2', text: 'The honest take' },
      {
        type: 'p',
        text: 'GladBites is not a marketing genius and it is not a fraud. It is an arbitrage. Someone noticed that TikTok\'s recommender is currently blind to a specific kind of synthetic content and they industrialized the gap. They will print money until the gap closes, and then they will move to the next gap. That is fine. That is content marketing in 2026.',
      },
      {
        type: 'p',
        parts: [
          'The reason it matters to anyone reading this is that ',
          { b: 'the same arbitrage is being run, right now, on enterprise AI buyers, by people who are wearing nicer shirts' },
          '. The buyer is slower, the contracts are bigger, and the customer doesn\'t get to swipe past.',
        ],
      },
      {
        type: 'p',
        text: 'If you are buying AI: get the eval before the deck, the prototype before the contract, and the name on every line of code.',
      },
      {
        type: 'p',
        text: 'If you are building AI: ship at platform speed, mimic the format your user already trusts, and build for the day after the arbitrage closes.',
      },
      { type: 'p', text: 'If you are GladBites: nice run. We hope you saved.' },
      { type: 'hr' },
      { type: 'h2', text: 'FAQ' },
      {
        type: 'faq',
        q: 'Is GladBites\' $1.6M number real?',
        a: 'The screenshots show a Stripe-style dashboard reading $1,613,17X.XX in net volume over the displayed window. The number is plausible for the format - 55M organic views into a $10-$25 cookbook funnel converts at low single-digit percent, and the math gets you there. We have not independently verified the dashboard. The point of the post does not depend on the exact number; it depends on the playbook.',
      },
      {
        type: 'faq',
        q: 'Is making AI-generated cookbooks unethical?',
        a: 'A $10 digital cookbook of AI-generated recipes is, in our view, fine. The recipes mostly work, the buyer knows what they bought, and nobody is harmed. The same playbook applied to medical advice, financial guidance, or enterprise AI strategy is not fine, because the failure modes are not "the chicken was dry."',
      },
      {
        type: 'faq',
        q: 'Why is this a B2B AI story?',
        a: 'Because the same generative tools that produce indistinguishable food videos in 60 seconds also produce indistinguishable strategy decks, eval frameworks, and "custom RAG architectures" in 60 seconds. The B2B buyer\'s detector is currently weaker than TikTok\'s recommender, and the contracts are 1000x larger.',
      },
      {
        type: 'faq',
        q: 'What is the single best filter against this in B2B?',
        a: 'Demand a working prototype, in your environment, in four weeks, before signing the main contract. If the vendor cannot or will not, walk. We have refunded four engagements ourselves under this rule. It is the best money any of those clients ever spent.',
      },
      {
        type: 'faq',
        q: 'What is "format mimicry" in B2B AI products?',
        a: 'The deliberate choice to make the AI feature look and feel like the existing tool the user already trusts - the same spreadsheet, the same ticket queue, the same email thread - with one quiet capability upgrade, instead of dropping a new "AI dashboard" the user has to learn. Adoption follows the format the user already uses.',
      },
      {
        type: 'faq',
        q: 'How long is the B2B AI arbitrage window?',
        a: 'Our estimate, with low confidence: 12-18 months from now. After that, procurement will get better at smelling generated work, junior staff will get better at producing real work with AI, and the gap will collapse. Build accordingly.',
      },
      { type: 'hr' },
      {
        type: 'callout',
        parts: [
          'Written by Michael Fleicher, Principal at ',
          { a: 'Bina Labs', href: '/about' },
          '. Two-time CTO. We embed senior AI engineers into B2B teams that are tired of decks that don\'t run in production. If you want to talk about an actual build - not a roadmap - ',
          { a: 'start here', href: '/contact' },
          '.',
        ],
      },
    ],
  },
};

export const WRITING_LIST = Object.values(WRITINGS).sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
);
