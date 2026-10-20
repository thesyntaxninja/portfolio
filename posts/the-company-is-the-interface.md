---
title: The company is the interface
date: 2026-10-07
description: A bot in every tool is just SaaS sprawl with better models. Don't rent how your company works.
crossposts:
  - name: LinkedIn
    url: https://www.linkedin.com/pulse/company-interface-parker-esmay-zlwzc/
---

### The fleet nobody wants to manage

xAI just shipped Team Bots. Meta just shipped Muse for Small Business. OpenAI just shipped dots. The AI employee is becoming the default picture of how a business uses intelligence.

I have used most of what is out there. Grok Bot and its Team Bots. Muse. Codex. Claude Code and Claude Cowork. Hermes Agent, OpenClaw, Gemini. Every SaaS product you already pay for now ships with a copilot. Some of it is great. All of it is powerful, and I am extremely bullish on what it can do.

I still think the industry is building toward the wrong end state.

The agent is not the problem. Having to know which agent to ask is. Every vendor is selling you more of them, each with its own memory and its own idea of how your company works. Some people build one agent to manage the rest. That helps one person. The next person builds their own, and the company is back where it started. Try it. Ask your agent to build one tool that runs the same way every time and that everyone at your company can use, with the same rules and the same permissions. See how far it gets.

What is missing is one layer in front of all of them, so anyone can just ask. And most fleets come priced per seat, with everything your company teaches them living in one vendor's tools. That part is more dangerous than it sounds.

We spent twenty years scattering company functions across tabs. Then AI arrived and the answer was to put a bot in every tab. Now every tab has someone to talk to, and you still carry the context between them. We gave the fragmentation a personality.

I think we can aim higher.

### The company is the interface

What a company needs is a persistent organizational runtime. That is a layer that knows how the business works, carries that understanding forward, and runs work across the tools the company already uses, inside boundaries the company sets.

To the person asking, it is one thing to talk to. Under the hood it is not one giant agent, and it is not moving the company into one database. Subagents, specialists, small decision models, and plain deterministic tools each do the part they are best at, coordinated by the layer. GitHub stays the source of truth for code, Salesforce for customers, and some obscure internal database for the one thing that matters more than either. Specialist tools should stay specialized. The mistake is making people orchestrate any of it.

The runtime knows what exists, where truth lives, who is allowed to act, which workflows apply, what happened before, and what requires approval. Then it gets the work done. That might mean a coding agent, a SQL query, a deterministic workflow, a small local model, a temporary specialist spun up for one task and retired, or a human. The person asking should not know or care which.

It lives where work already happens. Tag it in Slack. Mention it in GitHub. CC it on an email. Different doors into the same system, with the same rules and the same accumulated experience.

Every door has the same lock. It acts as the person asking, with their permissions, never its own. A message from outside the company is something to read, not something to obey. Anything that cannot be undone waits for a person, until proven otherwise.

A request can start in Slack and pass through a database, three models, a specialist agent, and a human approval. You orchestrate none of that. You asked the company. The company figured out the rest.

Personal agents fit here too. Yours knows how you write and how you like to work. The organizational runtime knows how the company works. Your agent should operate through that layer, with your identity and permissions, following the company's rules. Bring whichever one you like.

Your personal agent should not own how the business runs. Neither should mine. People leave, vendors change, models improve. The company's experience has to outlive all of us.

### Ask it. Delegate to it. Program it.

You do not just ask it questions.

"Get me ready for Acme."

"Figure out why this customer is pissed and fix whatever we reasonably can before I call them."

"From now on, when this happens, do this, unless one of these conditions is true."

"Every Friday, tell me which of our workflows should move to a cheaper model."

"Get me ready" should mean something specific. Read the recent correspondence. Check the contract, the open issues, and the commitments we made. Work out what changed since we last spoke. Resolve what can be resolved within the agreed boundaries, and tell me what still needs my judgment.

I should arrive at the call ready to decide. I should not spend the first twenty minutes being the integration between five pieces of software.

