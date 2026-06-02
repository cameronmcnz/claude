# Teaser: From Static Artifacts to Live Ones

Every Artifact you've produced in this section is static. It displays what it displayed when Claude made it. If the underlying data changes, the Artifact doesn't. That's fine for most of what Chat is used for. But it's a real limitation for dashboards, briefings, and any output you'd want to keep current without rebuilding it each time.

Section 13 removes that limitation. This lesson is a brief look ahead at what becomes possible.

## The static Artifact constraint

An HTML chart of your Q3 metrics shows Q3 metrics. To see Q4, you rebuild the chart. An HTML dashboard showing your open tasks lists the tasks that existed when Claude generated it. To see new tasks, you rebuild the dashboard.

For one-time views, this is fine. For recurring views, this creates a maintenance problem: you're not checking a dashboard, you're rebuilding one every time you want to look at it.

## What live Artifacts add

Live Artifacts (covered fully in Section 13) connect to real data sources: your email connector, your calendar, your project management tools, external APIs, anything Claude can reach through connectors. The Artifact renders from that live data each time it's opened, rather than from data baked in at creation time.

The result: a dashboard you create once and check repeatedly. A morning briefing page that always shows today's context, not last week's. A project status view that reflects the current state of your tasks without requiring you to generate a new one.

## The Cowork context

Live Artifacts are a Cowork feature, not a Chat feature. They require:
- Connectors that provide access to real-time data
- The Cowork environment where live data access is supported
- The desktop app running so the connectors can reach their sources

In Chat, Artifacts are rendered at generation time. In Cowork, live Artifacts can pull current data when opened.

## What this means for your workflow design

Think about the Artifacts you've produced in this section. Are any of them things you'd want to check regularly rather than just once? A recurring report format. A status overview. A team-facing briefing.

Those are candidates for live Artifacts in Cowork. You're not throwing away the work you did building them here; you're building the understanding of what a good Artifact looks like before you make it live and connected.

## A preview of Section 13

In Section 13, you'll:
- Learn the difference between static and live Artifact architecture
- Connect an Artifact to a data source (your calendar, your email, a project tool)
- Build a dashboard that refreshes when you open it
- Pair a live Artifact with a scheduled task so it's always current even before you look at it

The skills you're building in this section, how to structure clear, useful Artifacts, how to review and refine them, how to describe what you want precisely enough to get a useful first draft, all carry forward into live Artifact work.

## Try this in Claude (forward-looking exercise)

Look at the Artifacts you've produced in this section. For each one, ask: if I wanted to see a current version of this weekly or daily, what data source would it need to connect to? Make a brief note for each one.

When you reach Section 13, those notes become your starting point for live Artifact design.

## Quick summary

Static Artifacts display data as of when they were generated. Live Artifacts (a Cowork feature) connect to real data sources and display current information when opened. The Artifact design and review skills you're building in this section are the foundation for live Artifact work in Section 13. For recurring views and dashboards, live Artifacts eliminate the rebuild-every-time maintenance cost of static outputs.
