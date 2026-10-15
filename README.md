# Final Home agent template

An agent template for Final Home, your primary assistant in Final. Home answers questions, helps clarify what you want to accomplish, and delegates work through Goals.

Built with the `@finalai/agents` TypeScript SDK.

## Getting started

Requires Node.js 26.10 or newer and pnpm 12.6.0. From the repository root:

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
| [`src/instructions.md`](src/instructions.md) | Behavior, communication style, and delegation instructions. |
| [`src/connections/final.ts`](src/connections/final.ts) | Final connection and tool access restrictions. |

After making changes, run `pnpm run typecheck` and `pnpm run build`. Use `pnpm run format` to format the source or `pnpm run format:check` to check formatting.

## License

Licensed under the [Apache License, Version 2.0](LICENSE).

Copyright 2026 Final, Inc. See [NOTICE](NOTICE).
