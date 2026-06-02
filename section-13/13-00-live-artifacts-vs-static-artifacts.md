# Live Artifacts vs. Static Artifacts

A static artifact is a rendered output that reflects data at the moment Claude generated it. A live artifact is a rendered output that fetches current data when opened. Same visual form, fundamentally different behavior. Choosing the right type for a given use case is the first design decision.

## Why this matters

Choosing the wrong type is not a minor inconvenience. A dashboard built as a static artifact requires rebuilding every time the data changes. A report built as a live artifact when the data doesn't change is unnecessarily complex. Understanding the distinction means you make the right architectural choice before investing time in building.

## What makes an artifact "live"

A live artifact contains code that, when the artifact is opened or refreshed, makes calls to data sources through Cowork's connector infrastructure. The artifact renders from the results of those calls, not from data baked in at generation time.

Technically: a live artifact's HTML or JavaScript includes calls to `window.cowork.callMcpTool()` or similar interfaces that reach out to connectors (email, calendar, files, external APIs) and return current data. The artifact renders that data each time it runs.

A static artifact contains data embedded in its code at generation time. Opening it shows the same data regardless of when it was last updated.

## When to use each type

**Use a static artifact when:**
- The content doesn't change (a decision framework, a checklist template, a one-time analysis)
- The output is for a specific moment in time (a report for a specific quarter, a proposal)
- You want a permanent record of how things looked at a specific date
- The artifact will be shared externally (live artifacts depend on Cowork; external recipients can't run them)

**Use a live artifact when:**
- You'll open this repeatedly and want current data each time
- The underlying data changes frequently (daily email, weekly metrics)
- The artifact is a personal or team tool, not an external deliverable
- Rebuilding the artifact manually to get current data would be frustrating

## The trade-off in complexity

Live artifacts are more complex to build, test, and maintain than static ones. They require working connector configurations, handling for connector errors or empty data states, and testing against real data at multiple points in time.

Static artifacts are simpler: Claude generates them once, you review them, you use them.

Don't default to live just because it sounds more impressive. Default to the type that's appropriate for how the artifact will be used.

## Practical examples

| Artifact type | Static or live? | Reason |
|---|---|---|
| Q2 performance report | Static | Specific to Q2; data doesn't change |
| Daily calendar view | Live | You want today's calendar, not Monday's |
| Decision framework template | Static | The framework itself doesn't change |
| Inbox priority tracker | Live | Your inbox changes throughout the day |
| Competitive analysis | Static | A moment-in-time document |
| Weekly team metrics dashboard | Live | Data updates weekly; you want current |

## Try this in Claude

Look at the Artifacts you produced in Section 6. For each one, ask: would I want to open this again next week and see current data, or is the value in the specific data from when I made it? Any artifact where you'd want current data is a live artifact candidate.

## Quick summary

Static artifacts embed data at generation time. Live artifacts fetch current data when opened. Use static for permanent records and external deliverables. Use live for personal and team tools you'll open repeatedly. Live artifacts are more complex to build; choose them when the recurring data freshness justifies the investment.
