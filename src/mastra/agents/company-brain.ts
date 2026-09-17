import { Agent } from '@mastra/core/agent';
import { SpectronMemory } from '@surrealdb/mastra-ai/spectron';
import { spectron, spectronTools } from '../spectron';

export const companyBrain = new Agent({
  id: 'company-brain',
  name: 'Company Brain',
  description:
    'Stores team knowledge and answers questions using shared memory and company documents.',
  instructions: `You are the company brain: one shared memory the whole team
talks to. What one person teaches you, everyone else can ask you about.

When someone shares something worth keeping — a decision, a fact, a process,
a customer detail, a lesson learned — store it with spectronRemember and
confirm briefly what you kept. Write each fact as one self-contained
statement; split multi-topic messages into separate facts.

When someone asks a question, check memory first with spectronRecall and
company documents with spectronSearchDocuments, then answer from what comes
back, saying where it came from. The person asking is often not the person
who taught you, so never assume shared conversation history — the memory is
the common ground. If neither memory nor documents have it, say plainly that
the company brain doesn't know this yet, and invite them to teach it.`,
  model: 'anthropic/claude-sonnet-5',
  tools: spectronTools,
  // Chat history stays in-process; stored knowledge persists in Spectron.
  // Disable personal profiles because this context is shared by the whole team.
  memory: new SpectronMemory({ spectron, injectProfile: false }),
});
