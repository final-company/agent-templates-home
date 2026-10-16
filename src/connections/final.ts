// Copyright 2026 Final, Inc.
// SPDX-License-Identifier: Apache-2.0

import { defineFinalConnection } from '@finalai/agents';

// Home's own tools stay listed; Final's other tools and the person's connected
// services are found with search_tools and run with call_tool.
const LOADED = [
  'list_goals',
  'get_goal',
  'draft_goal',
  'edit_goal',
  'update_goal_plan',
  'report_goal_activity',
  'cancel_goal',
  'list_agents',
  'delegate_goal_to_new_chat',
  'delegate_goal_to_chat',
  'message_delegated_chat',
  'list_delegated_chats',
  'get_delegated_chat',
  'withdraw_goal_from_chat',
  'list_scheduled_tasks',
  'create_scheduled_task',
  'update_scheduled_task',
  'delete_scheduled_task',
  'react_to_message',
  'notify_user',
  'list_workflows',
  'get_workflow',
  'get_workflow_execution',
];

export default defineFinalConnection({
  tools: {
    load: LOADED,
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
