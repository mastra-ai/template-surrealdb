import { readFile } from 'node:fs/promises';
import { ingestDocument, Spectron } from '@surrealdb/mastra-ai/spectron';

/**
 * Uploads the sample FAQ and stores starter facts for the first Studio run.
 * Document uploads deduplicate on content hash.
 */

try {
  process.loadEnvFile();
} catch {
  // No .env file — fine if the variables are exported some other way.
}

const spectron = new Spectron({
  endpoint: process.env.SPECTRON_ENDPOINT!,
  context: process.env.SPECTRON_CONTEXT!,
  apiKey: process.env.SPECTRON_API_KEY!,
});

const faq = await readFile(new URL('../data/company-faq.md', import.meta.url));

const upload = await ingestDocument(spectron, {
  file: new File([faq], 'company-faq.md', { type: 'text/markdown' }),
  title: 'Acme Robotics Team FAQ',
});

console.log(
  upload.deduplicated
    ? `FAQ already uploaded (${upload.id}), checking processing status...`
    : `FAQ uploaded (${upload.id}), waiting for processing...`,
);

// Ingestion is asynchronous server-side: extract → chunk → embed → ready.
const deadline = Date.now() + 120_000;
let status = upload.deduplicated
  ? (await spectron.documents.get(upload.id)).status
  : upload.status;
while (status !== 'ready' && status !== 'failed') {
  if (Date.now() > deadline) throw new Error(`Timed out in status "${status}"`);
  await new Promise((resolve) => setTimeout(resolve, 2_000));
  status = (await spectron.documents.get(upload.id)).status;
  console.log(`  status: ${status}`);
}
if (status === 'failed') throw new Error('FAQ ingestion failed');

const facts = [
  'The staging environment resets every night at 02:00, so anything left there does not survive to the next day.',
  "The renewal call with Northwind Energy went well: they will expand to 12 turbines next quarter, and their main ask is faster blade-crack detection.",
  'Marta owns the vendor relationship with the drone battery supplier; all pricing questions go through her.',
];

for (const fact of facts) {
  await spectron.remember(fact, { memoryCategory: 'knowledge' });
  console.log(`Remembered: ${fact.slice(0, 60)}...`);
}

console.log('\nSeed complete. Start the brain with: npm run dev');
