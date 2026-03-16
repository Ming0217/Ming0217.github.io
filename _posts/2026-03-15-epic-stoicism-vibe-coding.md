---
layout: post
title: "Building Epic Stoicism with Vibe Coding"
date: 2026-03-15
excerpt: "How vibe coding made it possible to build and ship a personal reading app — without prior web dev experience"
project: true
tag:
- vibe coding
- AI
- reading
- personal project
- web development
feature: https://i.imgur.com/s9JZl4t.jpg 
comments: true
---

## How it started

The problem started simple: I had no good way to track my reading and notes in one place.

My highlights lived in my Kindle device or its app. My reflections on my blog. Books I'd finished were scattered across different reading apps, and any notes I'd taken were spread across whichever note-taking tool I happened to be using at the time. Every few months I'd try a new combination — a different app, a new workflow — but nothing quite fit how I actually read and think.

The frustrating part was not only the fragmentation itself. It was that no existing tool was willing and able to solve it the way I wanted. 

So I decided to build my own.

That decision would have felt impossible a few months ago. But as the foundation models getting better and better at coding, the barrier dropped enough that building a personal tool tailored exactly to my needs felt genuinely achievable. That was the starting point for **Epic Stoicism**.

After a few months of iterations, Epic Stoicism has now become an AI-powered reading productivity app that turns books, highlights, and notes into a living knowledge base. I can use LLM to interact with all the books, highlights as well as notes that I made, it truly turns the static information into something that I can continuously revisit, connect and actually use.

## Building with vibe coding

I should be upfront about something: I had very limited front-end and web development knowledge when I started this project. I had never built and deployed a web app to production before. I have lots of product and feature ideas, but building and shipping a full-stack web app to real users would have been out of reach.

Vibe coding changed that entirely.

Whenever I hit something I did not understand — an environment parameter during deployment, user authentication and authorization workflow, various caching strategies to make the app perform better — I turned to the LLM and just asked. Not just high-level questions, but granular, specific ones: *why is this failing*, *what does this error mean*, *how should I structure this*, *what am I missing*. The single biggest takeaway from this project is that you should never let any assumption about what you "should" already know stop you from asking. Most of the foundational LLMs are remarkably good at meeting you exactly where you are.

That said, I noticed something important: having a solid programming foundation made me significantly more effective at vibe coding. Not because it let me write more code myself, but because it helped me ask better questions. Knowing how to think about a problem — how to decompose it, what to be suspicious of, what tradeoffs to name — made my prompts clearer and my conversations with the LLM more productive. The foundation is not a substitute for the AI, and the AI is not a substitute for the foundation. They compound each other.

The result was a fully functioning app, deployed to production, used by people other than myself. Something I genuinely could not have shipped without vibe coding.

Another thing that surprised me was the cost: zero. With guidance from the LLM on how to set everything up, I was able to deploy the entire stack for free — Vercel for hosting, Supabase for the database, and Gemini for the LLM. All of them have generous free tiers that are more than enough to get a personal project to production. The barrier was never really money. It was knowing where to look and how to put the pieces together.

{% capture images %}
  https://i.imgur.com/XcU8pKX.jpg 
{% endcapture %}
{% include gallery images=images caption="Epic Stoicism App" cols=1 %}

## From stored notes to queryable insight

One of the things I wanted most was the ability to ask questions across my reading history in plain language.

Not just:

- which books did I finish?
- what highlights did I save?

But higher-level questions like:

- Did any of my notes mention anything about capital allocation?
- Which book talked about resilience and what are their perspectives?
- What do my notes say about predicting the future?

That is where the product starts becoming more than a reading tracker. It starts becoming a personal knowledge interface. And all the static notes/higlights that are usually sitting idle somewhere come to live.

Below is the query interface inside Epic Stoicism, where the library becomes something you can ask questions to directly:

{% capture images %}
  https://i.imgur.com/Q6AQWZi.jpg
  https://i.imgur.com/zx6ugHm.jpg
{% endcapture %}
{% include gallery images=images caption="Epic Stoicism query interface and answer from reading notes" cols=2 %}

What I like about this interaction model is that it changes the role of notes. Notes are no longer just things you archive. They become material you can interrogate, revisit, and synthesize later.

That matters because the real value of reading is not in having highlights and notes. It is in being able to retrieve and apply the right idea at the right moment.

## Building something only you would build

There is something that commercial apps will never fully solve: they are designed for everyone, which means they are optimized for no one in particular.

When a product team decides what features to build, they are making bets on what the largest slice of their users will find useful. That is a reasonable way to run a business. But it means that anything too personal, too niche, or too specific to your own workflow will not make the cut.

Vibe coding changes that. When you are building for an audience of one, you can add exactly what you need without justifying it to anyone.

A concrete example: I added a focus session to Epic Stoicism — a built-in Pomodoro timer paired with peaceful background music I can play while reading. It is not a feature that would appear on any product roadmap. But it is exactly what I wanted, and it took one conversation with the LLM to make it happen.

Another one: I built a daily Wordle game into the app, except the words are sourced from my own reading notes. So when I need a break, I can play a quick game — and the words I am guessing are ones that actually appeared in books I have read. It is playful, it is personal, and it is something no commercial reading app would ever ship.

{% capture images %}
  https://i.imgur.com/e56205f.jpg
  https://i.imgur.com/sEfqNOu.jpg
{% endcapture %}
{% include gallery images=images caption="Focus session with Pomodoro timer and Wordle game sourced from reading notes" cols=2 %}

That kind of personalization compounds. Every small addition that fits your exact habits makes the tool feel more like an extension of how you think rather than a product you adapt yourself to. The more you add, the more it becomes genuinely yours.

I think this points to something broader: as vibe coding becomes more accessible, highly individualized apps will become far more common. Not every tool needs to serve thousands of users. Some of the most useful software you will ever use might be something you built for yourself.

## What I learned

A few lessons stood out from building this:

### Reading becomes more valuable when it is queryable
A highlight or note is not that useful if it just sits somewhere forever. It becomes much more valuable when you can ask questions across them.

### AI is most useful when it increases leverage on existing knowledge
The best use of AI here is not just generating more text. It is helping you retrieve, connect, and reuse what you already know.

### Never let assumptions stop you from asking
The LLM will meet you where you are. The biggest barrier to effective vibe coding is self-censorship — assuming a question is too basic or that you should already know the answer. You don't have to. Just ask.

### The best software you will ever use might be something you build for yourself
Commercial apps optimize for the majority. Vibe coding lets you build for an audience of one — and that changes what is possible. Features that would never make a product roadmap are just one conversation away.

## Closing thought

I built Epic Stoicism because I wanted reading to compound, not just accumulate.

If you want to check it out: **[Epic Stoicism](https://epicstoicism.com)**

And you can see the books that I read and the notes that I made here: [epicstoicism.com/profile/ming](https://epicstoicism.com/profile/ming)

