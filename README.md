# Company Brain with SurrealDB

Company Brain turns team conversations and company documents into shared
knowledge. Tell it a customer detail, decision, or process, then ask about it
from another conversation. It recalls what the team has taught it and searches
uploaded documents to answer questions with sources.

## Why we built this

The person who knows why a decision was made isn't always in the room.
Customer details, workarounds, and unwritten processes can stay with one
teammate, leaving everyone else to track them down or ask the same questions
again. Company Brain stores that knowledge for teammates to retrieve, so an
answer doesn't depend on finding the person who first learned it.

## Demo

<!-- TODO: REPLACE THIS PLACEHOLDER WITH THE CLOUDINARY DEMO VIDEO URL -->

<video controls width="640" height="360" src="CLOUDINARY_DEMO_VIDEO_URL_REQUIRED"></video>

## Prerequisites

- **[Anthropic API key](https://platform.claude.com/settings/keys)**: set `ANTHROPIC_API_KEY` for the default model. You can configure a different model and its provider credentials.
- **[SurrealDB Agent Memory (Spectron) credentials](https://surrealdb.com/agent-memory)**: request hosted access for persistent memory and document search. Use the supplied values for:
  - `SPECTRON_ENDPOINT`: your API endpoint origin.
  - `SPECTRON_CONTEXT`: the memory context shared by every conversation.
  - `SPECTRON_API_KEY`: your bearer token.

## Quickstart 🚀

1. **Clone the template**
   - Run `npx create-mastra@latest my-company-brain --template template-surrealdb-company-brain` to scaffold the project locally.
   - Run `cd my-company-brain` and `npm install`.
2. **Add your API keys**
   - Run `cp .env.example .env` and fill in the values described under Prerequisites.
3. **Load the sample knowledge**
   - Run `npm run seed` to upload the sample FAQ and store the starter facts.
4. **Start the dev server**
   - Run `npm run dev`.
   - Open [Mastra Studio](http://localhost:4111), select **Company Brain**, and ask “What did the Northwind renewal call decide?” Expect an answer about expanding to 12 turbines next quarter and faster blade-crack detection. Then try the examples below.

## Try it out

- Teach it something in one conversation, such as *“The staging environment resets nightly at 02:00”*, then ask about it in a **different thread, as a different teammate**. The memory is the common ground, not the chat history.
- Ask a policy question: *“Do I need approval for a $150 expense?”* The answer should draw on the ingested team FAQ, which approves expenses at or under $200 and requires keeping the receipt for 90 days.
- Correct the record: *“Marta no longer owns the drone battery supplier relationship; Luis does now.”* Check that it forgets the stale fact and stores the replacement. This updates remembered facts; it doesn't rewrite uploaded documents.
- Kill the dev server and start it again: fresh process, same brain. Chat history resets, but knowledge stored in Spectron remains available.

## Customization

- Open the project in your coding agent and describe what you want to
  change. For example: “Adapt Company Brain for our support team's customer
  handoffs. Explore the code and propose a plan for the sample data and
  agent instructions before making changes.”
- Give it your team's knowledge: replace the sample FAQ in
  `data/company-faq.md` and the starter facts in `scripts/seed.ts` before
  seeding a fresh Spectron context.

## About Mastra templates

This partnership template was contributed by SurrealDB to show how Mastra
works with SurrealDB Agent Memory for shared company knowledge and document
search, using
[`@surrealdb/mastra-ai`](https://www.npmjs.com/package/@surrealdb/mastra-ai).
Partnership templates live in their own repositories.

[Want to contribute?](https://github.com/mastra-ai/template-surrealdb)
