#!/usr/bin/env node
import nodeModule from 'node:module';

// enable on-disk code caching of all modules loaded by Node.js
// requires Nodejs >= 22.8.0
const { enableCompileCache } = nodeModule;
if (enableCompileCache) {
  try {
    enableCompileCache();
  } catch {
    // ignore errors
  }
}

async function main() {
  const { main : runCLI } = await import('../dist/index.js');

  try {
    runCLI();
  } catch (err) {
    console.error(err);
  }
}

main();
