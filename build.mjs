import * as esbuild from 'esbuild'
import fs from 'fs';

if (fs.existsSync('./dist')) fs.rmSync('./dist', { recursive: true });
console.log(`esbuild: Bundling package`);
await esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/index.js',
  platform: 'node',
  format: 'cjs',
  packages: 'external',
  minify: false,
})