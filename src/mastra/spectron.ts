import { createSpectronTools, Spectron } from '@surrealdb/mastra-ai/spectron';

/**
 * All conversations use one shared memory context. Spectron handles
 * fact extraction, embeddings, and semantic search on the server.
 */
export const spectron = new Spectron({
  endpoint: process.env.SPECTRON_ENDPOINT!,
  context: process.env.SPECTRON_CONTEXT!,
  apiKey: process.env.SPECTRON_API_KEY!,
});

/** remember / recall / forget / context / searchDocuments, as Mastra tools. */
export const spectronTools = createSpectronTools(spectron);
