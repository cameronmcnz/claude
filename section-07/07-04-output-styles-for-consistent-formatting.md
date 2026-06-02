# Output Styles: Teaching Claude How You Want Things Formatted

Claude has default formatting tendencies: how long responses are, whether it uses bullet points or prose, how formal the language is, whether it adds section headers. Those defaults may or may not match how you work. Output Styles let you change them systematically, so Claude formats things the way you want without you needing to specify it in every prompt.

## Why this matters

Inconsistent formatting creates editing friction. If Claude sometimes gives you bullet points and sometimes gives you prose for the same type of task, you're making a formatting decision in every session that you shouldn't have to make. If Claude defaults to long, structured responses when you'd prefer concise prose, you're trimming every output.

Output Styles solve this at the source. You specify your formatting preferences once, they apply globally or per-Project, and Claude formats accordingly.

## The idea in plain English

Output Styles are formatting instructions that apply persistently rather than per-prompt. They typically cover:

**Length:** Do you want concise responses or comprehensive ones? Claude defaults to medium length; you can push it toward shorter (key points only, under 200 words) or longer (thorough, with supporting reasoning).

**Structure:** Do you prefer prose or lists? Headers or no headers? Tables when comparing options or always prose? Claude uses structure when it seems helpful; Output Styles let you be more prescriptive.

**Tone:** Professional and formal? Direct and conversational? Conservative and hedged? Confident and assertive? This applies to all responses when set globally or to all responses within a Project when set at Project level.

**Voice:** First person or third person? Active or passive? Technical vocabulary acceptable or plain language only?

**How responses start:** Claude sometimes opens with "Certainly!" or similar affirmations. If you find those grating, a style setting can eliminate them.

## How this works in Claude

Output Styles can be set in a few places:

**Global settings:** In Settings, look for a response style or custom instructions option. Instructions you set here apply across all your Claude conversations. This is where you store preferences that should always apply.

**Project instructions:** For Project-specific formatting, your Project instructions serve as the Output Style for that context. "Always respond in prose, no bullet points. Keep responses under 300 words unless I ask for more" in a Project instruction applies to every conversation in that Project.

**Memory:** If you tell Claude your formatting preferences in conversation and it saves them to memory, those preferences will apply in future sessions where memory is active.

**One-time override in a prompt:** A specific prompt instruction always overrides an Output Style for that response. If your global style is "concise" but a specific request needs comprehensive detail, asking for it in the prompt overrides the default for that response only.

## Practical example

A legal analyst's main complaint about Claude responses: they're too long, they use too many headers, and the hedging language ("it's worth noting that," "however, it should be considered") makes every response feel padded.

She sets an Output Style through her global instructions: "Write concisely. Avoid hedging language like 'it's worth noting' and 'however, it should be considered.' Do not use headers unless I ask for a structured document. Write in prose. Aim for under 200 words unless I ask for more."

The change is immediate. Responses are shorter, cleaner, and more direct. She edits far less. The formatting preference she encoded once applies to every conversation without her thinking about it again.

## Workflow design notes

Output Styles can conflict with each other if set at multiple layers. A global style that says "no bullet points" and a Project instruction that says "use bullets for action item lists" creates a conflict. Resolve it by being specific: "No bullet points except for explicit action item lists" at the global level, or "use bullet points for action items, prose for analysis" at the Project level.

For teams, shared Output Styles within a Project are powerful for consistency. All team members using the same Project receive the same format from Claude, which reduces the editing burden when outputs need to be reviewed or combined.

## Try this in Claude

Look at your recent Claude conversations and identify the formatting element you edit most consistently: you always shorten, you always add headers, you always convert bullets to prose. That's your Output Style priority. Write a two-sentence style instruction that would eliminate most of that editing. Add it to your global settings or your most-used Project and test it in the next three conversations.

## Pro tips

- Less is more with Output Styles. One or two clear formatting preferences produce consistent behavior. A long list of formatting rules often produces a Claude that's trying to satisfy too many constraints simultaneously.
- Test style changes with a variety of prompts before accepting them globally. A style that works well for analytical responses may not work for creative ones.
- Output Styles are about format, not content. They don't change what Claude knows or how well it reasons; they change how it presents the output.

## Quick summary

Output Styles apply formatting preferences globally or per-Project, so you don't repeat formatting instructions in every prompt. They cover length, structure, tone, and voice. Set them in global settings for universal preferences, in Project instructions for context-specific preferences. One or two clear instructions work better than a long list. They're the complement to prompting: prompts shape what Claude produces; Output Styles shape how it presents it.
