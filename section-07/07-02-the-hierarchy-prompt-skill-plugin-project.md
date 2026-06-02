# The Instruction Hierarchy: Prompt, Skill, Plugin, Project

Claude's behavior in any given conversation is shaped by multiple layers of instruction. Your prompt is the most immediate layer, but it's not the only one. Understanding what each layer does, which overrides which, and which is the right tool for each type of instruction prevents confusion and makes your Claude setup more predictable.

## Why this matters

When Claude behaves unexpectedly, it's often because one layer of instruction is conflicting with or overriding another. The instructions in a Project tell Claude to be formal, but a Skill you invoked asks for casual language. A Plugin has standing constraints that conflict with your prompt. Understanding the hierarchy tells you where the conflict is and how to resolve it.

It also helps you make deliberate choices: if you want a behavior to persist across everything you do with Claude, where do you put the instruction? If you want it to apply only within one Project, where does it go?

## The hierarchy explained

From most specific (lowest) to most persistent (highest):

**Prompt (most immediate, least persistent)**
What you type in a single message. This is the most specific instruction and applies to this message and this conversation only. It's also the most flexible: you can say anything in a prompt.

**Skill (task-specific, invoked explicitly)**
A Skill's instructions apply when the Skill is invoked. They're more persistent than a prompt but only active when you explicitly invoke the Skill. They define how Claude approaches a specific task type.

**Plugin (domain-level, always active when installed)**
Plugin instructions apply to any conversation where the Plugin is active. If a Plugin's standing instructions shape Claude's behavior in a domain (legal, marketing, financial), those instructions apply throughout that Plugin context without you needing to invoke them.

**Project (workspace-level, most persistent)**
Project instructions apply to every conversation within the Project. They're the highest-level persistent instructions within your Claude setup. They can set context, tone, constraints, and personas that override more specific layer defaults.

## How conflicts resolve

When instructions at different layers conflict, the general rule is that more specific instructions take precedence over more general ones.

A prompt that says "be casual" in a Project instructed to "be formal" will typically produce a casual response, because the prompt is the most immediate instruction. If you want the Project instruction to be inviolable, you need to write it as a constraint: "always use formal language, regardless of how the prompt is phrased."

Plugin instructions interact with Project instructions in ways that depend on the specific Plugin. Generally, Plugin instructions that establish domain context (like specialized knowledge frameworks) operate alongside Project instructions rather than competing with them.

## A practical map

| What you want | Where to put it |
|---|---|
| One-time specific instruction | Prompt |
| Behavior for a specific task type (invoked explicitly) | Skill |
| Always-on domain behavior for a category of work | Plugin |
| Consistent behavior across all work in a workspace | Project instructions |
| Global preferences for all Claude interactions | Memory or global settings |

## How this works in Claude

You don't usually need to think about the hierarchy explicitly during normal work. It matters when:
- You're setting up a new Project or Plugin and want to know where to put standing instructions
- You notice Claude behaving unexpectedly and need to diagnose which layer is causing it
- You're building an automated Cowork workflow and need to ensure the instructions apply reliably

To diagnose unexpected behavior: start at the prompt level and work up. Is something in your prompt triggering the behavior? In the Skill you invoked? In the Plugin? In the Project? Find the source, then decide whether to modify that layer or override it at a more specific level.

## Practical example

A legal team uses Claude with:
- A "Legal Review" Plugin that establishes legal analysis conventions and conservative, precise language
- A "Client Contracts" Project with client-specific context and confidentiality constraints
- A "Risk Identification" Skill for extracting risks from documents
- Individual prompts for specific review tasks

The Plugin's precision requirements apply throughout the legal context. The Project's confidentiality constraints apply throughout the client engagement. The Skill's extraction format applies when invoked. The prompt addresses the specific contract at hand.

All four layers work together because they address different things. Problems arise when they conflict: if the Plugin says "never recommend actions" but a prompt asks Claude to "recommend next steps," there's a conflict. The team resolves it by adding a Project-level nuance: "within this Project, recommendations are permitted when clearly labeled as preliminary analysis, not legal advice."

## Try this in Claude

Look at a Project you've set up. Identify one behavior you want to apply consistently across all conversations in that Project. Write it as a Project instruction. Then identify one behavior you want only for a specific task type. Write that as a potential Skill instruction. Notice how different the two instructions need to be to sit correctly at each layer.

## Pro tips

- When in doubt about which layer to use, start with the prompt. If you find yourself repeating the same prompt instruction in every session, promote it to a Project instruction.
- Plugin and Project instructions can work together well when they address different concerns. Don't try to consolidate everything into one layer.
- If a Plugin instruction is causing problems in a specific Project, you can add an overriding constraint in the Project instructions. This is preferable to modifying the Plugin itself.

## Quick summary

Prompt, Skill, Plugin, and Project are four layers of instruction that shape Claude's behavior, from most immediate to most persistent. More specific instructions generally override more general ones. Use the right layer for each type of instruction: prompts for one-time specifics, Skills for task patterns, Plugins for domain context, Projects for workspace consistency. Understanding the hierarchy helps you diagnose unexpected behavior and design more reliable workflows.
