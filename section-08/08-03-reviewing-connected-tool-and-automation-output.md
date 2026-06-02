# Reviewing Connected-Tool and Automation Output

When Claude reads your email and summarizes it, the situation is different from when Claude writes an essay from training data. The data it's working with is real and current. But Claude's interpretation, organization, and conclusions about that data still involve the same generative process. The review you need is different in character, not in importance.

## Why this matters

A common mistake when deploying connected-tool workflows: people review Claude's analysis of their real data less carefully than they review its free-form writing, because "Claude is reading my actual calendar so it must be right." This confuses data accuracy with analytical accuracy. The data might be real; the interpretation might still be wrong.

Understanding the specific failure modes of connected-tool output prevents the category of mistake that comes from trusting the pipeline more than the output.

## Three types of connected-tool output

**Retrieval output:** Claude searched or retrieved information from a connected source and is presenting it. Example: "You have three emails awaiting a response from last week."

**Analytical output:** Claude has read real data and drawn conclusions from it. Example: "Your meeting load has increased 40% over the past month, concentrated on Wednesday afternoons."

**Action output:** Claude has taken an action using a connected tool. Example: "I've drafted a reply to Sarah Chen's email and scheduled it for 9am." (With write-enabled connectors.)

Each type requires different review.

## Reviewing retrieval output

**Check completeness, not just content.** If Claude searched your email and found three pending replies, ask: are there more? A connector might miss messages in certain folders, messages that arrived after the search window, or messages that match the criteria but aren't labeled in the expected way.

**Verify against the source for high-stakes retrieval.** If Claude says "your next open calendar slot is Thursday at 2pm," glance at your actual calendar. Connector queries can have edge cases in how they handle time zones, recurring events, or recently updated items.

**Be skeptical of negatives.** "There are no emails about X in your inbox" is hard to verify. It may be true; it may mean the search didn't surface them. For important retrieval, consider doing the search yourself as well.

## Reviewing analytical output

**Check the reasoning, not just the conclusion.** If Claude analyzes your calendar data and concludes that your most productive days are Fridays, ask why. Does the underlying data actually support that conclusion? Is it measuring the right things?

**Watch for interpretation bias.** Claude may apply a frame to your data that seems reasonable but doesn't match your actual situation. "Your email response time averages 4 hours" might be accurate, but if it's counting emails you intentionally ignore, the interpretation is off.

**Ask what data was excluded.** Analytical conclusions depend on what's in the data set and what's not. "Emails about X increased 20% this month" might be accurate if you count all emails, but misleading if you count only external emails. Asking Claude to describe the data set it used prevents misleading conclusions.

## Reviewing action output

Action output (covered more in Section 12, Computer Use) requires the most careful review because the action has already happened or is about to happen.

**For write-enabled connector actions:** Claude might draft and queue an email, create a calendar event, or update a document. Review before confirming. A "confirm before acting" discipline, where Claude drafts but you send, is the right posture for most people until they have very high confidence in a specific workflow.

**For actions that affect others:** Anything that sends a communication, creates an external record, or modifies shared resources requires review. Errors in these actions have external consequences.

**For irreversible actions:** Some actions can't be undone. Deleting records, sending external communications, making financial transactions. These should have a hard review gate.

## Practical example

A manager sets up a Cowork automation that reviews her inbox every morning and summarizes urgent emails needing a response. After a week, she notices the summary consistently misses emails from her most important client because they come in with a subject line she doesn't recognize as the client.

The automation's retrieval is accurate for the emails it finds. It has a completeness problem: a structural gap in how the connector identifies "urgent." She adds the client's email domain as an additional criterion. The gap is caught not because the automation output was obviously wrong, but because she was consistently checking the actual inbox against the summary.

That checking habit is the review mechanism for retrieval output. Once she trusts the pattern, she can relax it. Until then, she maintains it.

## Try this in Claude

Set up a simple connected-tool query (email search, calendar review) and compare the result against the source directly. Find one item the retrieval missed or one conclusion the analysis drew that you'd characterize differently. Understanding the failure mode of your specific connector setup is more useful than theoretical knowledge of what can go wrong.

## Pro tips

- For automated summaries (morning digest, weekly report), spot-check them against the source regularly for the first few weeks. This builds confidence in the workflow and catches systematic gaps before you stop checking.
- Ask Claude to describe its data set before presenting analysis: "What data did you use to reach this conclusion?" This forces transparency about scope and helps you catch exclusions.
- Establish a "confirm before acting" rule for any write-enabled connector, especially early in a new workflow's life.

## Quick summary

Connected-tool output has real data underneath, but Claude's interpretation and conclusions still require review. Retrieval output needs completeness checks. Analytical output needs reasoning checks. Action output needs a gate before confirmation, especially for irreversible actions. The review character changes (you're checking interpretation rather than fabrication), but the discipline of checking remains essential.
