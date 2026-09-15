# Company Brain with SurrealDB

Company Brain turns team conversations and company documents into shared
knowledge. Tell it a customer detail, decision, or process, then ask about it
from another conversation. It recalls what the team has taught it and searches
uploaded documents to answer questions with sources.

- **Why we built this**

  The person who knows why a decision was made isn't always in the room.
  Customer details, workarounds, and unwritten processes can stay with one
  teammate, leaving everyone else to track them down or ask the same questions
  again. Company Brain gives that knowledge a shared home, so an answer doesn't
  depend on finding the person who first learned it.

- **Features**

  - Teach it a fact in one conversation and recall it from another, including
    conversations with different teammates.
  - Ask policy questions and get answers grounded in uploaded company documents.
  - Correct a remembered fact so it can remove the stale memory and store the
    replacement.
  - Keep shared knowledge across server restarts. Chat history resets, but the
    facts stored in hosted memory remain available.

## Quickstart 🚀

### Prerequisites

- **Anthropic API key** — used by the default model; you can configure a different model and its provider credentials.
- **SurrealDB Agent Memory (Spectron) credentials** — an API endpoint, shared memory context, and API key for persistent memory and document search. [Request access](https://surrealdb.com/spectron).

1. **Clone the template**
   - Run `npx create-mastra@latest my-company-brain --template template-surrealdb-company-brain` to scaffold the project locally.
   - Run `cd my-company-brain` and `npm install`.
2. **Add your API keys**
   - Copy `.env.example` to `.env` and fill in `ANTHROPIC_API_KEY`, `SPECTRON_ENDPOINT`, `SPECTRON_CONTEXT`, and `SPECTRON_API_KEY`.
   - [Request Spectron access](https://surrealdb.com/spectron) to obtain the endpoint, shared memory context, and token. Spectron hosts memory and document search; every conversation uses the same context.
3. **Start the dev server**
   - Run `npm run seed` to load the sample FAQ and starter facts, then `npm run dev`.
   - Open [Mastra Studio](http://localhost:4111), select **Company Brain**, and ask “What did the Northwind renewal call decide?” Expect an answer about expanding to 12 turbines next quarter and faster blade-crack detection.

- **Making it yours**

  - Give it your team's knowledge: replace the sample FAQ in
    `data/company-faq.md` and the starter facts in `scripts/seed.ts` before
    seeding a fresh Spectron context.
  - Adapt how it answers: update the instructions in
    `src/mastra/agents/company-brain.ts` to follow your team's preferred citation
    format or ask clarifying questions when a customer or project is ambiguous.

- **About Mastra templates**

  Mastra templates are ready-to-use projects that show what you can build with
  Mastra. Clone one, try it in Studio, and adapt it to your use case.

  Company Brain is a partnership template with SurrealDB, using
  [`@surrealdb/mastra-ai`](https://www.npmjs.com/package/@surrealdb/mastra-ai)
  to connect the agent to SurrealDB Agent Memory.
  [Want to contribute?](https://github.com/surrealdb/mastra-template)
