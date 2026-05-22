import { execSync } from 'node:child_process';
console.log("Starting TanStack production server...");
execSync('npm run start', { stdio: 'inherit' });
