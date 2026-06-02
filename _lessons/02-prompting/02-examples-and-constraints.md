---
layout: lesson
title: "Examples and Constraints: The Fastest Way to Align Claude with What You Actually Want"
section: 2
section_title: "Prompting & Iteration"
section_slug: "02-prompting"
order: 2
noindex: true
---

# Examples and Constraints: The Fastest Way to Align Claude with What You Actually Want

Words describing what you want are useful. An actual example of what you want is better. And a clear statement of what you don't want is often the most underrated prompt element of all. Examples and constraints are not optional polish. They're the fastest route to outputs that match your expectations on the first try.

## Why this matters

Claude has seen an enormous amount of text during training. When you describe a style, a format, or a type of output, Claude picks the most common interpretation of that description. Its interpretation and yours may not match. An example removes the ambiguity. A constraint narrows the space before Claude starts generating, which is far more efficient than correcting the output after.

The practical benefit: fewer revision rounds, more usable first drafts, and prompts that consistently produce what you need even when you hand them to someone else or build them into an automated workflow.

## The idea in plain English

**Examples** show Claude what you mean. They anchor tone, length, structure, and quality in a concrete way that descriptions can't fully achieve.

You can provide examples of:
- The style or voice you want ("write in a tone similar to this excerpt")
- The structure you want ("format each entry like this sample entry")
- The quality level you want ("here's a good version and a weak version; match the good one")
- What good looks like for your specific context ("here are three subject lines we've used that performed well")

You can also use negative examples: "don't write like this" is as useful as "write like this," sometimes more.

**Constraints** tell Claude what not to do, what limits to respect, and what rules apply. They prevent Claude from making reasonable default choices that are wrong for your situation.

Common useful constraints:
- Length limits ("no more than 150 words," "fit on one slide")
- Format restrictions ("no bullet points," "no headers," "plain prose only")
- Content restrictions ("do not include pricing," "avoid mentioning competitors by name")
- Tone restrictions ("professional but not stiff," "direct, not aggressive")
- Scope limits ("focus only on the Q2 results, not full-year context")

## How this works in Claude

Include examples inline in your prompt, before or after your main request. Claude will pick up on them and apply them.

**Using a style example:**
> Write a product update email to our customers. Match the tone and length of this example: [paste example]. Constraints: no more than 200 words, no exclamation points, do not mention the previous version's bugs.

**Using a structural example:**
> Create three case study summaries using this structure: [paste one completed case study as a template]. Each summary should be 80-100 words. Do not include client names.

**Using negative examples:**
> Write a performance review summary. Avoid this kind of vague language: "John is a team player who always brings his best." Be specific about outcomes and behaviors.

## Practical example

A content team needs to produce ten LinkedIn posts for a founder's account over the month. Without examples or constraints, they'd get ten posts that are technically correct but generic in tone.

Instead, the prompt includes:
- Three examples of the founder's actual high-performing posts
- A constraint against hashtags ("we don't use them")
- A constraint on length ("100-150 words, one idea per post")
- A note on voice ("first person, direct, occasionally self-deprecating, never salesy")

The output is far closer to what the founder would actually say. Editing time drops from twenty minutes per post to three.

## Workflow design notes

Examples and constraints are especially powerful in templates and reusable prompts. When you build a recurring workflow, embedding examples in the template means every run benefits from those anchors, not just the runs where you remember to include them.

One practical note on length: very long examples can push other important context out of Claude's attention in a long prompt. Use the most illustrative excerpt rather than pasting an entire document when brevity will serve. Two clear sentences of example text are often more useful than ten paragraphs.

For automated Cowork workflows, constraints are particularly important because there's no human in the loop to catch Claude doing something technically correct but contextually wrong. Lock down the behaviors that matter with explicit constraints, and Claude's automated outputs will require less cleanup.

## Try this in Claude

Find a recent Claude output you had to significantly revise. Identify the element that was off: was it tone? Length? Structure? Format? Write a constraint that would have prevented that problem. Then rerun the prompt with that constraint added and compare the results.

Bonus: find or create a strong example of the output type you needed. Add it to the prompt as an anchor and run it again. Note how much the quality shifts with the example in place.

## Pro tips

- The best examples come from your own past work. A strong piece of writing you've already produced is worth more as an anchor than any generic description of quality.
- Constraints work better when they're specific. "Keep it concise" is not a constraint. "No more than 100 words" is.
- Don't over-constrain. If you specify every element, Claude becomes a formatter rather than a collaborator. Leave room for Claude to fill in where its judgment is actually useful.
- Negative examples are underused. If you have a clear sense of what bad looks like in your context, show Claude and say "not this."

## Quick summary

Examples anchor Claude's output to your actual expectations. Constraints prevent Claude from making default choices that are wrong for your context. Both are more efficient than revising bad output after the fact. Embed them in recurring prompt templates and automated workflows to make quality consistent rather than variable.
