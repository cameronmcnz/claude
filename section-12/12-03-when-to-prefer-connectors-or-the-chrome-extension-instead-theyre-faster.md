# When to Use Connectors or Chrome Extension Instead

Computer use is the capable but slow cousin in the Cowork toolkit. For every task where an alternative approach works, that alternative is better. This lesson is the decision framework for choosing correctly.

## The speed comparison

**Connector-based access:** Seconds to a minute. Direct API calls retrieve or write data without visual interface interaction.

**Chrome extension access:** Seconds to a few minutes. Browser-based, faster than computer use, slower than connectors.

**Computer use:** Minutes. Each action involves a screenshot, interpretation, and action cycle. Complex tasks with many steps can take significantly longer.

For a task that runs once manually, these differences are acceptable. For a scheduled task running daily or a Dispatch task you send when time-pressed, they matter.

## When connectors win

Use a connector whenever:
- A connector exists for the service you need
- The connector provides access to the specific data you need
- You need reliable, consistent performance at scale

Web-based services with public APIs (email, calendar, CRM, project management, cloud storage) almost all have connectors available or buildable. Before reaching for computer use for any cloud service, verify whether a connector exists.

## When the Chrome extension wins

Use the Chrome extension when:
- The service is web-based but no connector is available
- You need to interact with a web application's interface rather than just read data from it
- The data is only accessible through the web interface

The Chrome extension is more fragile than connectors (web interfaces change) but faster than computer use. It's the right choice for the middle tier of web-accessible applications without connectors.

## When computer use is actually necessary

Computer use is appropriate when:
- The application is desktop-only with no web version
- No connector exists and no Chrome extension path is viable
- The application interface is the only way to reach the data or trigger the action
- The task is worth the overhead of slower execution and greater fragility

## The decision tree

1. Is there a connector? Use it.
2. Is it web-accessible? Use the Chrome extension.
3. Can the data be extracted to a file Claude can process? Use file access.
4. If none of the above work: consider computer use.

## Try this in Claude

For the computer use candidate application you identified earlier in this section, work through the decision tree. Can a connector work? Can Chrome extension work? Can file-based access work? Only if all three are genuinely infeasible should you proceed with computer use.

## Quick summary

Connectors are fastest and most reliable. Chrome extension is second. Computer use is last. Work through the decision tree before choosing computer use: connector, then Chrome extension, then file access, then (only if nothing else works) computer use. The speed and reliability differences are real and compound when tasks run repeatedly.
