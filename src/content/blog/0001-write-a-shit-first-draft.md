---
title: Write a shit first draft
excerpt: Then at least you will have started writing
publishDate: '2025-04-22'
tags:
  - writing
seo:
  image:
    src: '/bee-cat.png'
    alt: Is it a bee? Or a cat? It's bumblecat!
---

Embracing the shittiness of first drafts makes it easier to start writing. Forget perfect, or even _good_. Just dump a first attempt on the page and edit it later.

I'm writing this post as a set of directives to myself, addressing specific mental blocks and obstacles that stop the files in my drafts folder from being published posts. This post is live documentation: I will continuously update it as my process evolves and I figure out new ways to write. The first published revision of this will be quite meta, describing the way this post itself has been written.

_Last edited: 22nd April 2025._

## Writing-to-think is different from writing-to-communicate

The process of writing benefits both the writer and the reader. Sometimes you're only writing for yourself, but in this case you're trying to write for other readers. Writing for yourself (writing-to-think) and writing for someone else (writing-to-communicate) are fundamentally different processes. The way you write for each should be suitable for target reader.

A challenging aspect of writing-to-communicate is that you must condense an internal web of thoughts into a linear progression of ideas. Tools such as [Obsidian](https://obsidian.md) and [Logseq](https://logseq.com) are excellent at creating **personal knowledge graphs** by capturing the links between concepts and building a personal context around ideas recorded within the graph. By offloading facts and knowledge from your brain's memory onto an external medium, PKGs let you write-to-think. Your brain only has so much bandwidth, and using it to store facts inhibits your ability to think freely. However, the writing within PKGs is in a suboptimal format for sharing ideas - which is the aim of writing-to-communicate. A unit of writing should lead your reader on a journey and protect them from unnecessary distractions.

Writing-to-communicate often ends up being a great way of organising thoughts as well. As the writer, you gain a lot from linearising a set of thoughts. Writing-to-communicate encourages you to reduce repetitions or variations of the same concept and distills the most salient features of an idea. Again, your brain can only store so much, so be efficient and precise with what you choose to keep.

## Plan breadth-first over depth-first

Depth-first drafting means diving into each rabbit hole as you think of it. However, chasing each idea to its conclusion - branching out at each level - is an unbounded process and will certainly lead you further and further away from the original purpose of your writing.

Breadth-first drafting means first establishing high-level points you want to cover before expanding on them in detail. Now you know roughly how many words you can budget to each idea. If there are particular topics you want to explore in further depth, consider **linking** to another self-contained piece of writing rather than expanding in-place.

Planning with bullet points that you will overwrite with sentences and paragraphs is a helpful technique. Bullet points can be easily deduplicated and rearranged at any point during the writing process. Once you have expanded it, moving it or restructuring the writing will be harder.

## Embrace the shittiness of the first draft. Don't break flow

Remind yourself that you can edit it later. Remember that editing words which are already on a page is much easier than putting perfect words onto a blank page.

The first draft should be a loosely structured dump of your internal thoughts onto a page. Paying attention to your thoughts is hard and deserves your focus, so don't be creative with how you write it down. Mechanically extract what you're thinking about onto a page and focus on following your train of thought.

If you are struggling to find a succinct way of phrasing an idea - or if the idea is too large to express in one comprehensible sentence - write it out in a few short sentences. Come back later to edit it. In the first draft, you should focus on dumping all your ideas onto the page. Breaking flow or interrupting your stream of consciousness runs the risk that you will forget or confuse a thought. You may find that when you reread those sentences the idea was too complex in the first place and deserved more than one sentence anyway.

Don't worry about repetition at this stage; when the same thought pops up more than once, write it down again anyway. It's not worth thinking about whether it's a truly new idea, a variation on an old one or a repetition of something you've already recorded. In fact, when rereading your first draft, identifying ideas that you've transcribed repetitively can be a good signal to focus in depth on a core concept.

## Write it poorly. Then rewrite it. Repeat as necessary

Your first draft is probably shit so you do have to rewrite it. Start by expanding on any bullet points you have littered in your document. As you rewrite it, new ideas or topics may come up. Record these as new bullet points and continue rewriting existing sections. When you are done with that, you can loop back and expand on your new ideas. This follows the principle of doing your planning and writing breadth-first, expanding iteratively on each revision without immediately following each chain of thought to its conclusion.

At each stage you want to find a balance between 1) breaking the flow of "writing well" the current idea you're expanding and 2) capturing new ideas that are inspired by your writing process. Quickly recording new ideas as a bullet point offloads it from your brain as quickly as possible and gives you the safety to focus completely on the rewrite at hand.

Don't be afraid to revisit things at a later point in time. There is no rush to complete a piece of writing in one session. You've written down the ideas you want to explore anyway, when you read your bullet points later, you will be reminded. Coming back later with a fresh perspective often helps cut down on repetitive writing too.

## Just write the code, abstract it later

I think the principle of writing imperfect first attempts also holds true for writing code.

> The junior dev asked the senior dev “why are you pushing this code with no abstraction? What if you want to change it in the future?”
> The senior dev responded “then I will change it in the future”
> In that moment the junior dev was enlightened[^1]

It's even more relevant for code because speed of delivery matters. The sooner something is out, the sooner it's actually doing something useful. Now that it's working, you have time to make it better. In fact, now that it's working, you will have a better idea of how it needs to be abstracted. It's harder to one-shot the correct abstraction than designing it once you're already aware of all the "leaks" and implementation details it needs to account for.

Sometimes, just the process of writing the first draft makes the right abstraction clear. I'd argue that more often than not, this is still a premature optimisation and you should at least wait till the second implementation is required before designing an abstraction. However, you have a chance here to pause and rewrite the code better before committing or deploying it. I'm not advocating that you _must_ write shit code, just that it's probably ok and easier to fix it up later.

[^1]: https://x.com/GrantSlatton/status/1839392370724651079
