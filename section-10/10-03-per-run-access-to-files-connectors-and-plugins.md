# Per-Run Access to Files, Connectors, and Plugins

Each scheduled task run has access to exactly what you've configured it to have access to. Files in authorized folders, connectors you've enabled, plugins that are installed. Understanding this access model prevents both the frustration of tasks that fail because they can't reach a resource, and the risk of tasks that have broader access than necessary.

## Why this matters

A scheduled task that fails because it can't reach a connector is frustrating but safe. A task that has access to folders or connectors it doesn't need creates unnecessary risk. Access configuration is a workflow design decision, not just a setup step.

## Folder access

Scheduled tasks can read from and write to folders you've authorized in Cowork. A task needs:
- **Read access** to any folder it reads input from
- **Write access** to any folder it deposits output into

If a task needs to read from your "Client Notes" folder and write to your "Reports" folder, both folders need to be authorized with the appropriate access levels.

A practical pattern: create an "Inputs" folder and an "Outputs" folder in your Cowork workspace. Scheduled tasks read from Inputs (or from specific project folders) and write to Outputs (or a review subfolder). This creates a clear separation between source material and generated output.

## Connector access

Scheduled tasks can use connectors you've configured in Cowork. If a task needs to read email, the email connector must be authorized. If a task needs to read your calendar, the calendar connector must be authorized.

Check connector status before setting up tasks that depend on them. A task that uses an expired connector authorization will fail silently or produce incomplete output.

## Plugin access

Installed plugins are available to scheduled tasks. If a task uses a Skill from a plugin, the plugin must be installed and active. Plugin-provided connectors must be authenticated.

## Access scoping

Configure each task with the minimum access it actually needs. A task that reads your inbox and produces a text summary doesn't need write access to your file system. A task that generates a report doesn't need your CRM connector.

Minimal access reduces the blast radius if a task misbehaves: a task that can only write to one specific folder can only cause problems in that folder.

## Try this in Claude

For the morning digest task you're building, list every resource it needs: which folders (read), which folder for output (write), which connectors, which plugins. Verify each is authorized before you schedule the task. This checklist prevents the "task ran but failed to access resources" failure mode.

## Quick summary

Scheduled tasks access exactly what you configure: authorized folders, active connectors, installed plugins. Configure each task with minimum necessary access. Verify all required resources are authorized before scheduling. A task that fails to access resources is immediately apparent; a task with excessive access creates risk you won't see until something goes wrong.
