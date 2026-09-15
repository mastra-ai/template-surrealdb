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

- **Quick start**

  Use Node.js 22.18+ (22.x), or 24.11+. You'll also need an Anthropic API key
  and access to [SurrealDB Agent Memory (Spectron)](https://surrealdb.com/spectron).
  Spectron hosts the memory and document search; you don't need to run a database,
  vector store, or embedding model locally.

  - **1. Clone the template**

    ```bash
    npx create-mastra@latest my-company-brain --template template-surrealdb-company-brain
    cd my-company-brain
    npm install
    ```

  - **2. Add your API keys**

    Copy the example environment file, then fill in the required values:

    ```bash
    cp .env.example .env
    ```

    - `ANTHROPIC_API_KEY`: gives the agent access to its language model.
    - `SPECTRON_ENDPOINT`: your Spectron API endpoint origin.
    - `SPECTRON_CONTEXT`: the shared memory context for this company brain.
    - `SPECTRON_API_KEY`: your Spectron bearer token.

    [Request Spectron access](https://surrealdb.com/spectron) to obtain the endpoint,
    context, and token. Every conversation in this template uses the same context.

  - **3. Start the dev server**

    Seed the sample team FAQ and starter facts, then start the server:

    ```bash
    npm run seed
    npm run dev
    ```

    Open [Mastra Studio](http://localhost:4111), select **Company Brain**, and ask:

    > What did the Northwind renewal call decide?

    The answer should recall that Northwind plans to expand to 12 turbines next
    quarter and wants faster blade-crack detection. To try document search, ask:
    “Do I need approval for a $150 expense?” The sample FAQ says expenses at or
    under $200 are automatically approved, with receipts kept for 90 days.

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
