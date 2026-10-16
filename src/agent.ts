// Copyright 2026 Final, Inc.
// SPDX-License-Identifier: Apache-2.0

import { credentials, defineAgent } from '@finalai/agents';
import { serverlessFinal } from '@finalai/agents/harnesses';

export default defineAgent({
  name: 'Final',
  description: "The person's primary assistant. Answers directly and delegates stateful work.",
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
  harness: serverlessFinal({
    credentials: credentials.chain({
      payer: 'organization',
      tryInOrder: [credentials.platform()],
    }),
    model: 'deepseek-v4.1-flash',
    reasoning: 'high',
    permissionMode: 'auto',
  }),
});
