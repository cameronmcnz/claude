# Connectors and Plugins Inside Cowork

The connectors and plugins you configured in Act 1 work in Cowork without re-configuration. But how they're used changes: in Chat, you invoke them interactively. In Cowork, they can be accessed by scheduled tasks and Dispatch commands without you being present. This lesson maps out what that means in practice.

## Why this matters

A connector that works well in interactive Chat use might behave differently in an automated Cowork context. The same connector that accurately retrieves your inbox when you're watching can sometimes behave unexpectedly when it runs at 6am on a schedule. Understanding how connectors work in automation contexts prevents gaps between what you expect and what happens.

## Connectors in automated workflows

When a Cowork scheduled task or Dispatch command uses a connector, it accesses the connector with the permissions you granted during setup. The connector reaches its source (email, calendar, CRM), retrieves or writes data, and returns results to Claude.

Key considerations:

**Permissions scope:** The connector uses the permissions you granted at setup time. If your email connector has read-only access, it can read but not send, even in an automated context.

**Authentication:** Connectors authenticate with their source services. If a service requires periodic re-authentication (token refresh, re-authorization), an automated task that runs when authentication has expired will fail. Check for re-authentication requirements when setting up automation.

**Rate limits:** Some services limit how often their APIs can be called. Very frequent automated tasks that use connectors may hit rate limits. Most professional workflows don't encounter this, but it's worth knowing.

**Data freshness:** Connectors pull current data when invoked. A scheduled task that runs at 7am retrieves inbox state as of 7am. If you're checking the output at 9am, it reflects 7am state, not 9am.

## Plugins in Cowork

Plugins installed in Chat are available in Cowork. Plugin Skills appear in the same slash-command interface. Plugin connectors work the same way.

One practical distinction: some Plugins are designed for interactive Chat use (respond to a query, produce output in the conversation). Others are designed for workflow use (process a document, update a record, run a standing analysis). In Cowork automation, you generally want the latter type.

When selecting Plugins for Cowork automation, check whether the Plugin documentation describes automated or workflow use cases, not just interactive Chat use.

## Try this in Claude

Open your Cowork connector settings and verify that the connectors you configured in Act 1 are visible and authorized. For any connector you plan to use in automated workflows, check: does it have the right permission scope? Does it require periodic re-authentication? This verification takes five minutes and prevents the silent failure of a workflow that can't access its data source.

## Quick summary

Act 1 connectors work in Cowork without re-configuration. In automated contexts, check permission scope, authentication status, and any rate limits. Plugins available in Chat are available in Cowork; prefer Plugins designed for workflow use in automation contexts. Verify connector authorization before building automated workflows that depend on them.