The standing rule matters just as much. Most companies are full of work that happens only because someone remembers to check something. The runtime should watch for conditions, run the recurring workflows, chase what did not happen, and escalate the exceptions without waiting for a prompt.

Take the month-end close. It knows what has to happen, pulls from the systems of record, reconciles what it can, chases missing inputs, runs the standard checks, and prepares the package. The handful of exceptions that need judgment go to a person.

Continuous work. Bounded decisions. Exceptions to humans.

Humans should stop being the workflow engine.

### The part nobody wants to hear

Giving your team an agent is easy. Teaching it what "done" means at your company is where the work starts.

Where does customer truth live? Which Slack channel matters? Who owns this process? When the CRM disagrees with the signed contract, which one wins? What does "ready to send" mean here? Which exceptions are normal, and which should wake someone up? What did we decide six months ago, and why?

That knowledge is scattered across people, threads, docs, databases, and a thousand unwritten conventions. Humans carry most of the connective tissue in their heads. Someone has to map the workflows, encode the conventions, define the boundaries, and connect the systems. And because the company never stops changing, someone has to keep spotting what has drifted and keep it maintained.

That work is unglamorous. It is also the product. The software is only half of it.

The runtime should carry much of that maintenance itself. It should accumulate understanding through the work, from decisions, corrections, approvals, exceptions, and outcomes. A transcript records what was said. Operating experience records what was tried, what worked, what failed, and how the company chose to handle it next time.

When someone corrects it, the system should record what changed, where the correction applies, and how to check that it holds. Otherwise the company pays to explain the same lesson forever. Every workflow after the first has less to learn from scratch. That is where it starts to compound.

Investors have started calling this a record of decisions, meaning not just what happened but why. That is right, and it is not enough. A record is still passive. The layer should read its own history and propose the next change.

### How it improves without breaking anything

The runtime should also get better at operating itself, and the mechanism is not exotic. Daily or weekly, it reviews the work that passed through it. The conversations, the corrections, the exceptions, the task that took three tries. Then it proposes.

A request that keeps coming back becomes a candidate skill. A failure that repeats calls for a guardrail or a specialist. A workflow that spends frontier-model money on routine decisions gets a cheaper path. Work that comes out the same way every time stops going to a model at all and becomes a tool, which costs almost nothing to run.

Each week it also looks outward. It checks what was released, uses benchmarks to shortlist candidates, tests the promising ones against representative company tasks, reads the inference bill, and gives an estimate of which workflows are worth trying on a new model and which are not. Nobody has to keep up with the release cycle to benefit from it.

There is no prize for sending every decision to the most expensive model. Some work needs frontier intelligence. Some needs a small model. Some needs a query and a rule. The runtime should be able to tell the difference.

The building blocks underneath will keep changing. I have already watched it happen in my own build. A better component arrived and absorbed tool calling, routing, memory, and briefing work that used to take several systems, at lower cost. The architecture changed. The work the system was responsible for did not. That is exactly why the runtime has to sit above the primitives.

Every one of those is a proposal, not a change. Models get compared. Tools get evaluated. Changes get tested. Material changes follow the company's own approval rules. The system can improve its machinery without silently rewriting how the business operates underneath everyone's feet.

None of this means it is never wrong. Once in a while it will pull the wrong context, misremember a decision, or automate something that needed a person. When it does, these are the questions that matter.

Who can see what happened and why? Can you stop a workflow? What happens when something fails halfway through? Does a correction change future behavior? Does it know when it needs approval? And six months from now, can you find out who asked for something, what it did, and who said yes?

Once this layer runs meaningful parts of a business, "it usually works" is not enough. You need the organizational equivalent of regression tests. The models are probabilistic, so the wording changes from run to run. The behavior should not. A suite of real company scenarios, run whenever a model or a rule changes, checks whether it asks before sending, trusts the right source, respects permissions, and keeps last month's corrections.

Models change underneath. The company's expected behavior should not, unless the company decides to change it.

