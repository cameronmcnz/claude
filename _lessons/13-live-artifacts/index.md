---
layout: section
title: "Live Artifacts — Self-Updating Dashboards & Tools"
section: 13
section_title: "Live Artifacts — Self-Updating Dashboards & Tools"
section_slug: "13-live-artifacts"
order: 0
noindex: true
---

# Section 13: Live Artifacts — Self-Updating Dashboards & Tools

Static Artifacts are useful snapshots. Live Artifacts are tools that stay current. This section covers the upgrade from "Claude made this once" to "Claude keeps this current," and the design thinking that separates a live artifact that actually gets used from one that sounds impressive but isn't.

## Why this section matters

The limitation of static Artifacts became clear in Section 6: every time the underlying data changes, the Artifact is stale. A metrics dashboard from last Tuesday isn't a dashboard; it's a record of last Tuesday. A project status page that reflects the state from when you last manually updated it isn't a status page; it's a document.

Live Artifacts solve this by connecting to real data sources: your email, your calendar, your project tools, your files. When you open a live artifact, it reads current data and renders current state. The dashboard is always now, not the last time you rebuilt it.

## What you'll learn

**Live artifacts vs. static artifacts.** The architectural difference and why it matters for which type to build.

**Connecting an artifact to MCP servers and connectors.** How live artifacts access real-time data from the tools you've already connected.

**Auto-refreshing dashboards, briefings, and reports.** The patterns that work well as live artifacts and the ones that don't.

**The Live Artifacts tab and the refresh control.** How to access, manage, and manually refresh live artifacts in Cowork.

**Pairing live artifacts with scheduled tasks.** The combination that keeps a live artifact current even before you open it.

## The mini project

You'll build a live artifact that pulls from your connectors (calendar, email, and/or notes) and displays a current personal dashboard. The deliverable is a working artifact that shows different content on two different days, proving that the live data connection is functioning.

## How to approach this section

Live artifacts are more complex to build than static ones. They require working connectors, careful prompt design, and testing against real data. Don't attempt a complex multi-source dashboard as your first live artifact. Start with one data source, verify the connection works, and add sources once the basic pattern is proven.

The section builds on everything that came before it in Cowork: connectors from Sections 4 and 9, Artifact design from Section 6, and the file access and scheduling patterns from Sections 9 and 10. It's the synthesis of the Act 2 capabilities into their most powerful combined form.
