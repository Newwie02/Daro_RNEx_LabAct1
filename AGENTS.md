# AGENTS.md — Agent Instructions

React Native Material 3 Template — Expo 57 + NativeWind 4 + TypeScript.

## Entry Points

| File        | Purpose                       |
| ----------- | ----------------------------- |
| `BRAIN.md`  | Project knowledge & reasoning |
| `MEMORY.md` | Persistent session facts      |
| `DESIGN.md` | Visual design system          |

Always read `BRAIN.md` first for architecture, conventions, and decisions. Read `MEMORY.md` for session state.
Update `MEMORY.md` with any new facts or instructions that should persist across sessions.

## Commands

| Command           | What                                                  |
| ----------------- | ----------------------------------------------------- |
| `npm start`       | Expo dev server (port 8080)                           |
| `npm run android` | Start on Android emulator                             |
| `npm run ios`     | Start on iOS simulator                                |
| `npm run web`     | Start on web (Metro bundler)                          |
| `npm run lint`    | `expo lint && oxlint`                                 |
| `npm run format`  | `expo lint --fix && oxlint --fix && prettier --write` |

No test framework is installed.

## Coding Standards

- TypeScript strict mode — all files `.ts`/`.tsx`
- 4-space indent in TS/TSX (Prettier enforced)
- Single quotes, semicolons, trailing commas, arrow parens always
- JSX single quotes (`jsxSingleQuote: true`)
- Path aliases: `@/` → `./src/`, `@/assets/` → `./assets/`
- Prefer composition over inheritance
- One responsibility per component
- No dead code, no commented-out code, no duplicated logic
- Use `strings.ts` for all UI-facing text (when applicable)
- Never use `${}` template string interpolation in classNames — always use `cn()` for dynamic classNames

## Subagent Strategy

On complex or long-running tasks (multi-file refactors, implementing new sections), delegate to subagents using the `task` tool with `subagent_type: "general"`. Each subagent should receive a focused, self-contained prompt with clear deliverable instructions. Keep the main agent context lean.

## Primary Goal

Build a clean, minimalist, scalable React Native Material 3 template using design tokens from `@pchmn/expo-material3-theme`.

## Non-Negotiable Rules

- Use only information that exists in the repository or is explicitly provided by the user.
- Do not invent projects, job history, metrics, awards, links, or social handles.
- If something is missing, use a neutral placeholder, mark it clearly as TODO, or leave the section out.
- Prefer modern, maintainable, greenfield-style decisions when the codebase allows it.
- Avoid unnecessary complexity, overengineering, and decorative noise.
- **Agent Memory Protocol:** Whenever the user says "remember that..." or explicitly asks the agent to remember something, the agent MUST immediately append that instruction or preference into `MEMORY.md`, `BRAIN.md`, or `AGENTS.md` so it is preserved for future sessions.

## Design Direction

- Style: Material 3, minimalist, modern, sharp, high-contrast
- Layout: spacious, easy to scan, no clutter
- Typography: clear hierarchy, strong headings, readable body text (Lexend Deca)
- Colors: dynamic Material 3 palette via `useMaterial3Theme`, exposed as CSS variables through NativeWind `vars()`
- Components: simple, reusable, consistent
- Tone: professional and confident

## Engineering Standards

- Write maintainable code.
- Use reusable components.
- Keep file structure logical and shallow.
- Extract repeated UI into shared components.
- Avoid hardcoded magic values where a token or constant makes sense.
- Optimize for readability over cleverness.

## When Unsure

- Prefer simpler implementation.
- Prefer leaving out uncertain content.
- Prefer asking for missing source material only when the absence blocks progress.
- Otherwise, proceed with the best valid neutral structure.

## Operating Principle

If a choice exists between flashy and clear, complex and maintainable, speculative and accurate — choose clear, maintainable, and accurate.
