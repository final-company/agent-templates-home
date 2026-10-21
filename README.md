# Final Home agent template

An agent template for Final Home, your primary assistant in Final. Home answers questions, helps clarify what you want to accomplish, starts Goals in working chats, and coordinates their work.

Built with the `@finalai/agents` TypeScript SDK.

## Getting started

Requires Node.js 26.10 or newer and pnpm 12.14.0. From the repository root:

```sh
pnpm install
pnpm run typecheck
pnpm run build
```

The build writes generated files to `src/.final/compile/`, which is excluded from version control. Local compilation does not require an API key. Set `FINAL_API_KEY` to also check compatibility with the installed Final harness.

## Customizing the agent

The agent source lives in `src/`:

| File | Purpose |
| --- | --- |
| [`src/agent.ts`](src/agent.ts) | Agent identity, model, credentials, and runtime settings. |
| [`src/instructions.md`](src/instructions.md) | Role, communication style, and collaboration preferences. |
| [`src/connections/final.ts`](src/connections/final.ts) | Final connection and tool access restrictions. |

Final tool workflows and API migration guidance are owned by the platform and delivered at runtime, including to existing pinned revisions and customized forks. Keep source instructions focused on role and preferences; consult the current tool guide and advertised schemas for operations. Receiving updated platform guidance does not change a fork's source, permissions, or pinned revision.

After making changes, run `pnpm run typecheck` and `pnpm run build`. Use `pnpm run format` to format the source or `pnpm run format:check` to check formatting.

## License

Licensed under the [Apache License, Version 2.0](LICENSE).

Copyright 2026 Final, Inc. See [NOTICE](NOTICE).
