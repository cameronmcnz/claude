# Power Features: Fork, /rewind, /recap, and /btw

Long conversations with Claude can get complicated. They drift off course. They accumulate context that's no longer relevant. They produce a response you want to explore further without committing to a direction. Claude's power features give you control over conversations as they evolve, rather than forcing you to start from scratch or live with a suboptimal thread.

## Why this matters

Most Claude users treat conversations as linear: they go forward, they can't go back, and if a conversation goes sideways they start over. The power features break that constraint. They let you branch, rewind, summarize, and annotate in ways that make long working sessions much more productive.

These aren't features you need every session. But when you need them, knowing they exist is the difference between a frustrating conversation and a controlled one.

## The four features

### Fork

Forking creates a branch from a specific point in the conversation. Claude continues from that point in a new thread, without inheriting the direction the original conversation took after that point.

**When to use it:** You've reached a useful point in the conversation and want to explore two different directions without choosing between them. You want to try a different approach to a problem without losing the version you have. You want to give someone else a copy of the conversation up to a certain point so they can continue it.

**How it works:** Look for the Fork option on any message in the conversation (typically in the message options menu). Forking from that message creates a new conversation that starts from the conversation state at that point.

### /rewind

Rewinds the conversation to a specified earlier point, removing messages that came after that point.

**When to use it:** A response took the conversation in the wrong direction and you want to go back and try a different prompt. You made an error in your prompt and the subsequent conversation is built on that error. The conversation drifted and you want to return to the last point where things were on track.

**How it works:** Type /rewind followed by identification of where you want to return to (often you can click a specific message to rewind to that point). Messages after that point are removed from the thread.

Note: rewinding removes context. If Claude produced something useful after the point you're rewinding to, copy it first.

### /recap

Generates a summary of the conversation so far: the key decisions, conclusions, context, and important points. Useful in long conversations where the thread has accumulated so much that it's hard to hold in mind.

**When to use it:** A long conversation has become hard to navigate. You're returning to a conversation after a break and want to re-orient. You want to share a summary of what you and Claude have worked through with someone who wasn't in the conversation.

**How it works:** Type /recap. Claude summarizes the conversation to that point. The recap appears in the conversation and can be used as context for the next part of the session.

### /btw

Passes a side note to Claude that Claude should consider but that is not part of the main response or conversation flow. Claude registers the information but doesn't necessarily respond to it directly.

**When to use it:** You want to give Claude a quiet context update without making it a topic of discussion. "By the way, the meeting was rescheduled to Friday" as a note to adjust Claude's context without triggering a response about the rescheduling. You want to clarify something without interrupting the main thread.

**How it works:** Type /btw followed by the note. Claude processes it as contextual information.

## Practical example

A strategy consultant is working through a complex competitive analysis in Claude. The conversation is fifty messages long and covers multiple companies and frameworks. She needs to:

1. **Branch before committing:** She's about to ask Claude to draft a recommendation section, but she wants to try both an aggressive and a conservative framing. She forks the conversation at the point before the recommendation, tries the aggressive framing in the original, and explores the conservative framing in the fork. She picks the better one.

2. **Recover from a drift:** Several messages back, Claude started analyzing a competitor that's actually outside the scope of the analysis. She rewinds to the point before that message, removing the off-scope analysis, and redirects.

3. **Manage a long thread:** After forty messages, she types /recap to get a summary of the analysis so far. She uses the recap as a brief to start a fresh conversation for the final synthesis phase, rather than carrying all forty messages of accumulated context.

Each feature addressed a different problem. Together, they kept a complex working session under control.

## Workflow design notes

Power features are particularly useful in Cowork, where conversations can be part of longer multi-step workflows. Being able to rewind, recap, and fork without starting over makes iterative work significantly more manageable.

For team use, Fork is especially valuable: a conversation that reaches a useful state can be forked and shared with colleagues who continue from that point without needing the full conversation history.

## Try this in Claude

In your next extended Claude conversation (a working session rather than a quick question), practice one of these features. When the conversation reaches a natural branch point, fork it. Or, if a response sends the conversation in the wrong direction, use /rewind instead of just sending another corrective message. Note whether the feature saved you effort compared to the alternative.

## Pro tips

- Copy valuable outputs before rewinding. Rewound messages are gone; you can't retrieve them without redoing the work.
- /recap is useful not just for long conversations but for handing off a conversation to a colleague. The recap provides the context they need to pick up without reading the full thread.
- Fork early when exploring alternatives. It's better to fork before a divergence than to try to merge two directions later.

## Quick summary

Fork, /rewind, /recap, and /btw give you control over long Claude conversations. Fork branches from a point to explore different directions. /rewind removes messages after a point and restores the conversation to that state. /recap summarizes the thread so far. /btw passes a side note without making it a conversation topic. Use them to keep working sessions productive rather than losing control as conversations grow long.