Trust in this category will be earned by how these systems handle being wrong, not by how impressive they look on day one.

### Who owns the layer

The enterprise world already sells pieces of this. Some index everything your company touches. Others govern a vendor's agents. But indexing your company is not running it, and governing agents is not knowing how your work actually gets done. They are pieces, priced per seat, on someone else's platform. The organizational layer has to span whatever the company uses, including the obscure database and the systems nobody ever built a connector for.

Think about what it eventually contains. Your customers, your workflows, your operating history, your exceptions, your approvals, your failures, and the unwritten decisions that make your company different from every other company. If all of that accumulates inside whichever AI vendor is winning this quarter, governed by their API terms, their pricing, and their definition of portable, you have put your IP in someone else's sandbox. Ask for it back and see what you get. Most will let you download your chats, and some will hand you a paragraph summarizing what they remember. None of the hosted ones hand you the working memory, the skills, and the tools your team built, in a form something else can run. That is the part that should follow your people and stay yours.

You have heard this warning before, about your CRM, and you were fine. This is different. Your CRM holds data, and data exports. This layer holds behavior. Which rule applies, which exception gets escalated, which correction stuck, who gets to approve what. Behavior does not come with a standard export. There is no CSV that reconstructs how your company works.

If your AI vendor can hold your company's institutional memory hostage, you architected it wrong.

Team Bots gets an important part right. Corrections should improve future work for the whole team, and xAI's own case study shows that happening. The next question is whether that operating experience can leave the platform. The launch does not say. What it does say is that the shared context, skills, and memory live inside their product, administered from their dashboard, under their terms. The fleet and the exit cost in one box. Muse for Small Business connects to your Slack, your CRM, and your ad accounts, learns how your brand sounds and what your customers ask, and keeps all of it in Meta's cloud. OpenAI went further at DevDay. Alongside dots, it launched ChatGPT Space and Pages, a shared workspace where your team, your files, your documents, and your dots all live inside ChatGPT. These are good products. They are the wrong place for your company to live.

That does not mean every company racks its own servers. It means the company controls the durable layer, meaning its operating rules, its accumulated experience, its permissions, and its ability to move the intelligence underneath. Exporting the chat logs and the skill files is not enough. A real exit has to carry the accumulated corrections and the tests that prove the company still behaves the same after a model swap. You should be able to change vendors without teaching your company how to be itself again.

Use whatever model, tool, or specialist is best this month. The only thing that has to last is the part that knows how your company works.

You should not have to trust anyone with this layer, including whoever builds it. It should run in your accounts, in repositories you own, and eventually on models you run yourself. Whoever builds it should hand you the keys and remove their own access. If they disappeared tomorrow, it should keep running.

Underdog just launched on exactly that bet, that today's frontier intelligence reaches the devices you already own within six months. When it does, a routine decision costs about as much as the electricity it takes to make it. The companies that own this layer when that happens will move their work onto nearly free intelligence the week it arrives. The ones renting it will be waiting on a vendor whose business depends on them never switching. A layer you own does not care whose model it runs on.

Whoever you pick, the work is the same. Someone has to sit with your people and map how the company actually runs, what counts as done, and where the guardrails go. So pick a partner the way you would pick any partner. Will they be in the room while it is mapped? Will they pick up the phone after? Will you be a priority to them or a rounding error? And can you walk away with everything if they stop being worth it?

I think this is what an AI-native company looks like, and it has less visible AI, not more. Workflows that are observable, testable, and delegated. Humans responsible for judgment and exceptions. A company that keeps operating and improving as its tools change.

What excites me is what a company could do when its people no longer carry every process in their heads. One person operating like three. Nobody spends their week on the mundane, manual work they were never hired to do. Someone leaving no longer means starting over on everything they knew. A small team takes on more without hiring a layer of people just to keep track. The owner spends the day on where the company should go, not on whether yesterday's decisions actually happened.

That is the company every owner deserves to run. It is why I am building Scriptorii.

You ask the company. The company figures out the rest.
