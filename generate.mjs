#!/usr/bin/env node 
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

async function generateDocs() {
  try {
    console.log('Generating HTML documentation...');
    await execPromise('FORMAT=html magidoc generate');
    
    console.log('Generating Markdown documentation...(skip)');
//    await execPromise('FORMAT=markdown magidoc generate');
    
    console.log('Documentation generation complete!');
  } catch (error) {
    console.error('Error generating documentation:', error);
  }
}

await generateDocs();

//(async ()=>{await generateDocs();}()}
