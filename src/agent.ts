// Copyright 2026 Final, Inc.
// SPDX-License-Identifier: Apache-2.0

import { credentials, defineAgent } from '@finalai/agents';
import { serverlessFinal } from '@finalai/agents/harnesses';

export default defineAgent({
  name: 'Final',
  description: "The person's primary assistant. Answers directly and delegates stateful work.",
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
