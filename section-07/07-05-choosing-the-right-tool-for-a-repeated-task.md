# Choosing the Right Tool for a Repeated Task

You have a task you do repeatedly with Claude. Should it be a prompt you write fresh each time? A saved prompt template? A Skill? A Plugin? Part of a Project's standing instructions? The answer depends on a few factors, and getting it right saves setup overhead and produces better results. This lesson is a decision framework for that choice.

## Why this matters

Over-engineering a task creates maintenance burden. Under-engineering it creates repetitive friction. A task that should be a simple saved prompt template doesn't need to be a Skill. A task that runs daily in an automated workflow probably does. Knowing which level of infrastructure is right for each task prevents both extremes.

## The decision framework

Start by asking five questions about the task:

**1. How often do you do this task?**
- Once ever: no infrastructure needed, just a good prompt
- Occasionally (monthly or less): a saved prompt template is sufficient
- Regularly (weekly or more): a Skill may be worth the setup
- Daily or automated: a Skill or Plugin is almost certainly worth it

**2. How consistent is the task across uses?**
- Highly variable (different inputs, different outputs each time): keep it at the prompt level
- Consistently structured (same inputs, same output format): a Skill makes it repeatable without re-specifying
- Has a consistent context but variable task (same domain, different specific work each time): a Project instruction may be more appropriate than a Skill

**3. Do you share this task with others?**
- Personal only: prompt template or personal Skill is sufficient
- Team shares the task: a shared Skill or Plugin installation makes the workflow consistent across team members

**4. Does it involve specialized connectors or knowledge?**
- Uses standard Claude without external tools: Skill is probably the right layer
- Requires connectors (email, CRM, files) and domain knowledge: a Plugin brings all the components together

**5. Does it need to run without you present?**
- You're always in the loop: Skill or prompt is fine
- Runs on a schedule without you: a Skill packaged into a Cowork scheduled task (Section 10) is the right architecture

## A practical map

| Situation | Right tool |
|---|---|
| One-off task with clear scope | Good prompt, written fresh |
| Task you repeat but it varies each time | Saved prompt template you modify |
| Consistent task with consistent output format | Skill |
| Domain workflow with connectors and knowledge | Plugin |
| Standing context that applies across all work in one area | Project instruction |
| Scheduled, unattended automation | Skill + Cowork scheduled task |

## How to migrate up the stack

Most tasks start at the prompt level and move up as their value and frequency become clear. A reasonable progression:

1. You do a task with a good prompt a few times. It works well.
2. You save the prompt in a document so you can reuse it without rewriting.
3. You do it often enough that finding and copying the prompt feels like friction.
4. You turn it into a Skill so you can invoke it with a command.
5. You connect it to a Cowork scheduled task if it should run automatically.

Most tasks stay at step 2 or 3. Only the truly frequent or automated ones warrant steps 4 and 5. That's fine. Not everything needs to be a Skill.

## Practical example

A marketing manager reviews her Claude usage after three months and finds five categories of tasks she's been doing repeatedly:

- **Weekly blog post draft:** Done every week, consistent format, same inputs. Becomes a Skill.
- **Monthly newsletter:** Done monthly, consistent but not frequent enough to invest in a Skill. Stays as a saved prompt template she modifies monthly.
- **Ad hoc client emails:** Variable every time, no consistent format. Stays at the prompt level.
- **Competitive monitoring:** Should be done weekly but she forgets. The right tool is a Cowork scheduled task that runs automatically and leaves the analysis waiting for her. Uses a Skill within a scheduled automation.
- **Brand voice checking:** Applied to everything going out. Becomes a Project instruction in her "Content" Project, not a Skill, because it applies as a constraint rather than a task.

Five tasks, five different right answers.

## Try this in Claude

List the five tasks you've done most frequently with Claude in the past month. For each one, apply the five-question framework. What's the right tool for each? Are any of them currently at the wrong level (over-engineered or under-engineered)? What's the one change that would reduce the most friction in your workflow?

## Pro tips

- A good signal that a prompt should become a Skill: you've copied and pasted the same prompt more than three times without modifying it significantly.
- A good signal that a Skill should become a Plugin: you find yourself also manually setting up a connector or loading reference documents before every time you use the Skill.
- Don't build infrastructure anticipating future need. Build it when the current friction is real and the task frequency justifies the setup.

## Quick summary

Match the infrastructure level to the task's frequency, consistency, ownership, connector needs, and automation requirements. Most tasks belong at the prompt or saved-template level. Frequent, consistent tasks with clear output formats benefit from Skills. Complex domain workflows benefit from Plugins. Stand-alone context should go into Project instructions. Automate only what's genuinely recurring and well-defined enough to run without you present.
