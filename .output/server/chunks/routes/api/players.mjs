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

const players = defineEventHandler(async (event) => {
  const api = new BalldontlieAPI({ apiKey: process.env.BDL_API_KEY });
  try {
    const players = await api.mlb.getPlayers();
    return players;
  } catch (error) {
    console.error("Failed to fetch players:", error);
    return { error: "Failed to fetch players." };
  }
});

export { players as default };
//# sourceMappingURL=players.mjs.map
