---
layout: lesson
title: "Managed Agents and Vertical Bundles"
section: 14
section_title: "Managed Agents, Capstone & Graduating to Claude Code"
section_slug: "14-capstone"
order: 1
noindex: true
---

# Managed Agents and Vertical Bundles

Not every professional AI workflow needs to be built from scratch. For established professional domains, pre-built Managed Agents and vertical Plugin bundles bring purpose-designed capabilities, appropriate governance, and domain-specific knowledge in a single installation. This lesson covers what they are, what domains they serve, and when to use them instead of building your own.

## Why this matters

A legal professional setting up a contract review workflow faces a real design challenge: what constraints are appropriate? What review gates are required? What liability considerations shape how outputs should be described? A Managed Agent for legal work has those decisions already made, by people who have thought carefully about the domain. Building the same workflow from scratch means making those decisions yourself, often without the domain expertise to make them well.

Managed Agents and vertical bundles reduce the design burden for specialists working in governed domains. They're not replacements for professional judgment; they're scaffolding built to support it.

## The domains currently covered

Vertical bundles are available (or in development) for several professional domains:

**Legal:** Contract analysis, clause extraction, risk identification, regulatory review. Governed with appropriate disclaimers, designed to support professional legal review rather than replace it.

**Financial Services:** Financial document analysis, regulatory compliance review, report generation. Designed with the data handling and accuracy standards appropriate for regulated financial work.

**Small Business:** Operations support, customer communication, financial tracking, scheduling. Covers the breadth of tasks a small business owner manages without a specialist team.

**Marketing Operations:** Campaign planning, content production, performance analysis, audience insights. Integrates with marketing tools and workflows.

Each vertical bundle typically includes: domain-specific Skills, appropriate connectors, reference knowledge for the domain, and governance instructions that shape how Claude approaches work in that professional context.

## The governance difference

A well-designed Managed Agent for a professional domain includes guardrails that a DIY workflow might not:
- Appropriate disclaimers for outputs that require professional sign-off
- Constraints on what the agent will and won't do autonomously
- Review requirements built into the workflow, not bolted on after
- Domain-appropriate error handling

For regulated professions (law, finance, healthcare), these guardrails aren't optional niceties. They're baseline requirements for responsible use. Using a Managed Agent designed for the domain means inheriting those guardrails rather than having to design them from scratch.

## Practical example

A small law firm is considering using Claude for contract review. Option A: build a Cowork workflow from scratch, configure connectors, write Skills, design review gates. Requires the firm's IT or an AI-savvy team member to design the workflow. The quality of the governance depends on how well that person understood the requirements.

Option B: install the Legal Managed Agent. Pre-built for contract review, with appropriate professional disclaimers, review requirements, and constraints. The firm's lawyers can start using it without designing the governance model.

For most firms, Option B is the right starting point. They can customize and extend from there once they understand how the agent behaves.

## Try this in Claude

Browse the Plugin marketplace and look at what vertical bundles are available for your professional domain or adjacent ones. For one bundle that interests you, read the description carefully: what does it include, what does it constrain, what permissions does it require? Note whether there are capabilities it explicitly limits that you would need to consider before deploying it in your organization.

## Quick summary

Managed Agents and vertical bundles provide pre-built agentic systems for specific professional domains. They include domain-appropriate Skills, connectors, knowledge, and governance. For regulated or specialist professions, they offer appropriate guardrails that DIY workflows require you to design yourself. They're starting points, not final solutions, but for most professionals they're better starting points than building from zero.
