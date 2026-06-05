# Scheduled Task — Sample Solution

> **How to use this file:** If you chose the Daily Morning Briefing
> option, you can adapt the prompt below to your own role. Your
> schedule, industry, and acceptance criteria will differ from this
> sample — that is expected. Use this as a reference for the *level
> of specificity* a good scheduled-task prompt needs: explicit section
> order, measurable acceptance criteria, and clear failure-handling
> rules.

## Task configuration

| Field | Value |
| --- | --- |
| Name | daily-morning-briefing |
| Description | Generate a daily briefing every morning |
| Frequency | Daily at 08:00 local time |
| Connectors required | Google Calendar, Gmail, web search |

## Prompt (with acceptance criteria inlined — Challenge 1)

```
Prepare my daily morning briefing for today. Produce a single document
with exactly these four sections, in this order:

1. Today's calendar events
   - Every event scheduled for today, with start time, duration,
     location or video link, and attendees.
   - If I have no events, say "No scheduled events today."

2. Unread email summary
   - Summarize my unread emails from the last 24 hours, grouped into
     "Urgent" (needs action today), "Important" (needs action this
     week), and "Informational" (no action needed).
   - Include at least the sender and the core request or information
     for each item.
   - Cover at least the 5 most recent unread emails.

3. Industry headlines
   - 2 to 3 headlines relevant to enterprise SaaS and AI governance.
   - One-sentence summary per headline, plus the source and date.

4. Suggested focus area
   - One paragraph recommending where to spend the first 90 minutes of
     the day, grounded in the calendar and email above.

Acceptance criteria:
- The briefing must include at least 3 calendar items or explicitly
  state that there are none.
- At least 5 emails must be summarized or the briefing must state
  that fewer than 5 unread emails exist.
- Each headline must cite a source and date.
- Total length under 400 words.

Escalation:
- If any data source is unavailable (calendar, email, or web), note
  the gap at the top of the briefing and continue with the remaining
  sections. Do not fabricate events, emails, or headlines.
- If you are unsure whether an email is urgent, err on the side of
  "Important" rather than "Urgent".
```

## Observations after first run

- Output included all four sections in order.
- Email categorization was reasonable; one "newsletter" ended up in
  "Important" and was downgraded manually — the prompt could explicitly
  exclude newsletters from "Important".
- Headlines included a source but one was dated from earlier in the
  week — tightened the prompt to require the last 24 hours.
- Total length was 380 words, within the cap.

## Prompt revision after first run

- Add: "Treat marketing newsletters and marketing blasts as
  Informational even when they mention deadlines."
- Add: "Limit headlines to items published in the last 24 hours."

## Challenge 2 — Failure Handling Table

| Failure condition | Expected behavior |
| --- | --- |
| Calendar connector returns no events or is unreachable | Output section 1 with "No scheduled events today or calendar unavailable" and note the cause at the top of the briefing. |
| Email connector fails authentication | Output section 2 with "Email summary unavailable — reauthorize connector." Do not proceed with a guess. |
| Web search returns zero relevant results | Output section 3 with "No qualifying headlines in the last 24 hours." Do not pad with older stories. |
