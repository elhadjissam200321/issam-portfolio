import express from 'express';
import { createServerAdapter } from '@whatwg-node/server';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  const serverApp = await import('./dist/server/server.js');
  const handleRequest = serverApp.default.fetch;

  const app = express();

  app.use(express.static(join(__dirname, 'dist', 'client')));

  app.use(createServerAdapter(handleRequest));

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🚀 Production server running on port ${port}`);
  });
})();
