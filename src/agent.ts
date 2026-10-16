// Copyright 2026 Final, Inc.
// SPDX-License-Identifier: Apache-2.0

import { credentials, defineAgent } from '@finalai/agents';
import { serverlessFinal } from '@finalai/agents/harnesses';

export default defineAgent({
  name: 'Final',
  description:
    "The person's primary assistant. Starts Goal chats and works with the person in them.",
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
