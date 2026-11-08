// Copyright 2026 Final, Inc.
// SPDX-License-Identifier: Apache-2.0

import { defineFinalConnection } from '@finalai/agents';

export default defineFinalConnection({
  tools: {
    // Task work reads original context and uses Task assignments rather than arbitrary chat creation.
    deny: [
      'list_conversations',
      'post_to_conversation',
      'create_agent_session',
      'read_agent_session',
    ],
  },
});
