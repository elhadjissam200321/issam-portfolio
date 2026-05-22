import express from 'express';
import { createServerAdapter } from '@whatwg-node/server';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Load TanStack Server handler
const serverApp = await import('./dist/server/server.js');
const handleRequest = serverApp.default.fetch;

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static assets from TanStack client build
app.use(express.static(join(__dirname, 'dist', 'client')));

// Pass all other requests to TanStack Start SSR handler
app.use(createServerAdapter(handleRequest));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Production server running on port ${port}`);
});
