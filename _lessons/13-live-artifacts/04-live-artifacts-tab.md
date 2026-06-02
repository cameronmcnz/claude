---
layout: lesson
title: "The Live Artifacts Tab and the Refresh Control"
section: 13
section_title: "Live Artifacts — Self-Updating Dashboards & Tools"
section_slug: "13-live-artifacts"
order: 4
noindex: true
---

# The Live Artifacts Tab and the Refresh Control

Live artifacts are accessed through the Live Artifacts tab in Cowork. Unlike static artifacts that live in conversation history, live artifacts have a dedicated management surface. The refresh control lets you manually trigger a data reload without waiting for an automatic update.

## Why this matters

Knowing where to find your live artifacts and how to manage them is practical housekeeping. The Live Artifacts tab is also where you see which artifacts are current, which have stale data, and which have connection problems.

## The Live Artifacts tab

The Live Artifacts tab (in the Cowork sidebar or main navigation, depending on the interface version) shows all your configured live artifacts. Each artifact appears with:
- Its name and description
- Last refresh time (when data was last fetched)
- Status indicator (current, stale, error)
- Open and refresh controls

Opening an artifact from this tab loads it with a fresh data fetch. Opening it from a conversation history entry may load a cached version; use the tab for the current view.

## The refresh control

Each live artifact has a refresh button. Pressing it triggers a new round of connector calls and re-renders the artifact with the latest data.

When to use manual refresh:
- You've just taken an action (replied to an email, added a calendar event) and want to see the updated state
- The artifact's automatic refresh interval hasn't triggered yet but you need current data
- The artifact shows a stale data warning and you want to update it

The view header in a live artifact also includes a refresh button, so you don't need to return to the tab to refresh.

## Managing live artifacts

From the Live Artifacts tab you can:
- Rename artifacts (give them more descriptive names than the auto-generated ones)
- Delete artifacts you no longer use
- View the artifact's underlying code (for debugging)
- Duplicate an artifact to create a variant

Build a habit of reviewing your live artifacts list periodically. Artifacts you're not using accumulate like unused bookmarks: they don't cause problems, but they add clutter and make finding the useful ones harder.

## Caching behavior

Live artifacts may cache their last data set so they display something immediately while fetching current data in the background. This prevents the "blank screen while loading" experience. The cache shows the last successful fetch; the fresh data replaces it once loaded.

If you see data that looks stale, check the "last refreshed" timestamp before assuming the connector is broken.

## Try this in Claude

After building your first live artifact, find it in the Live Artifacts tab. Note the last refresh time. Press the refresh button and observe whether the data updates. If you have a connector that reflects real-time data (email or calendar), make a change (add a calendar event, receive an email) and refresh to verify the artifact reflects the new state.

## Quick summary

Live artifacts are managed through the Live Artifacts tab, which shows status, refresh time, and controls. The refresh button triggers a new data fetch when you need current data before automatic refresh. Manage the list actively: delete unused artifacts, name them clearly. Cache behavior means you see data immediately while fresh data loads in the background.
