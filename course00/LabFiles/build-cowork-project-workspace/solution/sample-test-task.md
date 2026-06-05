# Sample Test Task

> **How to use this file:** Use this prompt to run the first test task
> in the Core Lab if you chose the Weekly Team Status Report option.
> After Cowork finishes, compare its output to the "What a well-formed
> output should include" list at the bottom of this file. Anything
> missing points to an instruction you may want to tighten in your
> project setup.

---

## Prompt

Create this week's status report using the project's template and
instructions. Use the following updates from the team:

- Priya: Finished the RCA on last week's partial outage; action items
  assigned. Working with SRE to close the last SLO gap on the ingest
  pipeline.
- Dev: Shipped the billing RBAC change behind a feature flag. Rolling
  out to 10% next week. Blocked on legal review of audit-log retention
  wording.
- Sam: UI refresh of the admin console landed in staging. Needs product
  sign-off before Monday.
- Jules: Terraform refactor halfway done; PR up, CI green. Target
  merge: next Wednesday.
- Chris: No update submitted this week.

Treat the legal-review blocker as leadership-action-required. Keep the
total to one page.

---

## What a well-formed output should include

Use this list to self-check Cowork's output:

- A "Blockers" section at the top that calls out Dev's legal-review
  dependency.
- "Shipped this week" covering the RCA closeout, the RBAC change behind
  a flag, and the admin UI refresh landing in staging.
- "In progress" with Jules's Terraform refactor and the RBAC rollout.
- "Next week" at minimum mentioning the 10% RBAC rollout and the
  planned Terraform merge.
- An action items table populated from the RCA and rollout work.
- "No update submitted this week" for Chris, verbatim.
- No invented numbers or names; no emojis; first names only.
