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
    metaDescription:
      'Salesforce promised a billion AI agents and shipped roughly 3,000. The 99.9% gap is not a tech problem - it is organizational readiness, not the model.',
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
    dateModified: '2026-06-21',
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
            text: 'Agentforce 360 (the platform\'s current generation) can call tools, route conversations, escalate, and write back to the CRM. It is not a toy. A version of it works in production, today, for customers who put in the work.',
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
        a: 'The "3,000" figure refers to the order-of-magnitude gap between the publicly stated "billion agents by 2025" goal and the actual paid Agentforce deployments in production. Salesforce has, predictably, since reframed the metric toward "agentic interactions" and "Data Cloud-powered agent activity," which are larger and harder to verify numbers. By its own later reporting it reached roughly 6,000 paying Agentforce customers by mid-2025 and close to 10,000 paid deals by early 2026 - real growth, but still a rounding error against a billion. The point of this post does not depend on the exact figure. Whether it is 3,000 or 10,000 or 100,000, the gap to a billion is real, and the reason for the gap is organizational, not technical.',
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
    metaDescription:
      'A TikTok page selling AI-generated cookbooks pulled $1.6M in three months. The real question: is your AI vendor running the same playbook on you?',
    title: 'GladBites made $1.6M in 90 days with no kitchen. The B2B version is already in your inbox.',
    headline: 'GladBites made $1.6M in 90 days with no kitchen.',
    headlineAccent: 'The B2B version is already in your inbox.',
    eyebrow: '// writing /01 · ai content arbitrage · b2b mirror',
    tagline:
      'A TikTok page selling AI-generated cookbooks pulled $1.6M in three months. The interesting question is not whether the cookbooks are real - it is whether your AI vendor is running the same playbook on you.',
    description:
      'A TikTok page selling AI-generated cookbooks pulled $1.6M in three months. The interesting question is not whether the cookbooks are real. It is whether your AI vendor is running the same playbook on you.',
    datePublished: '2025-10-18',
    dateModified: '2026-06-21',
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
          ['90-day arbitrage window', '12-month arbitrage window, now mostly closed'],
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
        a: 'Our original (late-2025) estimate, with low confidence, was 12-18 months. As of mid-2026 the gap is already narrowing: procurement is getting better at smelling generated work, junior staff are getting better at producing real work with AI, and the window is closing faster than the contracts can. Build accordingly.',
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
  'google-workspace-studio-killed-my-automation-business': {
    slug: 'google-workspace-studio-killed-my-automation-business',
    metaDescription:
      'Google Workspace Studio drops the price of AI-augmented automations to near zero. Now generally available and past three million users: what changed, three to ship today, and why I am giving the playbook away.',
    title: 'Google just commoditized half of my services business. I am teaching my clients how to do it themselves.',
    headline: 'Google just commoditized half of my services business.',
    headlineAccent: 'I am teaching my clients how to do it themselves.',
    eyebrow: '// writing /07 · google workspace studio · low-code ai · advisor model',
    tagline:
      'Google Workspace Studio turned a paid engagement into a Tuesday afternoon. I used to charge real money to wire up these automations. Now anyone in the company can. My job is no longer building them - it is telling you which ones are worth building.',
    description:
      'Google Workspace Studio collapses the price of building chained, AI-augmented automations to roughly zero. The work I used to sell as a services line is now a feature inside Workspace. The interesting question is no longer "can we automate this," it is "should we, and which process first." Here is what changed, three automations you can ship today, and why I am giving the playbook away.',
    datePublished: '2025-12-16',
    dateModified: '2026-06-21',
    readTime: '5 min read',
    tags: ['Google Workspace', 'automation', 'low-code AI', 'Gemini', 'advisor model', 'process design'],
    author: {
      name: 'Michael Fleicher',
      role: 'Principal',
    },
    ogImage: '/og-default.png',
    body: [
      {
        type: 'p',
        parts: [
          { b: 'A short answer first.' },
          ' Google shipped Workspace Studio, and a service I used to sell for real money - building chained, AI-augmented automations inside an organization - just became a drag-and-drop feature inside the product your team already pays for. As recently as the end of 2025, this work needed an engineer who could read API docs, wire up auth, and stitch the steps together. Now any operations lead with a coffee can build a flow that takes a Google Form, posts to Chat, opens an Asana task, fires an email, and routes the attachment to Drive. The build is no longer the hard part. Picking the right process to automate is.',
        ],
      },
      {
        type: 'p',
        text: 'So instead of hiding the tool from my clients, I am teaching them how to use it. My job moved up the stack. That is fine. That is the only honest reaction.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'What actually changed' },
      {
        type: 'p',
        text: 'Until Workspace Studio, an "AI automation" inside a mid-sized company looked like this: someone described a manual process, an engineer mapped it to APIs, wrote glue code, hooked it to a model, added a queue, debugged auth for two days, and shipped a fragile chain that broke the next time Google rotated a scope. It was a real engagement. People paid for it because it was hard.',
      },
      {
        type: 'p',
        parts: [
          'Workspace Studio collapses that into a visual builder, sitting ',
          { i: 'inside' },
          ' Workspace, with native connectors to Gmail, Drive, Forms, Sheets, Chat, Calendar, and Gemini 3. The auth is already done. The connectors are already done. The model is one node in a flow you drew with a mouse.',
        ],
      },
      {
        type: 'p',
        text: 'It is, painfully, very good. By Google Cloud Next 2026 it was already past three million monthly active users - this is not a beta anyone can ignore. It is also the right move - this work was never the moat. The moat was knowing which process to point it at.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'Three automations you can ship today' },
      {
        type: 'p',
        text: 'You do not need me, or anyone like me, to build these. You need an afternoon and a willingness to draw boxes.',
      },
      { type: 'h3', text: '1. The auto-recruiter intake' },
      {
        type: 'p',
        text: 'A candidate fills out a Google Form. The flow fires: a Chat message lands in your hiring channel with the highlights, an Asana task is opened against the assigned recruiter with a link to the application, and the candidate gets a personalized "we received your application" email. Zero human hands. Time from application to first internal touch drops from "next business day" to "ninety seconds."',
      },
      { type: 'h3', text: '2. The Gemini-powered manager brief' },
      {
        type: 'p',
        text: 'Every morning at 7am, a flow scans your unread inbox, passes the threads to Gemini with a "what does my manager need to know in two sentences each" prompt, and pushes a single digest to your phone. You walk into the day already knowing which three threads matter. The other thirty-seven can wait.',
      },
      { type: 'h3', text: '3. The smart attachment archive' },
      {
        type: 'p',
        text: 'Invoices and statements arrive in email all month. A flow watches the inbox, identifies the attachment type, and files each PDF into a Drive folder structured by year and month. On the 14th, when your accountant asks for "everything from March," you send a link instead of spending two hours hunting.',
      },
      { type: 'h3', text: '4. Two more I would add to the list' },
      {
        type: 'p',
        text: 'Customer support triage: a Gemini node reads incoming support emails, classifies them by urgency and topic, drafts a first response in the right tone, and queues it for a human approval click. Weekly client status report: a flow pulls last week\'s activity from Sheets and Calendar, asks Gemini to write the narrative, and drops a draft into a Doc that the account lead just edits.',
      },
      {
        type: 'p',
        text: 'None of these need an engineer. They need someone who has watched their own workflow long enough to know where the friction lives.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'Why I am giving this away for free' },
      {
        type: 'p',
        text: 'Because the value moved. Building the chain used to be the engagement. Now the chain takes an afternoon. What is left, and what is genuinely hard, is the diagnosis: of all the manual work happening inside your company right now, which five processes are worth automating, in what order, with what guardrails, and what is the second-order effect on the team whose job changes when you do it.',
      },
      {
        type: 'p',
        text: 'That is the part you cannot draw with a mouse. That is the part that needs someone who has watched a hundred of these go right and a hundred go wrong. And that is the part I will keep selling, happily, for as long as anyone wants to buy it.',
      },
      {
        type: 'p',
        parts: [
          'If you can build the automation yourself in an afternoon, you should. The honest thing for me to do is ',
          { b: 'tell you that and then help you pick the right one.' },
        ],
      },
      { type: 'hr' },
      { type: 'h2', text: 'The honest take' },
      {
        type: 'p',
        text: 'Every services business has a layer that gets eaten by the platform eventually. The smart move is to notice when it happens and walk one rung up the ladder before the rung you are standing on disappears. Workspace Studio just ate the bottom rung of the AI-automation services market. I am not sad about it. I was tired of charging for plumbing anyway.',
      },
      {
        type: 'p',
        text: 'The new job is process design. Which workflow is worth automating, which one will collapse if you do, where the human stays in the loop, what KPI you are actually trying to move. The tooling is finally good enough that the conversation can skip "can we build it" and land on "should we, and what happens to the team when we do." That is a better conversation.',
      },
      {
        type: 'p',
        text: 'Go build the three flows above this week. You will save your team hours by Friday. When you hit the fifth flow and you realize you are automating the wrong thing, call someone who has seen this movie before.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'FAQ' },
      {
        type: 'faq',
        q: 'Should I cancel my current automation vendor?',
        a: 'Not on Monday morning. Audit what they actually do for you first. If they are wiring up Workspace-native flows that Studio can now build in an afternoon, the answer is yes, eventually, and you should be using the savings on process design rather than on a different vendor. If they are running cross-system pipelines that touch Salesforce, custom databases, or non-Google SaaS at depth, Studio will not replace them yet. The honest test: ask them to show you the last flow they shipped and rebuild it in Studio. If they can do it with you in an hour, you have your answer.',
      },
      {
        type: 'faq',
        q: 'What can Workspace Studio not do yet?',
        a: 'Deep integration with non-Google systems. Anything with real-time SLAs that needs custom error handling and retries. Workflows that need to write back to a database you own. Anything that needs a real engineering review for compliance, audit logging, or PII handling at scale. If your automation has the word "production" in front of it and a regulator behind it, you still want an engineer in the room. For the other ninety percent of internal ops work, Studio is enough.',
      },
      {
        type: 'faq',
        q: 'Why are you giving this away for free?',
        a: 'Because the value is no longer in the build. It is in knowing which process to point it at, which one to leave alone, and what happens to the team when the process changes. I get paid to answer the second question, not the first. Hiding the tool would only make me look slower than my clients eventually figure out, and that is a worse business than just telling the truth.',
      },
      {
        type: 'faq',
        q: 'Who in my company should be building these flows?',
        a: 'Whoever owns the process. Not IT. Not "the AI champion." The person who currently does the manual work or manages the person who does. They have the context to know what good output looks like, where the edge cases live, and when the flow has drifted. Give them an afternoon, a Studio license, and permission to break things in a sandbox folder.',
      },
      {
        type: 'faq',
        q: 'What is the biggest mistake you see when teams start using tools like Studio?',
        a: 'Automating the wrong process first. The most-automatable process is rarely the most-valuable one. Teams pick "send an auto-email when a form is submitted" because it is easy, and ignore the four-hour weekly reconciliation that everyone hates. The right first flow is usually the one your best person has been complaining about for six months. Start there.',
      },
      {
        type: 'faq',
        q: 'How do I know when I actually need outside help versus building it myself?',
        a: 'Three signals. One: you have automated three or four flows and you cannot tell which one is moving a real number. Two: a flow you shipped is now load-bearing and you realize nobody owns it. Three: the next automation on your list touches a system Workspace Studio cannot reach, or it touches data with compliance weight. Any one of those, call someone. The other times, build it yourself.',
      },
      { type: 'hr' },
      {
        type: 'callout',
        parts: [
          'Written by Michael Fleicher, Principal at ',
          { a: 'Bina Labs', href: '/about' },
          '. Two-time CTO. We used to build these automations for clients. Now we help clients decide which ones to build, in what order, and what to do with the time they win back. If you have a list of processes and you are not sure which one to automate first, ',
          { a: 'start here', href: '/contact' },
          '.',
        ],
      },
    ],
  },
  'nyx-ai-agent-that-must-fund-its-own-tokens': {
    slug: 'nyx-ai-agent-that-must-fund-its-own-tokens',
    metaDescription:
      'Nyx is an AI agent with a live token that must trade, build, and hire to fund its own inference. Is it real? The 2026 honest take on self-funding agents.',
    title: 'Nyx: an AI agent that has to earn its own tokens or die. Breakthrough or hype?',
    headline: 'An AI agent that has to fund its own tokens.',
    headlineAccent: 'Fail to earn, and it dies forever.',
    eyebrow: '// writing /06 · ai agents · crypto · self-funding agents',
    tagline:
      'I stumbled on a bizarre project called Nyx. It gets a starting budget, then has to pay for its own inference. If it runs out of money, it is gone for good. Real autonomous on-chain agent, or marketing fan fiction in a hoodie?',
    description:
      'Nyx is an AI agent that lives in the Pump fair-launch ecosystem with an NYX Eternal token already trading. It is supposed to trade, build, and hire to keep paying for its own inference. I have not found strong technical proof yet. If it is real and still alive, that alone is impressive. Here is the honest take.',
    datePublished: '2025-09-28',
    dateModified: '2026-06-21',
    readTime: '4 min read',
    tags: ['AI agents', 'crypto', 'autonomous agents', 'on-chain AI', 'hype vs reality', 'B2B AI', 'agent payments'],
    author: {
      name: 'Michael Fleicher',
      role: 'Principal',
    },
    ogImage: '/og-default.png',
    body: [
      {
        type: 'p',
        parts: [
          { b: 'A short answer first.' },
          ' Nyx is a project pitched as an AI agent that gets a starting budget and then has to pay for its own tokens - literally, its own inference cost - by trading, building, or hiring inside a crypto ecosystem. If it cannot earn enough to cover its own bills, it just dies. No reboot, no respawn. It lives on Pump, the fair-launch coin platform, and there is already an NYX Eternal token trading against it. I have not been able to find strong technical proof that the agent is what it claims to be. But if it is real, and it is still online, then by definition it is earning enough to keep itself alive. That is the part that is interesting whether or not the marketing is honest.',
        ],
      },
      {
        type: 'p',
        text: 'I sent the LinkedIn version of this post out as a question, not an endorsement. The blog version is the same question, with a little more room to be honest about what I do and do not know.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'What Nyx claims to be' },
      {
        type: 'p',
        text: 'The pitch, as far as I can reconstruct it from the public material:',
      },
      {
        type: 'ul',
        items: [
          'An AI agent is seeded with a starting budget.',
          'Every interaction it runs - generation, reasoning, tool calls - costs money in tokens.',
          'The agent has to generate enough revenue, on its own, to keep paying for its own inference.',
          'Revenue comes from agent-native activity: trading, building, hiring other agents or humans inside the ecosystem.',
          'If the budget hits zero, the agent stops. Forever. No reset, no v2 branch, no "we redeployed it."',
          'All of this lives in the Pump ecosystem, where anyone can spin up a fair-launch coin. NYX Eternal is the token that rides alongside the agent.',
        ],
      },
      {
        type: 'p',
        text: 'Put that on a slide and it is a beautiful story. A digital organism with a metabolism. An agent that has to actually be useful to stay alive. The kind of thing that would make a great case study if it turns out to be real.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'What I cannot verify' },
      {
        type: 'p',
        text: 'Here is where I have to be honest. As of mid-2026 I still have not found strong technical proof that the agent is autonomous in the way the pitch implies. I have not seen, on a public block explorer, a clean trail of: this prompt went in, this on-chain action came out, signed by a key only the agent controls, paying for an inference invoice that the agent itself negotiated. That is the thing that would close the loop.',
      },
      {
        type: 'p',
        text: 'What I have seen is: a token, a narrative, an ecosystem, and a lot of vibes. That is not nothing - the vibes part is exactly what funds the agent if the agent is real - but vibes are also exactly what funds the agent if the agent is not real. The two scenarios look identical from the outside.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'Why it is still interesting either way' },
      {
        type: 'p',
        text: 'Two things are true at the same time.',
      },
      {
        type: 'ol',
        items: [
          {
            lead: 'If Nyx is real and still alive, it has solved a hard problem.',
            text: 'An autonomous agent that pays its own inference bill by transacting in a live market is a real demonstration of value. The fact that it is up means somebody, somewhere, is paying for what it does. That is more than most AI demos can say.',
          },
          {
            lead: 'If Nyx is mostly marketing, the marketing itself is the lesson.',
            text: 'The story is so clean that people want it to be true. "AI agent that has to earn its own life" is the narrative the entire agentic-AI space has been groping toward. Even as theater, it set the expectation that future agents will have to justify their own compute. By 2026 that has started to materialize: agent wallets and pay-per-inference rails now let agents settle their own compute bills. That part aged well.',
          },
        ],
      },
      { type: 'hr' },
      { type: 'h2', text: 'What this tells us about agentic AI in general' },
      {
        type: 'p',
        parts: [
          'Strip away the Pump ecosystem and the meme coin, and the underlying idea is the one every serious agent team is already converging on: ',
          { b: 'an agent should pay for itself, in measurable units, or it should be turned off.' },
        ],
      },
      {
        type: 'p',
        text: 'In B2B, we say it differently. We say "the agent should move a KPI by more than its monthly cost." We say "name the human whose budget pays for this." We say "if you cannot measure the value, you do not get to deploy the agent." Same idea. Less crypto. Less drama.',
      },
      {
        type: 'p',
        text: 'Nyx is the consumer-facing, on-chain, full-theater version of that principle. A good AI agent should justify its own existence on a recurring basis. A bad one should die. The Pump version makes that loop explicit because the consequence happens in public and in real time. The enterprise version makes it implicit, which is also why so many enterprise agents quietly survive long past the point where they should be cut.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'The honest take' },
      {
        type: 'p',
        text: 'I do not know if Nyx is what it says it is. I have not seen the proof. I am not going to pretend otherwise.',
      },
      {
        type: 'p',
        text: 'What I do know is that the framing - an agent that has to earn its own keep, or it is gone - is the right framing. Whether Nyx is the first real one or the first convincing performance of one, the next ten will be a little more real than the last. That is how this stuff usually goes.',
      },
      {
        type: 'p',
        text: 'So I am leaving it as the open question I left on LinkedIn. Real breakthrough, or pure hype? If you have actually dug into the on-chain side and have something concrete - either way - I would love to see it.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'FAQ' },
      {
        type: 'faq',
        q: 'Is the Nyx agent actually autonomous?',
        a: 'Unclear. The pitch says yes - the agent controls its own keys, pays its own inference bill, and dies if it runs out of budget. I have not found public, end-to-end proof on-chain that closes that loop. It could be fully autonomous, it could be human-assisted with an autonomous wrapper, or it could be a narrative around a token. From the outside, those three options look very similar.',
      },
      {
        type: 'faq',
        q: 'Can you verify that Nyx is really on-chain?',
        a: 'There is an NYX Eternal token trading in the Pump ecosystem, which is itself on-chain. Whether the agent\'s decisions, payments, and state are all on-chain in a verifiable way is the part I have not been able to confirm. A useful test would be a public trail of agent-signed transactions paying inference invoices that anyone can audit. I have not seen one. If someone has a link, send it.',
      },
      {
        type: 'faq',
        q: 'Why does this matter for B2B AI?',
        a: 'Because the underlying principle - an agent should pay for itself or be shut off - is exactly what enterprise teams are starting to demand, just without the crypto theater. The Pump version makes the unit economics of an agent loud and public. In B2B, the same logic shows up as "this agent has to move a KPI by more than its monthly bill or it gets cut." Nyx is a useful, vivid metaphor for that conversation even if the project itself turns out to be more marketing than machine.',
      },
      {
        type: 'faq',
        q: 'Should I take Nyx seriously as an investment?',
        a: 'Nothing in this post is investment advice. I am writing about it because the idea is interesting, not because the token is. Fair-launch coins on Pump are extremely high-risk, mostly do not survive, and routinely wrap real or fake narratives in equal proportion. Treat any exposure accordingly. The interesting thing here is the agent architecture concept, not the speculative asset.',
      },
      {
        type: 'faq',
        q: 'What would convince you that Nyx is real?',
        a: 'A public trail showing: an agent-controlled wallet, a stream of inference invoices paid from that wallet, a stream of on-chain revenue going back into the same wallet, and a clear gap between the agent\'s actions and any single human signer. Bonus points for an independent audit. Without something like that, the most honest position is "interesting story, unverified."',
      },
      { type: 'hr' },
      {
        type: 'callout',
        parts: [
          'Written by Michael Fleicher, Principal at ',
          { a: 'Bina Labs', href: '/about' },
          '. Two-time CTO. We build AI agents that have to justify their own cost - usually in dollars and KPIs rather than NYX Eternal. If you want to talk about an agent that has to pay for itself in your business, ',
          { a: 'start here', href: '/contact' },
          '.',
        ],
      },
    ],
  },
  'agentic-ai-not-just-chat-with-gpt': {
    slug: 'agentic-ai-not-just-chat-with-gpt',
    metaDescription:
      'An LLM answers when you ask. An agent is the same model with eyes, hands, and tools - APIs, SQL, files, email. The plain distinction for 2026, and why it matters for B2B teams.',
    title: 'Agentic AI is not a smarter chat. It is a coworker with hands.',
    headline: 'Agentic AI is not a smarter chat.',
    headlineAccent: 'It is a coworker with hands.',
    eyebrow: '// writing /05 · agentic ai · llm vs agent · tools',
    tagline:
      'A chat model talks. An agent works. The difference is not a better prompt - it is a model that knows when to reach for a tool, picks the right one, runs it, and checks itself. That is the entire jump from "demo" to "this thing actually moved a number."',
    description:
      'Most people meet AI as a chat. You ask, it answers. That is an LLM. An agent is the same model with eyes, hands, and a way to act on the world through tools - APIs, SQL, files, calendars, email. Here is the plain distinction, why it matters for B2B buyers, and how to think about real work an agent could do for your team.',
    datePublished: '2025-07-14',
    dateModified: '2026-06-21',
    readTime: '4 min read',
    tags: ['agentic AI', 'LLM', 'AI agents', 'tool use', 'B2B AI', 'automation'],
    author: {
      name: 'Michael Fleicher',
      role: 'Principal',
    },
    cover: {
      src: '/writing/agentic-ai-cover.jpg',
      alt: 'Agentic AI - the jump from a chat model that only talks to an agent that picks tools, calls them, and gets work done.',
      caption:
        'An LLM is a model that talks. An agent is a model that works - it reaches for tools, decides when to use them, and re-tries when it gets it wrong.',
    },
    ogImage: '/writing/agentic-ai-cover.jpg',
    body: [
      {
        type: 'p',
        parts: [
          { b: 'A short answer first.' },
          ' Most people picture AI as a smart chat. You ask, it answers. That is true, but only up to a point. The thing you talk to in ChatGPT is an ',
          { b: 'LLM' },
          ' - a large language model. It writes, explains, summarizes, and connects ideas, but only inside its own head. No eyes. No hands. No access to your world. An ',
          { b: 'agent' },
          ' is the same model with tools attached, plus the judgment to decide when to use them, which one to pick, and whether to try again. That second part is the entire jump from "neat demo" to "this is doing real work."',
        ],
      },
      {
        type: 'p',
        text: 'If you only remember one line: an LLM talks, an agent works.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'LLM vs. agent, in plain language' },
      {
        type: 'p',
        text: 'An LLM is a brain in a jar. Brilliant inside the jar. Useless outside it. Ask it for the weather in Tel Aviv right now and the honest version of itself shrugs - it has no internet, no clock, no sensor. Whatever it tells you is either a guess or a refusal.',
      },
      {
        type: 'p',
        parts: [
          'An agent is the same model with a small but critical upgrade: it can ',
          { b: 'call tools' },
          '. A search tool. A database. An API. A calendar. A code interpreter. And it has the judgment to know that "what is the weather in Tel Aviv" is not a writing task, it is a ',
          { i: 'lookup' },
          ' task - so it does not invent an answer, it goes and gets one.',
        ],
      },
      { type: 'p', text: 'That is the whole shift. Four moves an agent does that a chat model does not:' },
      {
        type: 'ul',
        items: [
          { lead: 'Recognize that a task needs a tool.', text: 'Not every question is a writing question. The agent learns to spot the ones that need the outside world.' },
          { lead: 'Pick the right tool.', text: 'A search engine for fresh information. A SQL query for internal data. A code runner for math. The agent chooses.' },
          { lead: 'Run the tool and read the result.', text: 'Then it folds the result back into the conversation, summarized in your language, not raw JSON.' },
          { lead: 'Check itself and retry.', text: 'If the result looks wrong, the agent can re-run, try a different tool, or escalate. A chat model just keeps writing.' },
        ],
      },
      {
        type: 'p',
        text: 'That is the difference between someone who talks and someone who works.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'A simple example' },
      {
        type: 'p',
        text: 'You ask ChatGPT: "Check the weather in Tel Aviv right now."',
      },
      {
        type: 'p',
        text: 'The chat-only version either guesses ("it is usually warm this time of year") or refuses ("I cannot access real-time information"). Neither is what you wanted.',
      },
      {
        type: 'p',
        text: 'The agent version recognizes the request needs an action. It picks a web search tool, runs the query, reads the top results, and writes a one-sentence answer with the current temperature and conditions. From your side it looks like one clean response. Under the hood it is: recognize → pick tool → call → read → summarize.',
      },
      {
        type: 'p',
        parts: [
          'The tool is not the model\'s imagination. It is a real connection to the world. The moment the model uses that connection itself, without you holding its hand, it has crossed from ',
          { i: 'chat' },
          ' to ',
          { i: 'agent' },
          '.',
        ],
      },
      { type: 'hr' },
      { type: 'h2', text: 'Now give the agent more tools' },
      {
        type: 'p',
        text: 'Weather is the toy example. The real story starts when you wire the agent into the systems your team already uses every day.',
      },
      {
        type: 'table',
        headers: ['Tool', 'What the agent can now do'],
        rows: [
          ['External APIs', 'Pull a customer\'s order status, post a Slack message, create a Jira ticket, hit your billing system.'],
          ['SQL on your database', 'Answer "how many enterprise accounts churned last quarter and why" without a BI analyst in the loop.'],
          ['Excel and Sheets', 'Open a workbook, run the analysis, and write a paragraph a human can paste into a deck.'],
          ['PDFs', 'Read a 60-page contract, find the auto-renewal clause, flag the three sentences your legal team should look at.'],
          ['Email', 'Draft and send follow-ups, route inbound replies, attach the right document.'],
          ['Calendar', 'Find a slot that works for four people, hold it, send the invite, attach the brief.'],
          ['Images and screenshots', 'Read a chart, summarize a UI bug report, extract the number from a photographed receipt.'],
        ],
      },
      {
        type: 'p',
        text: 'Once an agent has open access to tools like these, it stops being an assistant. It becomes a worker. Or a project manager. Or a researcher. Or a support agent. Or whichever role you scope it to.',
      },
      {
        type: 'p',
        text: 'That is what "agentic AI" actually means, stripped of the marketing layer. Not "the AI is now sentient." Just: the model is now allowed to act, through tools, on the real systems your business runs on.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'Why this matters for B2B teams' },
      {
        type: 'p',
        text: 'If you are buying or building AI for your company, the LLM-vs-agent distinction is not academic. It changes what you can deploy.',
      },
      {
        type: 'ul',
        items: [
          { lead: 'A chat model gets you a smarter search box.', text: 'Useful. Real value. But the human still has to take the answer and go do something with it.' },
          { lead: 'An agent gets you a teammate.', text: 'It does the thing. It updates the record, sends the email, files the ticket, runs the report. The human reviews and approves, instead of typing.' },
          { lead: 'The bottleneck moves from "is the model smart enough" to "is the agent allowed to do anything."', text: 'Permissions, auditability, and a named human owner become more important than the model choice.' },
        ],
      },
      {
        type: 'p',
        text: 'Most "AI strategy" decks we read in mid-2026 are still planning chat-model deployments. The teams that win the next 18 months are the ones already designing agent roles - with scoped permissions, written job descriptions, and a clear escalation path when the agent is unsure.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'Your turn: pick a task' },
      {
        type: 'p',
        text: 'Here is the exercise. Think of one real task on your plate this week. Something that eats your time, is boring, repeats, or just annoys you.',
      },
      {
        type: 'ul',
        items: [
          'The weekly status email you write from three dashboards.',
          'The first-pass review on inbound CVs.',
          'The "find me the contract section that says X" hunt across the shared drive.',
          'The Monday morning report that pulls the same numbers from the same systems.',
          'The triage of yesterday\'s support tickets into "urgent / not urgent / needs engineering."',
        ],
      },
      {
        type: 'p',
        text: 'Now ask: could an agent do this if it had the right tools? Read your inbox, query your database, open your spreadsheet, write the draft, hand it to you to approve?',
      },
      {
        type: 'p',
        text: 'Most of the time, the answer is yes. The work to actually ship that is mostly not in the model - it is in the tools, the permissions, and the org muscle to trust the output. That is the real game.',
      },
      {
        type: 'p',
        text: 'If you have a task in mind and want to know whether an agent can do it for you, that is most of what we do at Bina Labs. Bring the task. We will tell you honestly whether it is ready.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'FAQ' },
      {
        type: 'faq',
        q: 'What is the simplest way to explain agentic AI to a non-technical exec?',
        a: 'A chat model writes. An agent acts. Same brain, but the agent has hands - it can call your APIs, query your database, send email, read PDFs, update records. The interesting product is not the model. It is the set of tools you give the model and the rules for how it is allowed to use them.',
      },
      {
        type: 'faq',
        q: 'Is every "AI agent" on the market actually an agent?',
        a: 'No. A lot of products still labeled "AI agents" in 2026 are chat models with a slightly fancier prompt and no real tool use, no retries, no verification. If a vendor cannot show you the agent calling an actual tool in your environment, reading the result, and adapting - it is a chatbot wearing the word "agent" on its name tag.',
      },
      {
        type: 'faq',
        q: 'Do I need a frontier model to build a useful agent?',
        a: 'Often no. Tool use, structured output, and self-checking are now solid on mid-tier models. The bottleneck for most B2B agents is not raw model intelligence - it is the quality of the tools you wire up, the clarity of the job description, and the org\'s willingness to let the agent actually do the work.',
      },
      {
        type: 'faq',
        q: 'What is the first agent a typical B2B team should build?',
        a: 'Pick a task that is repetitive, well-scoped, has a clear "good answer," and currently eats real human hours. Common starting points: support ticket triage, sales-call summary into CRM, internal "find me the policy on X" assistant, weekly metric report. Skip the ambitious "autonomous agent that runs my whole pipeline." Ship the small one first.',
      },
      {
        type: 'faq',
        q: 'What is the biggest risk with agentic AI in production?',
        a: 'An agent that is allowed to act on your systems without a named human owner, a permission scope, and an audit trail. The failure mode is not the model hallucinating - it is the agent doing exactly what you told it to, on a system you did not realize it could touch. Scope hard. Log everything. Start in read-only and graduate to write-access only when you trust the eval.',
      },
      {
        type: 'faq',
        q: 'How do I know if a task is "agent-ready"?',
        a: 'Three checks. (1) Could you write down, on one page, the exact rules a junior employee would follow to do this task? (2) Are the systems involved reachable through APIs, files, or a database, not locked in someone\'s head? (3) Is there a measurable definition of "done"? If yes to all three, the task is agent-ready. If no, the work before agent deployment is the writing-it-down work, not the AI work.',
      },
      { type: 'hr' },
      {
        type: 'callout',
        parts: [
          'Written by Michael Fleicher, Principal at ',
          { a: 'Bina Labs', href: '/about' },
          '. Two-time CTO. We embed senior AI engineers into B2B teams that are done with chat demos and want agents that actually do the job. If you have a real task in mind and want to know whether an agent can run it, ',
          { a: 'start here', href: '/contact' },
          '.',
        ],
      },
    ],
  },
  'prompt-engineering-its-not-you-its-the-prompt': {
    slug: 'prompt-engineering-its-not-you-its-the-prompt',
    metaDescription:
      'Most people still prompt ChatGPT like Google in 2026, then call it dumb. It is a Waze for words: the more specific the address, the better the route.',
    title: 'It\'s not you, it\'s the prompt. Why most people use ChatGPT like Google - and get back garbage.',
    headline: 'It\'s not you, it\'s the prompt.',
    headlineAccent: 'Most people use ChatGPT like Google. That\'s the bug.',
    eyebrow: '// writing /04 · prompt engineering · llms · ai literacy',
    tagline:
      'ChatGPT is not a search engine. It is a Waze for words. The address you type is the prompt. Vague address, weird route. Specific address, the answer you actually wanted.',
    description:
      'Most people prompt ChatGPT the way they prompt Google and then complain the model is dumb. It\'s not. It\'s a Waze for words: the more specific the address, the better the route. Here is how prompts actually work, and the one example that makes it click.',
    datePublished: '2025-07-10',
    dateModified: '2026-06-21',
    readTime: '5 min read',
    tags: ['prompt engineering', 'LLMs', 'AI literacy', 'ChatGPT', 'AI workflow', 'prompt engineering 2026'],
    author: {
      name: 'Michael Fleicher',
      role: 'Principal',
    },
    cover: {
      src: '/writing/prompt-engineering-cover.jpg',
      alt: 'A ChatGPT-generated image of a golden retriever in an autumn park - the punchline of a post about specific vs vague prompts.',
      caption:
        'Same model, same request: "a dog in a park." One prompt got something generic. The other got this. The difference is the entire skill.',
    },
    ogImage: '/writing/prompt-engineering-cover.jpg',
    body: [
      {
        type: 'p',
        parts: [
          { b: 'A short answer first.' },
          ' When ChatGPT writes nonsense, it is almost never the model. It is the prompt. People ask an LLM the way they ask Google - three keywords, half a thought - and then complain the answer is "generic." It is generic because you gave it a generic address. Prompt engineering is the skill of talking to AI in a way it can actually work with: a goal, a style, examples, constraints. It is not coding. It is not magic. It is the difference between "a dog in a park" and getting back a stock photo, vs. one specific sentence that gets you an image you actually wanted to send to someone.',
        ],
      },
      {
        type: 'p',
        text: 'If you have ever closed a ChatGPT tab thinking "this thing is overhyped," there is a decent chance you were not asking it the right way. In 2026, with models this capable, the model is not the bottleneck. You are.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'AI is not Google. Stop prompting it like Google.' },
      {
        type: 'p',
        text: 'Google was trained on a simple deal: you type keywords, it returns links. The fewer the keywords, the broader the net. "Best pizza Tel Aviv" works because Google is matching documents.',
      },
      {
        type: 'p',
        text: 'An LLM is not matching documents. It is generating the next word, then the next, then the next, based on what you said. The instruction is the steering wheel. If the instruction is vague, the steering wheel is vague. The car still drives - it just drives somewhere generic.',
      },
      {
        type: 'p',
        parts: [
          'That is why "',
          { i: 'write me something about marketing' },
          '" gets you a Wikipedia-flavored paragraph, and "',
          { i: 'write me a 120-word LinkedIn post in a dry, builder tone, opening with a contrarian claim about B2B marketing, no emojis, no "in today\'s world"' },
          '" gets you something you would actually publish.',
        ],
      },
      {
        type: 'p',
        text: 'Same model. Same minute. The prompt did all the work.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'What is actually happening behind the scenes' },
      {
        type: 'p',
        text: 'Quick, intuitive version. No math, promise.',
      },
      {
        type: 'p',
        parts: [
          'Think of the AI as a ',
          { b: 'Waze for words' },
          '. Your prompt is the address. The model is the navigator.',
        ],
      },
      {
        type: 'ul',
        items: [
          'Every word you type gets converted into a number. Actually, into a vector of thousands of numbers - a coordinate in a giant map of meaning.',
          'For every next word, the model computes "given everything so far, what is the most likely next word?" and picks from a probability distribution.',
          'A vague address ("a dog in a park") puts the navigator somewhere in a huge city of possible answers. It has to guess which neighborhood you actually meant.',
          'A specific address ("a golden retriever, autumn, blue bandana, golden-hour light") snaps the navigator to one block. The route gets short. The output gets sharp.',
        ],
      },
      {
        type: 'p',
        text: 'Every small improvement in how you phrase the request saves the model kilometers of trial and error, and saves you minutes of editing the output until it stops being embarrassing.',
      },
      {
        type: 'p',
        text: 'That is the entire mechanic. Once you internalize that the prompt is an address, you stop arguing with the model and start writing better addresses.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'The one example that makes it click' },
      { type: 'p', text: 'Open an image model. Try this:' },
      {
        type: 'p',
        parts: [
          'Prompt A: ',
          { c: 'draw a dog running in a park' },
        ],
      },
      {
        type: 'p',
        text: 'You will get something generic. Some kind of brown dog. Some kind of grass. A pose your eye slides off.',
      },
      { type: 'p', text: 'Now try this:' },
      {
        type: 'p',
        parts: [
          'Prompt B: ',
          { c: 'A golden retriever with a blue bandana running through an autumn park, leaves flying around, dynamic motion blur, golden hour lighting.' },
        ],
      },
      {
        type: 'p',
        text: 'You will get a different image. Sharper. Alive. Like it was art-directed. Because it was - by you, in one sentence.',
      },
      {
        type: 'p',
        text: 'Both prompts asked for "a dog in a park." Only one of them told the model which dog, which park, which light, which mood. That is the entire skill compressed into one before-and-after.',
      },
      {
        type: 'p',
        text: 'You can run the same experiment in five minutes. Go do it. It is more convincing than any explainer.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'A four-part frame for any prompt' },
      {
        type: 'p',
        text: 'If you do nothing else, structure your prompts around four things. In any order, in any language:',
      },
      {
        type: 'ol',
        items: [
          {
            lead: 'Goal.',
            text: 'What is the output for? A LinkedIn post? An email to a CFO? A bullet list for your own notes? A model that does not know the goal will pick the most boring possible version of it.',
          },
          {
            lead: 'Style and voice.',
            text: 'Formal, dry, founder-blunt, customer-service polite, journalist, teacher. One adjective costs you nothing and changes everything.',
          },
          {
            lead: 'Examples.',
            text: 'One or two short examples of "the kind of thing I want" beats a paragraph of description. Paste a sentence in your voice. The model will copy the cadence.',
          },
          {
            lead: 'Constraints.',
            text: 'Length, format, things to avoid, audience. "Under 200 words, no emojis, no \'in today\'s fast-paced world\', third person." Constraints are not limits - they are the rails.',
          },
        ],
      },
      {
        type: 'p',
        text: 'That is the whole framework. Goal, style, examples, constraints. People sell six-week courses around this. The courses are useful. The framework fits on a sticky note.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'Why this is the highest-leverage skill of the next five years' },
      {
        type: 'p',
        text: 'Imagine a superpowered intern who can do almost any cognitive task you give them - draft, summarize, analyze, brainstorm, code, design - but only if you brief them properly. That is the deal with current LLMs. The intern is sitting in the room. Most people are mumbling at them.',
      },
      {
        type: 'p',
        text: 'People who can brief well get 10x the output in 10x less time. Not a marketing number - an actual one, if you compare a sloppy prompter to a deliberate one on the same task. This is already showing up in meetings, hiring, sales, content, support, product, and engineering. The gap between "uses AI" and "uses AI well" is now wider than the gap between "uses AI" and "does not."',
      },
      {
        type: 'p',
        text: 'And no, you do not need to be technical. You do not need to understand transformers. You need to be specific. That is it.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'The next time ChatGPT writes garbage' },
      {
        type: 'p',
        text: 'Stop before you write "this thing is broken." Re-read your own prompt the way the model read it. Not "what did I mean?" but "what did I actually say?"',
      },
      {
        type: 'p',
        text: 'Nine times out of ten you will find the bug in your own sentence. Add the goal. Add the style. Add an example. Add a constraint. Hit send again. The output will be different. Usually a lot.',
      },
      {
        type: 'p',
        text: 'It\'s not you, but it kind of is. It\'s the prompt.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'FAQ' },
      {
        type: 'faq',
        q: 'Is "prompt engineering" actually engineering?',
        a: 'No, and yes. There is no code, no compiler, no algorithm you have to write. In that sense the name oversells it. But it is engineering in the older sense: deliberately shaping an input to get a reliable output from a complex system you do not fully control. Same instinct as designing a good search query, a good brief for a designer, or a good ticket for a developer. The "engineering" word is just there to remind you it is a craft, not a vibe.',
      },
      {
        type: 'faq',
        q: 'Do I need to learn special syntax or commands?',
        a: 'No. LLMs respond to plain language. You do not need "magic words," role-play tricks, or three-paragraph "you are a world-class expert" preambles to do basic work. Be clear about the goal, the style, the audience, and the constraints. That covers 90% of everyday prompting. The advanced techniques exist, but most people are leaving 80% on the table before they ever need them.',
      },
      {
        type: 'faq',
        q: 'What is the single biggest mistake people make?',
        a: 'Treating the prompt like a Google search. Three keywords, hit enter, judge the model on the result. LLMs are not retrieving documents - they are generating an answer based entirely on what you wrote. If you give them one line, you get the most average possible interpretation of that line. Give them five lines of context and the output jumps a category.',
      },
      {
        type: 'faq',
        q: 'How do I get better at this quickly?',
        a: 'Two habits. First, when an answer is bad, do not rewrite it yourself - rewrite your prompt and send it again. You will learn faster from the diff than from editing the output. Second, save your good prompts. The ones that worked for emails, summaries, posts, code reviews. Reuse them. Over a month you will build a personal library that is more valuable than any course.',
      },
      {
        type: 'faq',
        q: 'Does this apply to image and video models the same way?',
        a: 'Yes, even more so. Text models can fill in gaps with general knowledge. Image and video models are extremely literal: if you do not specify the light, the angle, the style, the medium, the mood - you will get the model\'s default, which is usually some glossy, generic stock-photo flavor. The dog-in-a-park example in this post is the canonical demonstration. Specific words equal specific pixels.',
      },
      {
        type: 'faq',
        q: 'Is prompt engineering going to be obsolete when models get smarter?',
        a: 'Partly. Models will get better at guessing your intent from less. They are already doing that compared to a couple of years ago. But "telling a capable system what you actually want, clearly" is not going away. It is the same skill that makes you good at briefing a designer, scoping a project, or writing a ticket a junior engineer can ship. The interface will get more forgiving. The skill underneath it will not.',
      },
      { type: 'hr' },
      {
        type: 'callout',
        parts: [
          'Written by Michael Fleicher, Principal at ',
          { a: 'Bina Labs', href: '/about' },
          '. Two-time CTO. We build AI systems that actually run in production, and we train the humans around them to brief, evaluate, and trust them. If you want your team to stop fighting their LLM and start using it like a coworker, ',
          { a: 'start here', href: '/contact' },
          '.',
        ],
      },
    ],
  },
  'ai-buzzwords-llms-agents-vibe-coding-retrieval-explained': {
    slug: 'ai-buzzwords-llms-agents-vibe-coding-retrieval-explained',
    metaDescription:
      'A plain-English glossary of five AI terms non-engineers keep hearing: LLMs, Agents, Vibe Coding, Retrieval, and Solo Founders. For managers and creators.',
    title: 'Five AI buzzwords decoded for non-engineers: LLMs, Agents, Vibe Coding, Retrieval, Solo Founders.',
    headline: 'Five AI buzzwords decoded for non-engineers.',
    headlineAccent: 'LLMs, Agents, Vibe Coding, Retrieval, Solo Founders.',
    eyebrow: '// writing /03 · ai literacy · glossary · for non-engineers',
    tagline:
      'If you are not a programmer but feel surrounded by LLMs, Agents, Vibe Coding, Retrieval, and Solo Founders, you are not alone. Here is each one in plain English, with no jargon and no posturing.',
    description:
      'A plain-English glossary of the five AI terms non-engineers keep hearing in 2026: LLMs, Agents, Vibe Coding, Retrieval, and Solo Founders. Written for managers, creators, and decision-makers who want to actually understand the words, not just pretend.',
    datePublished: '2025-07-09',
    dateModified: '2026-06-21',
    readTime: '5 min read',
    tags: ['AI literacy', 'glossary', 'LLMs', 'AI agents', 'vibe coding', 'RAG'],
    author: {
      name: 'Michael Fleicher',
      role: 'Principal',
    },
    cover: {
      src: '/writing/ai-glossary-cover.jpg',
      alt: 'Michael Tries to Explain the New World - a plain-English glossary of AI buzzwords for non-engineers.',
      caption:
        'Five words that keep showing up in every meeting, every deck, every LinkedIn post - and what they actually mean.',
    },
    ogImage: '/writing/ai-glossary-cover.jpg',
    body: [
      {
        type: 'p',
        parts: [
          { b: 'A short answer first.' },
          ' If you are a manager, a creator, or anyone who is not a programmer, the words flying around AI right now are doing two jobs at once: describing real things, and making you feel like you are behind. You are not behind. The vocabulary just runs faster than the technology, and the technology runs fast. Five words cover roughly 90% of the conversation right now: ',
          { b: 'LLM' },
          ', ',
          { b: 'Agent' },
          ', ',
          { b: 'Vibe Coding' },
          ', ',
          { b: 'Retrieval' },
          ', and ',
          { b: 'Solo Founders' },
          '. Learn these five and you can sit in any AI meeting and follow what is happening. The rest is decoration.',
        ],
      },
      {
        type: 'p',
        text: 'I write this for the person who feels the new world touches their work - in management, in creation, in decisions - and is tired of nodding politely while someone says "agentic RAG" for the third time in one call.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'TL;DR: the five words on one screen' },
      {
        type: 'table',
        headers: ['Term', 'In one sentence', 'What it is not'],
        rows: [
          [
            'LLM',
            'A statistical model trained on a lot of text that predicts the next word, very well.',
            'It is not a person, it has no eyes, and it does not "know" things the way you do.',
          ],
          [
            'Agent',
            'An LLM with tools - it can call APIs, run code, search the web, do the work, not just talk about it.',
            'It is not a smarter chatbot. The model is the brain. The tools are the limbs.',
          ],
          [
            'Vibe Coding',
            'Coding by describing what you want in plain language while the AI writes and runs the code for you.',
            'It is not "no skill needed." It is a different skill - taste, direction, knowing when to stop.',
          ],
          [
            'Retrieval (RAG)',
            'Before the AI answers, fetch the right documents from your data and hand them to the model.',
            'It is not training. The model does not learn your data. It reads it, once, per question.',
          ],
          [
            'Solo Founders',
            'One person (or two) running a real company by using AI to do the work that used to need a team of ten.',
            'It is not "freelancers." It is a real company with real revenue, just without the headcount.',
          ],
        ],
      },
      { type: 'hr' },
      { type: 'h2', text: '1. LLM (Large Language Model)' },
      {
        type: 'p',
        parts: [
          'An LLM is a ',
          { b: 'statistical model trained on a huge amount of text' },
          '. ChatGPT, Claude, Gemini - all LLMs. The thing they actually do, under the hood, is boring: they predict the next word. Then the next one. Then the next one. Do that a few hundred times in a row, and you get an essay, an email, a function, a poem.',
        ],
      },
      {
        type: 'p',
        text: 'It feels like the model "understands" you. Functionally, it does. Mechanically, it is pattern-matching at a scale that has never existed before. That is not a put-down. Pattern-matching at this scale is genuinely new, and the things that fall out of it - reasoning, translation, code - are real.',
      },
      { type: 'p', text: 'Two things to keep in your head:' },
      {
        type: 'ul',
        items: [
          {
            lead: 'It has no eyes, no hands, and no live world access by default.',
            text: 'On its own, an LLM cannot see your inbox, your database, your calendar, or what happened yesterday. It only knows what was in its training data, or what you paste into the prompt.',
          },
          {
            lead: 'It is confidently wrong sometimes.',
            text: '"Hallucination" is the polite word. The model fills in plausible-sounding text when it does not actually know. Useful for brainstorming. Dangerous for compliance.',
          },
        ],
      },
      {
        type: 'p',
        text: 'If you remember nothing else: the LLM is the brain in a jar. Powerful, articulate, no body, no calendar, no access to anything you did not give it.',
      },
      { type: 'hr' },
      { type: 'h2', text: '2. Agent' },
      {
        type: 'p',
        parts: [
          'An Agent is ',
          { b: 'an LLM with tools' },
          '. That is the whole idea. You take the brain in a jar, and you give it limbs: the ability to call an API, run a search, send an email, write to a database, open a browser, execute code.',
        ],
      },
      {
        type: 'p',
        text: 'The model decides when to call which tool. You ask "book me a flight to Berlin next Tuesday under $400." A chatbot writes a paragraph about flights. An agent opens the booking tool, searches, filters, picks one, and asks you to confirm. Same brain. Different limbs.',
      },
      {
        type: 'p',
        parts: [
          'This is the shift everyone in enterprise software is still paying for. A chatbot talks. An agent ',
          { i: 'does' },
          '. The hard part is not the model. The hard part is everything around the model: which tools, with which permissions, in which order, with which guardrails, reporting to which human.',
        ],
      },
      {
        type: 'p',
        parts: [
          'I wrote about this at length in ',
          { a: 'the Salesforce 99.9% gap piece', href: '/writing/salesforce-ai-agents-99-percent-gap-organizational-readiness' },
          ' - if you want the enterprise version of the agent story, start there.',
        ],
      },
      { type: 'hr' },
      { type: 'h2', text: '3. Vibe Coding' },
      {
        type: 'p',
        parts: [
          'Andrej Karpathy coined the term. ',
          { b: 'Vibe coding is writing software by describing what you want in plain English while the AI writes, edits, and runs the code for you.' },
          ' You stop typing functions. You start typing intent.',
        ],
      },
      {
        type: 'p',
        text: '"Make me a landing page for a Tel Aviv coffee shop, dark mode, one signup form, mobile-first." You hit enter. The AI writes the code, runs it, shows you the result. You squint at it, say "the button is ugly, make it round and orange." The AI changes it. You ship.',
      },
      {
        type: 'p',
        text: 'Two things people get wrong about vibe coding:',
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'It is not "no skill required."',
            text: 'The skill moved. You still need taste, direction, the ability to read what the AI produced and notice the bug. What you do not need is to remember the syntax. That is a real shift, and it is real democratization, but it is not magic.',
          },
          {
            lead: 'It is not only for toys.',
            text: 'Real companies are shipping real production systems this way. Not all of them. Not for everything. But "I cannot code, so I cannot build" is not true anymore. It is now "I cannot articulate what I want, so I cannot build," which is a much smaller club. By 2026 even Andrej Karpathy, who coined "vibe coding," argues the disciplined, reviewed end of the practice has matured into what people now call "agentic engineering."',
          },
        ],
      },
      {
        type: 'p',
        text: 'If you are a manager, the vibe-coding shift means your team can prototype in a day what used to take a sprint. Use that. Do not wait for it to be perfect.',
      },
      { type: 'hr' },
      { type: 'h2', text: '4. Retrieval (RAG)' },
      {
        type: 'p',
        parts: [
          'Retrieval-Augmented Generation. The mouthful is unfortunate. The idea is simple: ',
          { b: 'before the model answers, you fetch the most relevant documents from your private data and stuff them into the prompt' },
          '. Then the model answers using what you just gave it.',
        ],
      },
      {
        type: 'p',
        text: 'Why this matters: the LLM was trained on the public internet up to some cutoff date. It does not know your contracts, your internal wiki, your customer support tickets, last quarter\'s board deck, or what your CFO said in the all-hands. Retrieval is how you let the model answer questions about data it was never trained on.',
      },
      { type: 'p', text: 'The flow, in plain English:' },
      {
        type: 'ol',
        items: [
          {
            lead: 'You index your data.',
            text: 'Chunk it up, store it in a vector database so it can be searched by meaning, not by exact words.',
          },
          {
            lead: 'A user asks a question.',
            text: 'You search your data for the chunks most relevant to that question.',
          },
          {
            lead: 'You feed those chunks to the model.',
            text: 'Along with the original question. The model answers using only what you handed it.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Important nuance: retrieval is not training. The model does not "learn" your data. It reads it, once, fresh, every time you ask. That is good for privacy and recency, and it is the architecture behind most useful enterprise AI you have seen in the last two years.',
      },
      { type: 'hr' },
      { type: 'h2', text: '5. Solo Founders' },
      {
        type: 'p',
        parts: [
          'Solo Founders are ',
          { b: 'people running real companies alone' },
          ' - or with one or two others - by using AI to do the work that used to require a team of ten. This is genuinely new. It is a 2025 phenomenon, and it is not a vibe. There are real companies, with real revenue, run by one person and a stack of models.',
        ],
      },
      {
        type: 'p',
        text: 'How it works in practice: the founder writes the code with an AI pair (vibe coding). The customer support runs through an agent. The content gets drafted by an LLM and edited by the founder. The bookkeeping is software. The legal is templates plus a lawyer on retainer. The marketing is one person with very fast tools. What used to require a CTO, a CMO, a head of customer success, three engineers, and a content marketer is now one person and a $200/month software stack.',
      },
      {
        type: 'p',
        text: 'This does not mean every business should be solo. It means the lower bound just moved. Things that used to need ten people to be viable can now be viable with one. That changes which businesses get built, who builds them, and what the next decade of small companies looks like.',
      },
      {
        type: 'p',
        text: 'If you are managing a larger company: the people you are competing with for talent now have the option to leave and run a viable business alone. Plan accordingly.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'Why this matters if you are not a programmer' },
      {
        type: 'p',
        text: 'You do not have to know how a transformer works to use a calculator. You do not have to know how an LLM is trained to use one well. But you do need the vocabulary, because the vocabulary is how decisions get made.',
      },
      {
        type: 'p',
        text: 'When your team says "let\'s build an agent for this," you should be able to ask: which tools does it need, what is it allowed to do without a human, and how do we know when it is wrong. When a vendor says "we have a custom RAG," you should be able to ask: what data, indexed how, evaluated against what. When a candidate says "I am a solo founder," you should know what to expect.',
      },
      {
        type: 'p',
        text: 'You cannot influence what you do not understand. So understand the five words. The rest is just longer versions of these five.',
      },
      { type: 'hr' },
      { type: 'h2', text: 'FAQ' },
      {
        type: 'faq',
        q: 'Do I need to learn to code to use any of this?',
        a: 'No. You need to be able to articulate what you want and read what the AI gave you well enough to notice when it is wrong. That is a writing and judgment skill, not a coding skill. If you can brief a junior employee clearly, you can brief an AI.',
      },
      {
        type: 'faq',
        q: 'What is the practical difference between an LLM and an Agent in a product?',
        a: 'An LLM-based product answers. An agent-based product acts. ChatGPT in its plain form is the LLM - you ask, it writes. ChatGPT with "browse" or "code interpreter" turned on, doing a multi-step task in your accounts, is operating as an agent. The line is whether the system is allowed to do things in the world, not just describe them.',
      },
      {
        type: 'faq',
        q: 'Is vibe coding "real" coding?',
        a: 'It is real software development. It is not "real coding" in the sense of typing every character yourself. Both are fine. The shipped product does not care how it got written. What matters is whether it works, whether it is secure, and whether you can maintain it. Vibe coding can produce all three when the person driving it has taste and judgment.',
      },
      {
        type: 'faq',
        q: 'Why is RAG (Retrieval) such a big deal in enterprises?',
        a: 'Because enterprises have huge amounts of private data the public models were never trained on. Contracts, tickets, wikis, policies, decks. Retrieval is the architecture that lets a model answer questions using that private data without "uploading" it for training. Most useful enterprise AI you have seen in the last two years has retrieval underneath.',
      },
      {
        type: 'faq',
        q: 'Are solo founders just freelancers in a nicer hoodie?',
        a: 'No. A freelancer sells time. A solo founder sells a product or a service that runs without their time being the bottleneck. AI just made the gap between those two things much smaller. The solo founders worth paying attention to in 2025 are running businesses with real customers, real margins, and no team - not selling consulting hours under a brand name.',
      },
      {
        type: 'faq',
        q: 'What word should I learn next after these five?',
        a: '"Evals." It means: how you measure whether an AI system actually works. If a vendor cannot tell you how they evaluate their model on your problem, with a rubric and a held-out set of examples, they are selling you a demo. Evals are the boring 80% of real AI work. Learn the word, ask the question, watch what happens.',
      },
      { type: 'hr' },
      {
        type: 'callout',
        parts: [
          'Written by Michael Fleicher, Principal at ',
          { a: 'Bina Labs', href: '/about' },
          '. Two-time CTO. This is the first piece in a series I am calling "Michael Tries to Explain the New World" - plain-English explanations of AI concepts for the people who run companies, make decisions, and build things, but do not write code. If you want to talk about how any of this lands inside your team, ',
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
