---
layout: lesson
title: "Daily Digest and Weekly Report Patterns"
section: 10
section_title: "Automation — Scheduled & Recurring Tasks"
section_slug: "10-automation"
order: 5
noindex: true
---

# Daily Digest and Weekly Report Patterns

Two automation patterns consistently deliver the most value to professionals managing significant information volume. This lesson gives you the templates for both.

## The daily digest

A daily digest is a morning briefing: a summary of what's in your inbox, what's on your calendar, and what needs your attention today. It runs on a schedule and produces a file waiting for you when you start work.

**What it typically includes:**
- High-priority email summary (flagged, unread, from key contacts)
- Today's calendar in brief
- Any items pending more than a defined number of days
- Any time-sensitive items in monitored folders

**Sample task prompt:**
```
Morning digest task. Run every weekday at 7:00am.

Access: email connector (read), calendar connector (read), [output folder] (write)

Task:
1. Read my inbox. Identify emails that arrived since yesterday 7am that are: (a) unread from my key contacts [list or define], (b) flagged, or (c) appear time-sensitive based on subject. Summarize each in one sentence.

2. Read today's calendar. List all events with: time, title, and any relevant notes.

3. Identify anything in my inbox where someone is waiting for a reply I haven't sent in more than 3 days.

4. Write the output to [output folder]/daily-digest-[date].md with sections: Email Priorities, Today's Calendar, Pending Replies.

If there are no items in a category, note "Nothing to report" for that section.
```

**Output pattern:** A dated markdown file in a review folder. You open it when you start work. You scan it, act on what needs action, and move on. The file is your starting context for the day.

## The weekly report

A weekly report synthesizes a defined period into a standing document: what happened, what's pending, what's coming. It runs on a consistent schedule and produces output ready for your weekly review.

**What it typically includes:**
- Summary of significant activity in monitored areas
- Status of ongoing projects based on folder contents
- Calendar review: meetings completed, outcomes if noted
- Looking ahead: next week's key commitments

**Sample task prompt:**
```
Weekly report task. Run every Friday at 4:00pm.

Access: email connector (read), calendar connector (read), [project folders] (read), [output folder] (write)

Task:
1. Summarize email activity from this week: key threads completed, significant decisions made, items still unresolved.

2. Review my calendar for this week: key meetings, any notable outcomes mentioned in meeting notes files.

3. Check [project folders] for any files modified this week and note what changed.

4. Review next week's calendar for significant commitments I should be prepared for.

5. Write the output to [output folder]/weekly-report-[date].md with sections: This Week Summary, Ongoing Projects, Looking Ahead.
```

## Tailoring to your workflow

These templates are starting points. The right digest for a VP of Sales looks different from the right digest for a research analyst. Adjust the data sources, the summary format, and the output structure to match how you actually work.

The most important variable: what would make you more effective at the start of each day or week? Design toward that.

## Try this in Claude

Build the morning digest template for your work. Use the sample above as a starting point and adapt it: what connectors do you have? What information is most valuable to you first thing? What do you wish you knew every morning that you currently have to spend time finding? Write the prompt, run it manually, and evaluate the output before scheduling.

## Quick summary

Daily digests and weekly reports are the two most consistently valuable automation patterns for knowledge workers. Daily digests synthesize inbox, calendar, and pending items into a morning briefing. Weekly reports synthesize the week's activity and look ahead. Start with the templates and adapt to your specific sources and needs. Run manually first, then schedule.
