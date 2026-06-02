# Writing a Complete Upfront Prompt for Dispatch

A Dispatch prompt is not a conversation opener. It's a complete instruction set that Claude executes without any back-and-forth. The quality of what comes back is directly proportional to how complete and clear the prompt is when you send it from your phone.

## Why this matters

The difference between a Dispatch task that does exactly what you needed and one that does something adjacent to what you needed is almost always in the prompt completeness. Prompts written on a phone, quickly, between meetings, tend to be short and vague. The context you're holding in your head doesn't make it into the message. Claude doesn't have that context.

## The three elements of a complete Dispatch prompt

**What to read (inputs):** Every source Claude should access. Be specific about which folders, which connectors, what time window.
- "Read all files in my Client X project folder modified in the last 7 days"
- "Check my calendar for the next 48 hours"
- "Search my email for messages with 'invoice' in the subject received this week"

**Where to look (scope):** Any constraints on scope or focus.
- "Focus on the meeting notes files, not the proposal drafts"
- "Only consider emails from external senders, not internal team messages"
- "Specifically look at the risk sections of each document"

**What format to return (output):** What the finished output should look like and where it should go.
- "Write a one-page summary to /Cowork Outputs/client-x-summary-[today's date].md"
- "Respond in this conversation with a bulleted list, no more than 10 items"
- "Create a draft email and put it in /Drafts/ready-to-send.md"

## Template for Dispatch prompts

Before you're in the situation of typing from your phone under time pressure, draft Dispatch prompt templates for your common use cases. Keep them in a note where you can copy-paste with minimal editing.

**Template structure:**
```
Read: [specific sources]
Focus on: [scope constraints]
Produce: [output description]
Put output: [destination]
If nothing found: [edge case handling]
```

## Practical example

Vague Dispatch message (produces mediocre output):
> "Check the client folder and give me a summary"

Complete Dispatch message (produces useful output):
> "Read all files in /Client Projects/Hartwell Technologies/ modified in the last 14 days. Focus on meeting notes and status updates, not the background research documents. Write a 200-word status summary covering: what's been completed, what's in progress, and any open questions. Save to /Cowork Outputs/hartwell-status-[date].md."

The second message takes about thirty seconds longer to type (or can be templated). The output is directly usable.

## Try this in Claude

Write three Dispatch prompt templates for the Dispatch tasks you're most likely to use. Save them somewhere accessible from your phone. The next time you need to send a Dispatch task, you'll copy the template and modify the variables rather than drafting from scratch.

## Quick summary

Dispatch prompts need to be complete before you send them: what to read, what scope to apply, and what output to produce and where. Templates prepared in advance make complete prompts practical to send from a phone under time pressure. Vague prompts produce adjacent-but-not-quite outputs; complete prompts produce directly usable results.
