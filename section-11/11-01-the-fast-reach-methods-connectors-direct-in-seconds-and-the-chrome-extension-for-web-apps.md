# The Fast Reach Methods: Connectors and the Chrome Extension

When a Dispatch task needs to access external data or tools, it has two main paths: direct connector access and the Chrome extension. Understanding which to use and when is the difference between tasks that run in seconds and tasks that run in minutes.

## Connectors: the fast path

Connectors provide direct API access to external services: email, calendar, CRM, project management tools. When a Dispatch task uses a connector, Claude accesses the service's API directly. There's no browser involved, no interface to navigate, no visual rendering. The data comes back immediately.

Connector-based tasks typically complete in seconds to a minute, depending on data volume. They're the right choice whenever a connector exists for the service you need to access.

**Example:** "Check my email for anything from Meridian Capital and summarize the last three messages." This uses the email connector directly. Claude queries the email API, retrieves the messages, and returns a summary. No browser required.

## The Chrome extension: for web apps

Some services don't have connectors, or have connectors that don't expose the specific data you need. For these, the Chrome extension allows Cowork to access a web app through the browser.

The Chrome extension:
- Requires the Chrome browser to be running with the extension installed
- Navigates to the target web app on your behalf
- Reads page content or interacts with the interface
- Returns data to the Cowork task

Chrome extension tasks are slower than connector tasks (seconds to several minutes) because they involve browser navigation and rendering. They're also more fragile: web app interfaces change, and a task that worked last week may need updating after the app updates.

Use connectors whenever they exist. Use the Chrome extension when they don't, understanding the additional latency and maintenance requirement.

## Choosing the right method

For any external data source, ask:
1. Is there a connector for this service? If yes, use the connector.
2. Does the connector expose the specific data I need? If no connector or the connector is insufficient, consider the Chrome extension.
3. Does the data exist in a local file I've already authorized? If yes, use file access instead of an external call.

## Try this in Claude

For the Dispatch workflow you're designing in this section's mini project, identify each external data source it needs to access. For each, determine: connector or Chrome extension? Verify that connectors are set up and authorized before relying on them in a Dispatch task.

## Quick summary

Connectors provide fast, direct API access to external services. The Chrome extension accesses web apps through the browser when connectors aren't available. Connectors are faster and more reliable; prefer them whenever they exist. Chrome extension access is slower and more maintenance-intensive. Match the access method to what's available for each data source.
