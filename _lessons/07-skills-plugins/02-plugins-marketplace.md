---
layout: lesson
title: "Plugins: Installing a Complete Workflow in One Step"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
order: 2
noindex: true
---

# Plugins: Installing a Complete Workflow in One Step

A Skill teaches Claude one behavior. A Plugin installs a complete workflow: a set of Skills, a connector or two, and the reference knowledge Claude needs to use them together. Where a Skill is a recipe card, a Plugin is a fully stocked kitchen with the recipe included.

## Why this matters

Setting up a sophisticated Claude workflow from scratch takes time: identifying the right connectors, configuring permissions, writing Skills, testing everything together. For common professional workflows, someone has already done that work. The Plugin marketplace is where you find and install those pre-built, tested workflows.

For teams, Plugins also solve the alignment problem: everyone installs the same Plugin and gets the same capabilities and the same baseline behavior, rather than each person building their own approximate version of the same workflow.

## The idea in plain English

A Plugin is a bundle that can contain:

**Skills:** Pre-written instruction sets for specific tasks within the domain the Plugin covers. A legal review Plugin might include Skills for contract review, risk identification, and clause extraction.

**Connectors:** Authorized connections to specific tools or data sources the Plugin needs. A project management Plugin might connect to Asana or Linear. A sales Plugin might connect to Salesforce.

**Knowledge:** Reference documents and context built into the Plugin. A financial analysis Plugin might include relevant frameworks, formulas, and industry benchmarks that Claude uses automatically when the Plugin is active.

**Instructions:** Standing guidance that applies whenever the Plugin is active, shaping how Claude approaches work in this domain.

You install a Plugin in a few clicks. Claude gains all the associated capabilities without you having to configure each element separately.

## The Plugin marketplace

The Plugin marketplace is where you browse and install Plugins. Plugins come from:
- Anthropic (official Anthropic-developed Plugins for common workflows)
- Third-party developers (Plugins built by tool vendors, agencies, or independent developers)
- Your organization (custom Plugins built for internal workflows)

When browsing the marketplace, each Plugin shows you what it includes (Skills, connectors, knowledge), what permissions it requires, and who built it.

Before installing a Plugin, check:
- What permissions it requests: does it need access to your email? Your file system? Be sure the permission scope is appropriate for what the Plugin does.
- Who made it: Anthropic Plugins and established vendor Plugins have different trust levels than anonymous third-party Plugins.
- What problem it solves: does your workflow actually need this, or is it impressive-seeming without being useful for your specific work?

## How this works in Claude

In the Claude interface, the Plugin section appears in Settings or in the Cowork interface depending on your setup. From there, you can browse the marketplace, view Plugin details, and install with the required permission grants.

Once installed, a Plugin's Skills appear in your /commands list and its connectors become available for use. If the Plugin includes knowledge documents, they're available as context without uploading anything manually.

In a shared Project or team Cowork workspace, Plugins can be made available to everyone with access. This is how teams standardize their Claude capabilities without each person independently configuring from scratch.

## Practical example

A small marketing agency wants to set up Claude for all of their content production work. They could: write Skills for each content type, connect their CMS, add their brand guides, write a set of standing instructions. This would take a day.

Instead, they find a "Content Production Suite" Plugin in the marketplace. It includes Skills for blog posts, social media, email campaigns, and landing pages; connects to their CMS via API; includes a brand voice framework; and has standing instructions for consistent formatting. They install it, configure the CMS connection with their credentials, upload their specific brand guide, and are running in an hour.

The Plugin saved them from building from scratch. Their customizations (their specific brand guide, their specific CMS) are overlaid on top of the Plugin's foundation.

## Workflow design notes

Plugins are powerful but require careful permission review. When a Plugin requests access to your email, your calendar, your file system, or external services, you're extending trust. Ask:
- Does this Plugin actually need this access to do its job?
- Who built this Plugin and how much do I trust them?
- What happens to the data the Plugin accesses?

For personal use, some permissions are fine to accept. For enterprise use, Plugin installations may require IT review and approval, especially if they access corporate data.

Plugins also need to be kept current. A Plugin built six months ago for a specific tool version may not work correctly after that tool updates its API. Build in periodic checks on Plugin performance, especially for ones that power critical workflows.

## Try this in Claude

Browse the Plugin marketplace. Find one Plugin that addresses a type of work you do. Read its description, Skills list, and permission requirements. Even if you don't install it, this exercise familiarizes you with what's available and how Plugins are structured. Note anything that surprises you about what the Plugin includes or what it requires.

## Pro tips

- "Try before you commit" isn't fully possible with Plugins, but you can often find reviews or community discussions about widely used Plugins before installing them.
- If a Plugin includes a connector you already have configured, it will typically use your existing connection rather than requiring a new authorization.
- For team Plugin installations, designate one person to evaluate and approve new Plugins rather than letting everyone install independently. This keeps the shared workflow consistent.

## Quick summary

Plugins bundle Skills, connectors, and knowledge into installable packages. They're the fastest path to a complete domain-specific workflow. The Plugin marketplace has Anthropic, third-party, and organizational options. Review permissions carefully before installing, especially for Plugins accessing sensitive data. For teams, shared Plugin installations standardize capabilities and reduce individual setup time.
