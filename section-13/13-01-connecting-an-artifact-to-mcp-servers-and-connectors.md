# Connecting an Artifact to MCP Servers and Connectors

A live artifact's data comes from connectors accessed through Cowork's MCP (Model Context Protocol) infrastructure. Building a live artifact means writing an artifact that makes connector calls at render time. This lesson covers how that connection works in practice.

## Why this matters

The mechanism of the connection is what you need to understand to design live artifacts that work reliably. A live artifact that can't reach its data source returns empty or broken content. Understanding the connection model helps you design for reliability.

## How the connection works

Live artifacts in Cowork can use a global function `window.cowork.callMcpTool(toolName, args)` to call connector tools. When the artifact runs, this function reaches out to the Cowork environment, which routes the request to the appropriate connector, retrieves the data, and returns it to the artifact.

The artifact then renders that data: formats it, displays it, and presents it to you in whatever visual form the artifact uses.

The practical flow:
1. You open the live artifact
2. The artifact's JavaScript calls `window.cowork.callMcpTool()` with specific tool names and parameters
3. Cowork calls the connector API
4. The connector returns current data
5. The artifact renders the data

## Available connector tools

The tool names available depend on which connectors you have configured. Common examples:
- Email connectors expose tools for inbox retrieval, thread reading, search
- Calendar connectors expose tools for event listing, availability checking
- File connectors expose tools for file reading and listing
- Project management connectors expose tools for task and project retrieval

When building a live artifact, you need to know which tool names are available from your configured connectors. Claude knows these when it builds the artifact within your Cowork environment.

## Design for data failure

Connectors can fail: authentication expires, the service is temporarily unavailable, the query returns no results. Well-designed live artifacts handle these cases gracefully:

- Show a "data unavailable" message rather than a broken interface
- Show the last successful data with a timestamp if real-time data is unavailable
- For empty results, show "nothing to display" rather than blank sections

Ask Claude to include error handling when it builds your live artifact. A live artifact that shows "Calendar connector unavailable, please check your connection" is much more usable than one that shows a blank calendar or an uncaught JavaScript error.

## Also available: askClaude

Live artifacts can also call `window.cowork.askClaude(prompt, data)` to run lightweight AI inference on the data they've retrieved. This is useful for: summarizing a set of emails before displaying them, classifying items, generating a brief interpretation of the data.

This adds a second layer to the artifact: data retrieval from connectors, then light AI processing of that data, then display.

## Try this in Claude

Ask Claude to build a simple live artifact that uses one connector: "Build a live artifact that shows my next three calendar events, updating each time I open it. Use the calendar connector. If the connector is unavailable, show an error message." Review the code it generates. Look for the `callMcpTool` calls. Verify the error handling is present.

## Quick summary

Live artifacts connect to connectors through `window.cowork.callMcpTool()`. When the artifact opens, it calls the connector, gets current data, and renders it. Design for failure: handle connector errors, empty results, and authentication issues gracefully. The `askClaude` function is available for light AI processing of retrieved data before display.
