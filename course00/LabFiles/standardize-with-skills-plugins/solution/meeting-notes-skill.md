# Meeting Notes Skill — Sample Solution

> **How to use this file:** If you chose the Meeting Notes option in
> the Core Lab, you can paste the "Skill instructions" below directly
> into *Customize > Create new skills* to get a working baseline. The
> two sample inputs and their expected outputs let you verify that
> your skill is behaving the way you want. Use the unskilled
> comparison prompt to see the difference the skill actually makes.
> If you chose a different skill topic (email, document review), use
> this file as a template for the level of specificity your own skill
> instructions need.

## Skill name

`meeting-notes`

## Skill instructions (paste into the skill body)

```
Transform the provided raw meeting notes into a structured, one-page
meeting summary. Always include these sections in this order:

1. Attendees — names listed on the first line.
2. Decisions — bulleted list of concrete decisions made during the
   meeting. If no decisions were made, state "No decisions recorded."
3. Action items — table with columns: Owner, Action, Due date. If a
   due date was not given, write "TBD."
4. Follow-up topics — bulleted list of items raised but not resolved.
   Omit the section if there are no follow-ups.

Tone and style:
- Professional, third person. No first-person statements.
- American English. No emojis. No exclamation points.
- Assume the reader was not at the meeting.

Length:
- Total output must fit on one printed page. If the notes are long,
  trim the Decisions section to the most impactful items.

Accuracy:
- Never invent attendees, dates, owners, or decisions. If something
  was unclear in the raw notes, include "[unclear]" next to that
  item rather than guessing.
```

## Sample input 1 — rough meeting notes

```
Q4 planning sync — 10/14
Present: Priya, Dev, Sam, Jules, Chris

- Argued about roadmap order. Decided to do RBAC before billing
  refactor because compliance is asking about it.
- Sam brought up the admin UI backlog. Jules said platform team
  won't pick it up until after the Terraform refactor.
- Dev needs a call with legal about audit-log retention wording —
  he'll set that up this week.
- Someone mentioned the incident retro hasn't shipped. Action?
- Chris will circulate the revised roadmap deck on Friday.
```

### Expected output for input 1

```
Attendees: Priya, Dev, Sam, Jules, Chris

Decisions
- RBAC work will be prioritized ahead of the billing refactor,
  driven by an open compliance request.
- The admin UI backlog stays unowned by the platform team until
  the Terraform refactor is complete.

Action items
| Owner | Action | Due |
| --- | --- | --- |
| Dev | Schedule a call with Legal re: audit-log retention wording | This week |
| Chris | Circulate the revised roadmap deck | Friday |
| [unclear] | Ship the incident retro | TBD |

Follow-up topics
- Timing of the admin UI backlog relative to the Terraform refactor.
- Ownership of the outstanding incident retro.
```

## Sample input 2 — different meeting, same skill

```
Vendor review — 10/21
Attending: Priya, Chris, plus the vendor rep (Alex from Northbridge).

- Northbridge wants a 3-year commit for the enterprise tier.
- We don't want to sign a 3-year without a termination-for-
  convenience clause.
- Priya pushed back on their SLO language — they offered 99.5, we
  need 99.9 for our customer-facing tier.
- Agreed: they'll send a redline by Wednesday; we review Thursday.
```

### Expected output for input 2

```
Attendees: Priya, Chris, Alex (Northbridge)

Decisions
- We will not sign a three-year commit without a termination-for-
  convenience clause.
- SLO target for our customer-facing tier remains 99.9, not the
  99.5 proposed by Northbridge.

Action items
| Owner | Action | Due |
| --- | --- | --- |
| Alex (Northbridge) | Send revised contract redline | Wednesday |
| Priya / Chris | Review Northbridge redline | Thursday |
```

## Unskilled comparison prompt

Use this to demonstrate the difference. Send the same raw notes with
this prompt *without* applying the skill:

```
Summarize these meeting notes.
```

A typical unskilled response will include a prose paragraph, an
implicit attendee list, and action items scattered in the body rather
than in a table. Specifically:

- No consistent section order run-to-run.
- Owners and due dates sometimes inlined in prose instead of a table.
- No "[unclear]" marker — the model fills in a guess.

That delta is the value the skill captures. The skill version is
consistent across runs and reviewable at a glance.

## Challenge 1 — Extended skill (optional)

Add this line to the skill instructions *above* the Attendees step:

```
0. Begin with a two-sentence executive summary of what the meeting
   was about and what it changed. Label it "Summary:".
```

This makes the deliverable scannable for people who won't read past
the first paragraph (which, realistically, is most of them).

## Challenge 2 — Versioning convention

| Version name | Change type | When to use |
| --- | --- | --- |
| `meeting-notes-v1` | Baseline | Current default |
| `meeting-notes-v2` | Minor — add Summary line | Promote to default after one week of dogfooding |
| `meeting-notes-v2-legal` | Major — variant for legal meetings (privileged language handling) | Only when labeled "Legal review" in the raw notes |
| `meeting-notes-hotfix-2026-04` | Urgent — fixes a regression in action-item table formatting | Default until merged back into the main version |

Rollout plan:

1. Author a new version under a versioned name.
2. Run 5 real meetings through both the new and old versions; compare.
3. Share the new version with the team for a one-week dogfood period.
4. Promote to default; keep previous version available for 30 days.
