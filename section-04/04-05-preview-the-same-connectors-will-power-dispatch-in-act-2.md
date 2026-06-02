# Preview: How These Connectors Scale Into Cowork

The email and calendar connectors you've set up in this section don't stop being useful when you move to Cowork. They become the engine for the more powerful workflows in Act 2. This lesson gives you a brief map of where you're going, so the patterns you're building now are recognizable when they show up later in a larger context.

## Why this matters

One of the common confusions for people moving from Chat to Cowork is thinking of them as completely different tools. They're not. Cowork is Chat with additional capabilities: file system access, scheduled tasks, Dispatch (remote triggering from your phone), and computer use. The connectors are the same. The underlying Claude model is the same. The difference is scope and autonomy.

Understanding that continuity means the investment you make in configuring and using connectors now pays dividends in Act 2 without starting over.

## The Chat connector workflow

In Chat, the connector workflow is interactive and manual:

1. You ask Claude to search, summarize, or analyze
2. Claude uses the connector to retrieve the relevant data
3. Claude returns the result in the chat
4. You act on it (review, reply, schedule, delegate)

This is useful and significantly faster than doing the same tasks manually. But it requires you to be present for each step.

## How the same connectors work in Dispatch

Dispatch (covered fully in Section 11) is how you trigger Cowork tasks from your phone while your desktop runs them in the background. The email and calendar connectors you configured here are exactly what Dispatch reaches for when you send a task from mobile.

A Dispatch task like: "Review my inbox, summarize the three most urgent threads, draft replies for any that just need a confirmation, and leave the drafts ready for me to review when I'm back at my desk" uses:

- Your email connector (to read the inbox and threads)
- Claude's drafting capability (to produce the reply drafts)
- Your file system (to save the drafts if needed)

You sent that instruction from your phone in thirty seconds. Claude executed it on your desktop while you were in a meeting. You came back and the drafts were waiting.

## How connectors power scheduled tasks

Scheduled tasks (Section 10) run on a timer without any input from you. A daily morning briefing task that summarizes your email, checks your calendar for the day, and surfaces anything time-sensitive runs every morning at 7am because you set it up once. The connector access it needs is the same email and calendar access you authorized in this section.

## The connector ecosystem beyond email and calendar

Email and calendar are the starting point, but the connector ecosystem extends further. Depending on your work, useful connectors might include:

- Slack or Teams (for communication context and messaging)
- Google Drive or OneDrive (for document access and creation)
- CRM tools like Salesforce or HubSpot (for customer and deal data)
- Project management tools like Asana, Linear, or Jira
- Analytics tools for data retrieval
- Web search for current information

Each connector extends what Claude can see and act on. The principle is always the same: Claude reasons over whatever is in its context, and connectors expand what that context can include.

## What this means for setup decisions now

The connectors you configure, and the permissions you grant, persist into Cowork. A few things worth thinking about now:

**Scope of access:** Grant the access you'll actually use. Broad access to every inbox, every calendar, every drive creates a larger surface area to manage. Start with the tools you use every day and expand deliberately.

**Read vs. write permissions:** Read access lets Claude see; write access lets Claude act. Write-enabled connectors (creating calendar events, sending emails, creating documents) are more powerful and require more care. Start with read, add write when you have a specific workflow that needs it and you trust your review process.

**Testing the workflow before automating it:** The interactive Chat workflow is a useful proving ground before you automate it. If the email summarization doesn't work reliably in manual Chat sessions, it won't work reliably in a scheduled automation either. Get the workflow right interactively first, then automate it.

## Try this in Claude

Think about one task you do manually every day that involves email or calendar and that follows a consistent pattern. Draft the Cowork instruction you would eventually give for that task. You don't need to set it up yet; just write the instruction clearly enough that you could hand it to someone else and they'd know what to do. This is the prompt you'll use when you set up your first scheduled automation in Section 10.

## Quick summary

The email and calendar connectors from this section are the same connectors that power Dispatch, scheduled tasks, and automated workflows in Act 2. The investment in setting them up and learning to use them interactively in Chat compounds when those connectors are accessed autonomously in Cowork. Start with read access, prove out the workflows manually before automating, and think ahead to which recurring tasks you'd eventually like to run without being present.
