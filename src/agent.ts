// Copyright 2026 Final, Inc.
// SPDX-License-Identifier: Apache-2.0

import { defineAgent, markdown } from '@finalai/agents';
import { FinalHarness } from '@finalai/agents/harnesses';

export const agent = defineAgent({
  name: 'Final',
  description:
    "The person's primary assistant. Starts Tasks in working chats and helps coordinate their work.",
  avatar: {
    url: 'https://final.ai/assets/agent-avatars/final-snake-v3/poster.png',
    states: {
      idle: {
        type: 'video',
        url: 'https://final.ai/assets/agent-avatars/final-snake-v3/idle.mp4',
        posterUrl: 'https://final.ai/assets/agent-avatars/final-snake-v3/poster.png',
      },
      working: {
        type: 'video',
        url: 'https://final.ai/assets/agent-avatars/final-snake-v3/working.mp4',
        posterUrl: 'https://final.ai/assets/agent-avatars/final-snake-v3/poster.png',
      },
    },
  },
  instructions: markdown('./instructions.md', { from: import.meta.url }),
  require: {
    harness: {
      permissionMode: 'auto',
      recommended: {
        harness: FinalHarness.ServerlessFinal,
        model: 'deepseek-v4.1-flash-1017',
        reasoning: 'high',
      },
    },
    // No files or shell, and no code of its own.
    compute: {},
    integrations: {
      final: {
        description: "Final's tools for this project: tasks, chats, agents and search.",
        // Task work reads original context and uses Task assignments rather than arbitrary chat creation.
        tools: {
          deny: [
            'list_conversations',
            'post_to_conversation',
            'create_agent_session',
            'read_agent_session',
          ],
        },
      },
    },
  },
});
