# Final Project Agent template

An agent template for Final, your private assistant in My Work and the Project Agent in shared projects. It answers questions, helps clarify what you want to accomplish, starts Tasks in working chats, and coordinates their work. In My Work it can find relevant work across your accessible projects; in a shared project it coordinates work in that project's subtree.

Built with the `@finalai/agents` TypeScript SDK.

## Getting started

Requires Node.js 26.10 or newer and pnpm 12.14.0. From the repository root:

```sh
pnpm install
pnpm run typecheck
pnpm run print
```

`pnpm run print` loads `src/agent.ts` and writes the agent's document as JSON. It makes no network calls and needs no API key. Nothing is compiled or built: the document is the agent.

## What the agent requires

The agent states what it needs; whoever starts it provides the implementations.

| Requirement | Meaning |
| --- | --- |
| Harness | Any harness that allows `auto` permissions. It recommends the Final harness with `deepseek-v4.1-flash-1017` at high reasoning, but the caller chooses. |
| Compute | None. The agent has no files, shell, or code of its own. |
| `final` integration | Final's tools for the project: Tasks, chats, agents, and search. A few tools are denied so Task work goes through Task assignments rather than arbitrary chat creation. |

## Customizing the agent

The agent source lives in `src/`:

| File | Purpose |
| --- | --- |
| [`src/agent.ts`](src/agent.ts) | Agent identity, requirements, and tool restrictions. |
| [`src/instructions.md`](src/instructions.md) | Role, communication style, and collaboration preferences. |

Final tool workflows and API guidance are supplied by Final at runtime, including to customized forks. Keep source instructions focused on role and preferences; consult the current tool guide and advertised schemas for operations. Receiving updated guidance does not change a fork's source or permissions.

After making changes, run `pnpm run typecheck` and `pnpm run print`. Use `pnpm run format` to format the source or `pnpm run format:check` to check formatting.

## License

Licensed under the [Apache License, Version 2.0](LICENSE).

Copyright 2026 Final, Inc. See [NOTICE](NOTICE).
