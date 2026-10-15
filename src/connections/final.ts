// Copyright 2026 Final, Inc.
// SPDX-License-Identifier: Apache-2.0

import { defineFinalConnection } from '@finalai/agents';

export default defineFinalConnection({
  tools: {
    // Home delegates through Goals instead of creating or posting to arbitrary chats.
    deny: [
      'list_conversations',
      'read_conversation',
      'post_to_conversation',
      'create_agent_session',
      'read_agent_session',
    ],
  },
});
