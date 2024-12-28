import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { BalldontlieAPI } from '@balldontlie/sdk';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const teams = defineEventHandler(async (event) => {
  const api = new BalldontlieAPI({ apiKey: process.env.BDL_API_KEY });
  try {
    const teams = await api.mlb.getTeams();
    return teams;
  } catch (error) {
    console.error("Failed to fetch teams:", error);
    return { error: "Failed to fetch teams." };
  }
});

export { teams as default };
//# sourceMappingURL=teams.mjs.map
