---
layout: lesson
title: "When to Use a Pre-Built Plugin or Agent vs. Building Your Own"
section: 14
section_title: "Managed Agents, Capstone & Graduating to Claude Code"
section_slug: "14-capstone"
order: 2
noindex: true
---

# When to Use a Pre-Built Plugin or Agent vs. Building Your Own

Throughout this course, you've built skills for designing Claude workflows. This lesson is about knowing when not to build and when to start with something that already exists. The decision framework is straightforward, but the instinct to build can make it feel more complicated than it is.

## Why this matters

Building a Claude workflow from scratch takes time and produces a result that reflects your current understanding of the problem. A pre-built Plugin or Managed Agent reflects the cumulative understanding of its developers, including edge cases you haven't encountered yet. For common professional problems, the pre-built solution is often better than the first version you'd build.

## The decision framework

**Use a pre-built Plugin or Managed Agent when:**

*The domain is specialized and governed.* Legal, financial, healthcare, compliance. These domains have requirements that go beyond "produce good output." Pre-built agents for these domains typically include appropriate constraints that you'd need to research and design yourself.

*The problem is well-defined and common.* If thousands of professionals face the same workflow need, someone has probably built a well-tested solution. Contract review, expense report processing, meeting scheduling, customer communication. Standard problems have standard solutions worth evaluating before reinventing.

*Speed of deployment matters more than customization.* A pre-built solution you can use tomorrow beats a custom solution you can use next month, for most use cases.

*Governance and reliability matter more than flexibility.* Pre-built solutions from established providers have been tested against a wider range of inputs than your first version will be.

**Build your own when:**

*Your workflow is genuinely unique.* If your process doesn't map to any existing solution, you have to build. Industry-specific internal processes, proprietary methodology-based workflows, organization-specific automation patterns.

*You need integration with internal systems.* Pre-built solutions are built for standard external tools. If your workflow depends on proprietary internal systems with no public API, you'll be building custom connectors regardless.

*You need specific control over every decision in the workflow.* Some organizations require full visibility into every prompt, every constraint, and every behavior in their AI workflows. Pre-built solutions are opaque to that level. Custom builds are transparent.

*The pre-built solution is close but not quite right.* Sometimes the right answer is "start with the pre-built solution, customize where needed." That's also valid.

## The hybrid approach

For many professionals, the best answer is: start with a pre-built Plugin or Managed Agent, understand how it works, and customize where the defaults don't fit your specific context. This gives you the governance head-start of a pre-built solution with the flexibility to adapt it.

Use the Plugins system to install the bundle, review the Skills and instructions it includes, and modify the ones that don't match your situation. This is faster than building from scratch and more tailored than using the default.

## Try this in Claude

Map your three most time-consuming recurring workflows. For each one: is there a Plugin or Managed Agent that addresses it? If yes, evaluate it against the "use pre-built" criteria above. For the one where pre-built seems most appropriate, evaluate whether the governance model is right for your context.

## Quick summary

Use pre-built Plugins and Managed Agents for common, well-defined problems, especially in governed domains. Build your own for unique workflows, proprietary system integrations, or situations requiring full transparency. The hybrid approach, starting with pre-built and customizing, is often the fastest path to a well-governed, tailored workflow. The instinct to build everything from scratch is worth questioning when good alternatives exist.
