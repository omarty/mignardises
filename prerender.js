// Writes the server-rendered page into dist/index.html so crawlers and link previews get real content.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'

const { render } = await import('./dist-ssr/entry-server.js')
const file = new URL('./dist/index.html', import.meta.url)
const html = readFileSync(file, 'utf8')
if (!html.includes('<!--app-->')) throw new Error('Placeholder <!--app--> not found in dist/index.html')
writeFileSync(file, html.replace('<!--app-->', render()))
rmSync(new URL('./dist-ssr', import.meta.url), { recursive: true, force: true })
console.log('Prerendered dist/index.html')
