#!/usr/bin/env node
/**
 * QA Check — Validasi artikel sebelum merge ke main
 * Dipanggil dari GitHub Actions: node tools/qa-check.js
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse as parseYaml } from 'yaml';

const ARTIKEL_DIR = 'src/artikel';
const FACTS_FILE = process.env.FACTS_FILE || 'knowledge/facts.json';
const REQUIRED_FIELDS = ['title', 'description', 'date', 'eyebrow', 'layout', 'category'];
const VALID_CATEGORIES = ['car-care', 'lifestyle', 'motorsport'];
const MIN_CONTENT_LENGTH = 500;
const MAX_TITLE_LENGTH = 70;
const MAX_DESCRIPTION_LENGTH = 160;

let errors = [];
let warnings = [];

function err(msg) { errors.push(`❌ ${msg}`); }
function warn(msg) { warnings.push(`⚠️  ${msg}`); }
function ok(msg) { console.log(`✅ ${msg}`); }

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  try {
    return { data: parseYaml(match[1]), body: match[2] };
  } catch (e) {
    return { error: e.message };
  }
}

function checkArticle(filepath, filename) {
  const content = readFileSync(filepath, 'utf8');
  const fm = extractFrontmatter(content);

  if (!fm) {
    err(`${filename}: frontmatter tidak ditemukan atau format salah`);
    return null;
  }
  if (fm.error) {
    err(`${filename}: YAML parse error — ${fm.error}`);
    return null;
  }

  const { data, body } = fm;

  // 1. Cek field wajib
  for (const field of REQUIRED_FIELDS) {
    if (!data[field]) err(`${filename}: field '${field}' kosong / gak ada`);
  }

  // 2. Cek category valid
  if (data.category && !VALID_CATEGORIES.includes(data.category)) {
    err(`${filename}: category '${data.category}' gak valid. Pilih: ${VALID_CATEGORIES.join(', ')}`);
  }

  // 3. Cek layout
  if (data.layout && data.layout !== 'layouts/artikel.njk') {
    warn(`${filename}: layout '${data.layout}' — biasanya 'layouts/artikel.njk'`);
  }

  // 4. Cek panjang title
  if (data.title && data.title.length > MAX_TITLE_LENGTH) {
    warn(`${filename}: title ${data.title.length} char (max ${MAX_TITLE_LENGTH})`);
  }

  // 5. Cek panjang description
  if (data.description && data.description.length > MAX_DESCRIPTION_LENGTH) {
    warn(`${filename}: description ${data.description.length} char (max ${MAX_DESCRIPTION_LENGTH})`);
  }

  // 6. Cek panjang body
  if (body && body.trim().length < MIN_CONTENT_LENGTH) {
    err(`${filename}: body cuma ${body.trim().length} char (min ${MIN_CONTENT_LENGTH})`);
  }

  // 7. Cek double bracket markdown bug
  if (/\]\(\[/.test(body)) {
    err(`${filename}: ada markdown link double bracket '([...])' — fix jadi '(...)'`);
  }

  // 8. Cek WhatsApp link format
  if (body && body.includes('wa.me')) {
    const waLinks = body.match(/https?:\/\/wa\.me\/[0-9]+/g) || [];
    for (const link of waLinks) {
      if (!link.match(/^https:\/\/wa\.me\/628[0-9]+$/)) {
        warn(`${filename}: link WhatsApp '${link}' — format biasanya 'https://wa.me/628...'`);
      }
    }
  }

  return { data, body, filename };
}

function main() {
  console.log('🔍 QA Check — d\'Cartail\n');

  if (!existsSync(ARTIKEL_DIR)) {
    console.error(`❌ Folder ${ARTIKEL_DIR} gak ada`);
    process.exit(1);
  }

  const files = readdirSync(ARTIKEL_DIR).filter(f => f.endsWith('.md'));
  console.log(`📁 Found ${files.length} artikel\n`);

  const articles = [];
  const titles = new Map();
  const slugs = new Map();

  for (const f of files) {
    const result = checkArticle(join(ARTIKEL_DIR, f), f);
    if (result) articles.push(result);

    // Cek duplikat title
    if (result?.data?.title) {
      const t = result.data.title.toLowerCase().trim();
      if (titles.has(t)) {
        err(`${f}: title duplikat dengan ${titles.get(t)}`);
      } else {
        titles.set(t, f);
      }
    }
  }

  // Cek fakta vs facts.json (kalau ada)
  if (existsSync(FACTS_FILE)) {
    const facts = JSON.parse(readFileSync(FACTS_FILE, 'utf8'));
    console.log(`📋 Facts loaded: ${Object.keys(facts).length} entries\n`);

    for (const art of articles) {
      const text = art.body || '';
      // Cek harga yang disebut di artikel, bandingin sama facts.json
      const priceMatches = text.match(/Rp\.?\s?[\d.,]+/g) || [];
      for (const price of priceMatches) {
        const normalized = price.replace(/[.\s]/g, '').replace(',', '.');
        if (facts.prices && !facts.prices.includes(normalized)) {
          warn(`${art.filename}: harga '${price}' gak ada di facts.json — verify manual`);
        }
      }
    }
  } else {
    warn(`Facts file ${FACTS_FILE} gak ditemukan — skip validasi fakta`);
  }

  // Cek internal link
  console.log('\n🔗 Cek internal link...\n');
  for (const art of articles) {
    const links = (art.body || '').match(/\]\(\/artikel\/[^)]+\)/g) || [];
    for (const link of links) {
      const slug = link.match(/\/artikel\/([^/)]+)/)?.[1];
      if (slug && !files.some(f => f === `${slug}.md`)) {
        err(`${art.filename}: internal link '/artikel/${slug}/' → file gak ada`);
      }
    }
  }

  // Output
  console.log('\n' + '='.repeat(50));
  if (warnings.length) {
    console.log(`\n${warnings.length} WARNING:\n`);
    warnings.forEach(w => console.log(`  ${w}`));
  }
  if (errors.length) {
    console.log(`\n${errors.length} ERROR:\n`);
    errors.forEach(e => console.log(`  ${e}`));
    console.log('\n❌ QA FAILED — fix dulu sebelum merge\n');
    process.exit(1);
  }

  console.log(`\n✅ QA PASSED — ${articles.length} artikel valid\n`);
}

main();
