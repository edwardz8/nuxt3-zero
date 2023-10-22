globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, useQuery, useCookie, defineLazyEventHandler, useBody, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase, kebabCase, pascalCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash, withBase, joinURL } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import overlay from 'unstorage/drivers/overlay';
import memory$1 from 'unstorage/drivers/memory';
import { promises } from 'fs';
import { resolve, dirname, extname } from 'pathe';
import { fileURLToPath } from 'url';
import defu from 'defu';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import yaml from 'js-yaml';
import flat from 'flat';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { visit } from 'unist-util-visit';
import { stringifyEntitiesLight } from 'stringify-entities';
import { parseEntities } from 'parse-entities';
import { markdownLineEnding, markdownSpace, asciiAlpha, markdownLineEndingOrSpace, asciiAlphanumeric } from 'micromark-util-character';
import { factorySpace } from 'micromark-factory-space';
import { factoryWhitespace } from 'micromark-factory-whitespace';
import { codeFenced } from 'micromark-core-commonmark';
import { all } from 'mdast-util-to-hast';
import { detab } from 'detab';
import { u } from 'unist-builder';
import { encode } from 'mdurl';
import { position } from 'unist-util-position';
import htmlTags from 'html-tags';
import slugify from 'slugify';
import { getHighlighter, BUNDLED_LANGUAGES, BUNDLED_THEMES } from 'shiki-es';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"SEASON":"20232024","public":{"SEASON":"20232024","content":{"base":"_content","tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"highlight":{"theme":{"default":"material-palenight","dark":"github-dark"}},"wsUrl":""}},"content":{"cacheVersion":2,"cacheIntegrity":"370594990","transformers":["/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/server/transformers/markdown.mjs","/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/server/transformers/yaml.mjs","/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/server/transformers/json.mjs","/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/server/transformers/csv.mjs","/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/server/transformers/path-meta.mjs","/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/server/transformers/shiki.mjs"],"base":"_content","watch":{"ws":{"port":4000,"showURL":false}},"sources":["content"],"ignores":["\\.","-"],"locales":[],"highlight":{"theme":{"default":"material-palenight","dark":"github-dark"}},"markdown":{"tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"toc":{"depth":5,"searchDepth":5},"remarkPlugins":{},"rehypePlugins":{}},"yaml":{},"csv":{},"navigation":{"fields":[]}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {
  ['nitro:bundled:cache:content:parsed:content:blog:nhl-best-ball-fantasy-draft-underdog.md']: {
    import: () => import('../raw/nhl-best-ball-fantasy-draft-underdog.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3809-BDtoMW05yM7vo0ClrSPDzRsXqaU\"","mtime":"2023-10-22T20:00:59.528Z"}
  },
  ['nitro:bundled:cache:content:parsed:content:blog:nhl-props.md']: {
    import: () => import('../raw/nhl-props.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1d59-VOc+MUxAu0+58nHG6wsfx388kYI\"","mtime":"2023-10-22T20:00:59.528Z"}
  },
  ['nitro:bundled:cache:content:parsed:content:blog:nhl-shots-on-goal.md']: {
    import: () => import('../raw/nhl-shots-on-goal.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"665a-wGUPDWoWx1MBltC0chlSi3tR+M8\"","mtime":"2023-10-22T20:00:59.528Z"}
  },
  ['nitro:bundled:cache:content:parsed:content:blog:player-spotlight-espn-gabriel-valardi-kings.md']: {
    import: () => import('../raw/player-spotlight-espn-gabriel-valardi-kings.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"b5e-BcHTl3beobol5AEWGN7qmCssJhg\"","mtime":"2023-10-22T20:00:59.527Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const bundledStorage = ["/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memory$1(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      return decodeURI(parseURL(event.req.originalUrl || event.req.url).pathname).replace(/\/$/, "/index");
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/about.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"17a-SS0+XYKGBJ0Vam68mQ7AQuK/b8U\"",
    "mtime": "2023-10-22T20:00:53.228Z",
    "path": "../public/about.txt"
  },
  "/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"3387-GOyUPEy7mS9iDQt42WvVuCJSXJc\"",
    "mtime": "2023-10-22T20:00:53.227Z",
    "path": "../public/android-chrome-192x192.png"
  },
  "/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"a3d0-UfJzm4wJD+8yyX84EevG8TDHxIE\"",
    "mtime": "2023-10-22T20:00:53.227Z",
    "path": "../public/android-chrome-512x512.png"
  },
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"2d9d-T7Gjxm5AEYU273pndJp/Kvvf2+4\"",
    "mtime": "2023-10-22T20:00:53.226Z",
    "path": "../public/apple-touch-icon.png"
  },
  "/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"291-/X1htVtDJjThrhgRWEMqywfzOUc\"",
    "mtime": "2023-10-22T20:00:53.225Z",
    "path": "../public/favicon-16x16.png"
  },
  "/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"537-/5yx/oBBwmtWf+43r8EwbuB4gD8\"",
    "mtime": "2023-10-22T20:00:53.225Z",
    "path": "../public/favicon-32x32.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-1ZkZD41lXebKWkxi8dhfy7z8rNA\"",
    "mtime": "2023-10-22T20:00:53.224Z",
    "path": "../public/favicon.ico"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"107-vzG6+RvdL83iSkXj8qG+M3M8b2k\"",
    "mtime": "2023-10-22T20:00:53.091Z",
    "path": "../public/site.webmanifest"
  },
  "/_nuxt/ContentDoc-65cb21bf.mjs": {
    "type": "application/javascript",
    "etag": "\"746-QPyX1w6rSDU1BwLzHMx77pNy9Ck\"",
    "mtime": "2023-10-22T20:00:53.089Z",
    "path": "../public/_nuxt/ContentDoc-65cb21bf.mjs"
  },
  "/_nuxt/ContentNavigation-d2a3ba54.mjs": {
    "type": "application/javascript",
    "etag": "\"5af-K2B7aCSC2+Cf9Gy2cTtTnEkc8Q0\"",
    "mtime": "2023-10-22T20:00:53.089Z",
    "path": "../public/_nuxt/ContentNavigation-d2a3ba54.mjs"
  },
  "/_nuxt/Features-a5a1945c.mjs": {
    "type": "application/javascript",
    "etag": "\"787-Lvrm+48+3XRKS6NXObWVSHBTJSA\"",
    "mtime": "2023-10-22T20:00:53.088Z",
    "path": "../public/_nuxt/Features-a5a1945c.mjs"
  },
  "/_nuxt/InfoBox-b34628a3.mjs": {
    "type": "application/javascript",
    "etag": "\"3d4-ZwB4gc0KyKeaT/rmtyBaPi7Rq9o\"",
    "mtime": "2023-10-22T20:00:53.088Z",
    "path": "../public/_nuxt/InfoBox-b34628a3.mjs"
  },
  "/_nuxt/InfoBox.bd1c49b3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4a9-8bFIDZHFeTT0/+Qi0PZZoA9hL4k\"",
    "mtime": "2023-10-22T20:00:53.087Z",
    "path": "../public/_nuxt/InfoBox.bd1c49b3.css"
  },
  "/_nuxt/Markdown-e0643a2e.mjs": {
    "type": "application/javascript",
    "etag": "\"33c-f5+dAyF1dXdzbnJIFKL9Owb5gls\"",
    "mtime": "2023-10-22T20:00:53.087Z",
    "path": "../public/_nuxt/Markdown-e0643a2e.mjs"
  },
  "/_nuxt/ProseA-28329938.mjs": {
    "type": "application/javascript",
    "etag": "\"1d1-m5SSnglPC1noufj2HFgtvbld7ws\"",
    "mtime": "2023-10-22T20:00:53.086Z",
    "path": "../public/_nuxt/ProseA-28329938.mjs"
  },
  "/_nuxt/ProseBlockquote-793ff91b.mjs": {
    "type": "application/javascript",
    "etag": "\"c1-A0bZud9qcgxLF+R092/jt0MyXJ0\"",
    "mtime": "2023-10-22T20:00:53.086Z",
    "path": "../public/_nuxt/ProseBlockquote-793ff91b.mjs"
  },
  "/_nuxt/ProseCode-b6b99c22.mjs": {
    "type": "application/javascript",
    "etag": "\"13e-kDyY0OP7N/uy0kLXL4Si6bdliWk\"",
    "mtime": "2023-10-22T20:00:53.085Z",
    "path": "../public/_nuxt/ProseCode-b6b99c22.mjs"
  },
  "/_nuxt/ProseCode.c12da1e5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2023-10-22T20:00:53.085Z",
    "path": "../public/_nuxt/ProseCode.c12da1e5.css"
  },
  "/_nuxt/ProseCodeInline-edeba27b.mjs": {
    "type": "application/javascript",
    "etag": "\"b6-9yXkHnMd/JHa2u9jxAiy1JsUgpk\"",
    "mtime": "2023-10-22T20:00:53.084Z",
    "path": "../public/_nuxt/ProseCodeInline-edeba27b.mjs"
  },
  "/_nuxt/ProseEm-6a36406b.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-zMl+q6M+tdQwiRYKCVX39RVsU0A\"",
    "mtime": "2023-10-22T20:00:53.084Z",
    "path": "../public/_nuxt/ProseEm-6a36406b.mjs"
  },
  "/_nuxt/ProseH1-8dae236a.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-F1EimQqdgJfapdo4ZOZNFb6kBn4\"",
    "mtime": "2023-10-22T20:00:53.083Z",
    "path": "../public/_nuxt/ProseH1-8dae236a.mjs"
  },
  "/_nuxt/ProseH2-494d1255.mjs": {
    "type": "application/javascript",
    "etag": "\"1c8-dn9GZJghLtUyju/xmYl2/UMfk7I\"",
    "mtime": "2023-10-22T20:00:53.083Z",
    "path": "../public/_nuxt/ProseH2-494d1255.mjs"
  },
  "/_nuxt/ProseH3-e0dd32af.mjs": {
    "type": "application/javascript",
    "etag": "\"1c8-54oZ//8HokrF0WXwdW72ojpn8do\"",
    "mtime": "2023-10-22T20:00:53.081Z",
    "path": "../public/_nuxt/ProseH3-e0dd32af.mjs"
  },
  "/_nuxt/ProseH4-51ca67e4.mjs": {
    "type": "application/javascript",
    "etag": "\"1c8-ziFMnwxzvsNs2ttyDpgIPyFmv94\"",
    "mtime": "2023-10-22T20:00:53.081Z",
    "path": "../public/_nuxt/ProseH4-51ca67e4.mjs"
  },
  "/_nuxt/ProseH5-8f66234b.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-IiTEpRTkfpiiwg7DFDup+mc6fes\"",
    "mtime": "2023-10-22T20:00:53.080Z",
    "path": "../public/_nuxt/ProseH5-8f66234b.mjs"
  },
  "/_nuxt/ProseH6-de2540d2.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-/PR3iSG7sDHmV+MH2VpZC9Ptx60\"",
    "mtime": "2023-10-22T20:00:53.080Z",
    "path": "../public/_nuxt/ProseH6-de2540d2.mjs"
  },
  "/_nuxt/ProseHr-8a45ac00.mjs": {
    "type": "application/javascript",
    "etag": "\"90-EY0E/f4Ak1BiWy9LzT291I/PMaw\"",
    "mtime": "2023-10-22T20:00:53.079Z",
    "path": "../public/_nuxt/ProseHr-8a45ac00.mjs"
  },
  "/_nuxt/ProseImg-a950f37b.mjs": {
    "type": "application/javascript",
    "etag": "\"223-BflCihXqAS+7IE7VqNsmzhIdMyE\"",
    "mtime": "2023-10-22T20:00:53.079Z",
    "path": "../public/_nuxt/ProseImg-a950f37b.mjs"
  },
  "/_nuxt/ProseLi-589edb10.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-bvzKJbBvKb/AyuD/F2rDHBWTg4w\"",
    "mtime": "2023-10-22T20:00:53.078Z",
    "path": "../public/_nuxt/ProseLi-589edb10.mjs"
  },
  "/_nuxt/ProseOl-277ad8a4.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-S14SzR9uwcGXQ63e/R3PlzFjXXE\"",
    "mtime": "2023-10-22T20:00:53.077Z",
    "path": "../public/_nuxt/ProseOl-277ad8a4.mjs"
  },
  "/_nuxt/ProseP-3142eacb.mjs": {
    "type": "application/javascript",
    "etag": "\"b3-VfftlP2cOj60DAcWOrij1/mgyIY\"",
    "mtime": "2023-10-22T20:00:53.077Z",
    "path": "../public/_nuxt/ProseP-3142eacb.mjs"
  },
  "/_nuxt/ProseStrong-629c5027.mjs": {
    "type": "application/javascript",
    "etag": "\"b8-mYRuyB5uaf2g/ZGo4jNLzTALzsk\"",
    "mtime": "2023-10-22T20:00:53.076Z",
    "path": "../public/_nuxt/ProseStrong-629c5027.mjs"
  },
  "/_nuxt/ProseTable-9cf72ee3.mjs": {
    "type": "application/javascript",
    "etag": "\"bc-rxSojI8sr77tfYfKz+EouIjGCyg\"",
    "mtime": "2023-10-22T20:00:53.076Z",
    "path": "../public/_nuxt/ProseTable-9cf72ee3.mjs"
  },
  "/_nuxt/ProseTbody-c32d9471.mjs": {
    "type": "application/javascript",
    "etag": "\"b7-NI3khzuueZDJv4+12VAXGnWisLQ\"",
    "mtime": "2023-10-22T20:00:53.075Z",
    "path": "../public/_nuxt/ProseTbody-c32d9471.mjs"
  },
  "/_nuxt/ProseTd-766a3a0c.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-8E8+UlNtiU7jL7eCM9mvs753i+c\"",
    "mtime": "2023-10-22T20:00:53.075Z",
    "path": "../public/_nuxt/ProseTd-766a3a0c.mjs"
  },
  "/_nuxt/ProseTh-c57b3b24.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-zafhngWzJY+qTf49I0qkGI3pW0g\"",
    "mtime": "2023-10-22T20:00:53.074Z",
    "path": "../public/_nuxt/ProseTh-c57b3b24.mjs"
  },
  "/_nuxt/ProseThead-42920d3c.mjs": {
    "type": "application/javascript",
    "etag": "\"bc-qpcRrsNwv9ZAMe2sb3s3dpBeJB4\"",
    "mtime": "2023-10-22T20:00:53.074Z",
    "path": "../public/_nuxt/ProseThead-42920d3c.mjs"
  },
  "/_nuxt/ProseTr-cdf38b42.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-LNBhm75rOu/KDh9nrEoT4L8OaNQ\"",
    "mtime": "2023-10-22T20:00:53.073Z",
    "path": "../public/_nuxt/ProseTr-cdf38b42.mjs"
  },
  "/_nuxt/ProseUl-8454a320.mjs": {
    "type": "application/javascript",
    "etag": "\"b4-9DWBnU1JCv2CQid2AhS9gPy3Aiw\"",
    "mtime": "2023-10-22T20:00:53.073Z",
    "path": "../public/_nuxt/ProseUl-8454a320.mjs"
  },
  "/_nuxt/Tags-db2261e1.mjs": {
    "type": "application/javascript",
    "etag": "\"51c-BrEGfwWGUCFxcSDqMXpmh2IfM50\"",
    "mtime": "2023-10-22T20:00:53.072Z",
    "path": "../public/_nuxt/Tags-db2261e1.mjs"
  },
  "/_nuxt/_...slug_-a8bd87d8.mjs": {
    "type": "application/javascript",
    "etag": "\"152e-ArAJDZ0NVReGSgXvkx02ahpalA8\"",
    "mtime": "2023-10-22T20:00:53.072Z",
    "path": "../public/_nuxt/_...slug_-a8bd87d8.mjs"
  },
  "/_nuxt/_commonjsHelpers-6067da81.mjs": {
    "type": "application/javascript",
    "etag": "\"182-tBNP7RjpJYRYm4NRiJL8jCMhFXg\"",
    "mtime": "2023-10-22T20:00:53.071Z",
    "path": "../public/_nuxt/_commonjsHelpers-6067da81.mjs"
  },
  "/_nuxt/_player_-19f221d0.mjs": {
    "type": "application/javascript",
    "etag": "\"30c4-4diul0uEpcUAk5MmNhismpOkRTw\"",
    "mtime": "2023-10-22T20:00:53.071Z",
    "path": "../public/_nuxt/_player_-19f221d0.mjs"
  },
  "/_nuxt/_slug_-5859801a.mjs": {
    "type": "application/javascript",
    "etag": "\"723-gw3kRxnc5uvt4QWHMCFvq7DlH+g\"",
    "mtime": "2023-10-22T20:00:53.070Z",
    "path": "../public/_nuxt/_slug_-5859801a.mjs"
  },
  "/_nuxt/auth-97b156e3.mjs": {
    "type": "application/javascript",
    "etag": "\"b5-L7IJRWNfcBik6izRQKdQEDozg7o\"",
    "mtime": "2023-10-22T20:00:53.069Z",
    "path": "../public/_nuxt/auth-97b156e3.mjs"
  },
  "/_nuxt/entry-a347ca3d.mjs": {
    "type": "application/javascript",
    "etag": "\"5e9c4-6mkJBDfNTCjcTip/zhnhCZ0iNoo\"",
    "mtime": "2023-10-22T20:00:53.068Z",
    "path": "../public/_nuxt/entry-a347ca3d.mjs"
  },
  "/_nuxt/entry.ab98189f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e96b-0eHbay4oBXiIpd+4dhYe3DBqpC8\"",
    "mtime": "2023-10-22T20:00:53.067Z",
    "path": "../public/_nuxt/entry.ab98189f.css"
  },
  "/_nuxt/guest-9934a6c5.mjs": {
    "type": "application/javascript",
    "etag": "\"ac-lW8pFveqkVom2qW+7pGPlbpodVw\"",
    "mtime": "2023-10-22T20:00:53.066Z",
    "path": "../public/_nuxt/guest-9934a6c5.mjs"
  },
  "/_nuxt/index-0c5d2302.mjs": {
    "type": "application/javascript",
    "etag": "\"1819-B/9DiGNQUNX8scNZ+HqIzMnA08M\"",
    "mtime": "2023-10-22T20:00:53.065Z",
    "path": "../public/_nuxt/index-0c5d2302.mjs"
  },
  "/_nuxt/index-47877f6e.mjs": {
    "type": "application/javascript",
    "etag": "\"759-ss4KdlFqWw5IY6dwbt+Eo/yBfN0\"",
    "mtime": "2023-10-22T20:00:53.064Z",
    "path": "../public/_nuxt/index-47877f6e.mjs"
  },
  "/_nuxt/index-66734f5d.mjs": {
    "type": "application/javascript",
    "etag": "\"28bb-EifbPdMzmQJ9MQ1Brh806ffyPSo\"",
    "mtime": "2023-10-22T20:00:53.063Z",
    "path": "../public/_nuxt/index-66734f5d.mjs"
  },
  "/_nuxt/index-6b7baf1b.mjs": {
    "type": "application/javascript",
    "etag": "\"855-wyH7bqnojG+wkLKpay62igaKkvs\"",
    "mtime": "2023-10-22T20:00:53.062Z",
    "path": "../public/_nuxt/index-6b7baf1b.mjs"
  },
  "/_nuxt/index-850f5880.mjs": {
    "type": "application/javascript",
    "etag": "\"742-3fdIh/BgxWvAvFH8k7aO9/Hbqu0\"",
    "mtime": "2023-10-22T20:00:53.061Z",
    "path": "../public/_nuxt/index-850f5880.mjs"
  },
  "/_nuxt/login-dc2353c6.mjs": {
    "type": "application/javascript",
    "etag": "\"1034-uGBPMUvmH0ObwepLXOOpzFcdFeM\"",
    "mtime": "2023-10-22T20:00:53.060Z",
    "path": "../public/_nuxt/login-dc2353c6.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"3ba7-epSNmDqKPWe2mjakML1jn2DRj0M\"",
    "mtime": "2023-10-22T20:00:53.059Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/methods-6d63886e.mjs": {
    "type": "application/javascript",
    "etag": "\"463-tsZiAMckH6PQxteDewGZigUE3hs\"",
    "mtime": "2023-10-22T20:00:53.059Z",
    "path": "../public/_nuxt/methods-6d63886e.mjs"
  },
  "/_nuxt/preline-cc194cf5.mjs": {
    "type": "application/javascript",
    "etag": "\"10cb1-usGJ4G0tiHZefwqllt/NeC9VWOI\"",
    "mtime": "2023-10-22T20:00:53.058Z",
    "path": "../public/_nuxt/preline-cc194cf5.mjs"
  },
  "/_nuxt/register-6468b55a.mjs": {
    "type": "application/javascript",
    "etag": "\"12c5-qHQduwBbcXxbbTDZHT0DvM2iaak\"",
    "mtime": "2023-10-22T20:00:53.057Z",
    "path": "../public/_nuxt/register-6468b55a.mjs"
  },
  "/_nuxt/useLike-d45674e5.mjs": {
    "type": "application/javascript",
    "etag": "\"14c-/7qq8RQyeNav2Bj3bCtcR851sdA\"",
    "mtime": "2023-10-22T20:00:53.057Z",
    "path": "../public/_nuxt/useLike-d45674e5.mjs"
  },
  "/_nuxt/web-socket-2f283be2.mjs": {
    "type": "application/javascript",
    "etag": "\"32c-G20i4XDOHrPBATK7m7nXwDrf7T8\"",
    "mtime": "2023-10-22T20:00:53.056Z",
    "path": "../public/_nuxt/web-socket-2f283be2.mjs"
  },
  "/img/ArtemAnisimov.svg": {
    "type": "image/svg+xml",
    "etag": "\"58a7d-TvKvOvXZMO/UevkrBGXsJ1yANPo\"",
    "mtime": "2023-10-22T20:00:53.222Z",
    "path": "../public/img/ArtemAnisimov.svg"
  },
  "/img/Artemi_Panarin.svg": {
    "type": "image/svg+xml",
    "etag": "\"28ef5-xKmEfvyMjWy5nwxyXUK55v05h6g\"",
    "mtime": "2023-10-22T20:00:53.220Z",
    "path": "../public/img/Artemi_Panarin.svg"
  },
  "/img/Auston_Matthews.svg": {
    "type": "image/svg+xml",
    "etag": "\"52f39-qJL2ofNZXZXoOOoUm//97eMm9Hk\"",
    "mtime": "2023-10-22T20:00:53.218Z",
    "path": "../public/img/Auston_Matthews.svg"
  },
  "/img/BarnBurner.svg": {
    "type": "image/svg+xml",
    "etag": "\"2f48-P0TCykmblZB5/Hyb9dUS5QP+Fs8\"",
    "mtime": "2023-10-22T20:00:53.217Z",
    "path": "../public/img/BarnBurner.svg"
  },
  "/img/BradyTkachuk.png": {
    "type": "image/png",
    "etag": "\"122e7-urHsbICnburebprHGOISgyPCVRE\"",
    "mtime": "2023-10-22T20:00:53.216Z",
    "path": "../public/img/BradyTkachuk.png"
  },
  "/img/Brendan_Gallagher.png": {
    "type": "image/png",
    "etag": "\"146b1-PJ1hiZmOrw8XECwIL8EDJ8NgDQc\"",
    "mtime": "2023-10-22T20:00:53.212Z",
    "path": "../public/img/Brendan_Gallagher.png"
  },
  "/img/Carey_Price.svg": {
    "type": "image/svg+xml",
    "etag": "\"457d8-Pf5eN1KCs001QYEOUDLYmRO+Z1g\"",
    "mtime": "2023-10-22T20:00:53.211Z",
    "path": "../public/img/Carey_Price.svg"
  },
  "/img/Connor_Mcdavid.svg": {
    "type": "image/svg+xml",
    "etag": "\"25689-zEM/uolOhnmM3B8XlNLkj/79Oh4\"",
    "mtime": "2023-10-22T20:00:53.210Z",
    "path": "../public/img/Connor_Mcdavid.svg"
  },
  "/img/DavidPastrnak.png": {
    "type": "image/png",
    "etag": "\"17c4b-YROeiTM/+iWHKJtE3b7q50fPmA8\"",
    "mtime": "2023-10-22T20:00:53.209Z",
    "path": "../public/img/DavidPastrnak.png"
  },
  "/img/DrakeBatherson.png": {
    "type": "image/png",
    "etag": "\"11c59-1pmzTmCa0GRxnLr+kisiI30LW04\"",
    "mtime": "2023-10-22T20:00:53.208Z",
    "path": "../public/img/DrakeBatherson.png"
  },
  "/img/FaceWashersJersey.svg": {
    "type": "image/svg+xml",
    "etag": "\"927b-f6pJMGrOLhHcENbWgwHCO2xRXq4\"",
    "mtime": "2023-10-22T20:00:53.207Z",
    "path": "../public/img/FaceWashersJersey.svg"
  },
  "/img/FlapjackBag.svg": {
    "type": "image/svg+xml",
    "etag": "\"18d28-+FJ/S+KmONutOcpmpnN7o+fl6Tg\"",
    "mtime": "2023-10-22T20:00:53.206Z",
    "path": "../public/img/FlapjackBag.svg"
  },
  "/img/John_Tavares.svg": {
    "type": "image/svg+xml",
    "etag": "\"71863-283o2Q6MdHyuQ9GQDwyJLwYvxbc\"",
    "mtime": "2023-10-22T20:00:53.205Z",
    "path": "../public/img/John_Tavares.svg"
  },
  "/img/MaxDomi.svg": {
    "type": "image/svg+xml",
    "etag": "\"3c3fe-s+KRFMqGoyA6vLwz7FWgEwJer4k\"",
    "mtime": "2023-10-22T20:00:53.203Z",
    "path": "../public/img/MaxDomi.svg"
  },
  "/img/Mitch_Marner.svg": {
    "type": "image/svg+xml",
    "etag": "\"1cf5f-0AyFzjfvEeiTzEdt9gAn24kOOwM\"",
    "mtime": "2023-10-22T20:00:53.201Z",
    "path": "../public/img/Mitch_Marner.svg"
  },
  "/img/Nikita_Kucherov.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b6ef-VRLES3mxVCVJaL7dYbVoVzrij3w\"",
    "mtime": "2023-10-22T20:00:53.200Z",
    "path": "../public/img/Nikita_Kucherov.svg"
  },
  "/img/Nippers.png": {
    "type": "image/png",
    "etag": "\"134d4-U7dWAl++Y/OV+3EBrPeDvtdZkVM\"",
    "mtime": "2023-10-22T20:00:53.198Z",
    "path": "../public/img/Nippers.png"
  },
  "/img/PlumbersJersey.svg": {
    "type": "image/svg+xml",
    "etag": "\"f833-IaQX+39s/2A8l5Y1XWEBVbqYoIA\"",
    "mtime": "2023-10-22T20:00:53.197Z",
    "path": "../public/img/PlumbersJersey.svg"
  },
  "/img/SeanMonahan.svg": {
    "type": "image/svg+xml",
    "etag": "\"64f09-BKDyrwlfAwLzbnyVlTvJXZ0QIxA\"",
    "mtime": "2023-10-22T20:00:53.196Z",
    "path": "../public/img/SeanMonahan.svg"
  },
  "/img/Skates-Fighter-Jet.svg": {
    "type": "image/svg+xml",
    "etag": "\"18290-YjZadNOJJZ1OzqoVeVUKWF7oOdo\"",
    "mtime": "2023-10-22T20:00:53.194Z",
    "path": "../public/img/Skates-Fighter-Jet.svg"
  },
  "/img/Skates-Retro-Pink-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"16bc8-vDl30ngpMBY5ihNvU0skCYlebgc\"",
    "mtime": "2023-10-22T20:00:53.193Z",
    "path": "../public/img/Skates-Retro-Pink-2.svg"
  },
  "/img/Steven_Stamkos.svg": {
    "type": "image/svg+xml",
    "etag": "\"7b7ae-pgWzYzsKcWeXwTgkTR4CA0Kro58\"",
    "mtime": "2023-10-22T20:00:53.191Z",
    "path": "../public/img/Steven_Stamkos.svg"
  },
  "/img/UFOBag.svg": {
    "type": "image/svg+xml",
    "etag": "\"14259-e4WDPWdh62bnjcfZsL3BssKD9F8\"",
    "mtime": "2023-10-22T20:00:53.189Z",
    "path": "../public/img/UFOBag.svg"
  },
  "/img/William_Nylander.png": {
    "type": "image/png",
    "etag": "\"1b17e-Mz7wRJp5y79h9K9kYDn9BldHQ70\"",
    "mtime": "2023-10-22T20:00:53.189Z",
    "path": "../public/img/William_Nylander.png"
  },
  "/img/William_Nylander.svg": {
    "type": "image/svg+xml",
    "etag": "\"2ccfc-jmxu+fJLwL2UtjkYIxWhJp7uKiw\"",
    "mtime": "2023-10-22T20:00:53.188Z",
    "path": "../public/img/William_Nylander.svg"
  },
  "/img/diggs.png": {
    "type": "image/png",
    "etag": "\"31234-bc0SABqPYpPUIG3xDmah6mHH1Bg\"",
    "mtime": "2023-10-22T20:00:53.187Z",
    "path": "../public/img/diggs.png"
  },
  "/img/ekeler.png": {
    "type": "image/png",
    "etag": "\"89e4d-o4OiFUu4g17tgBiX+jZBGMfDUl8\"",
    "mtime": "2023-10-22T20:00:53.184Z",
    "path": "../public/img/ekeler.png"
  },
  "/img/footballguy2.jpg": {
    "type": "image/jpeg",
    "etag": "\"ddb40-c5bHvjtgjkcYJKurIgA56JJLML8\"",
    "mtime": "2023-10-22T20:00:53.181Z",
    "path": "../public/img/footballguy2.jpg"
  },
  "/img/footballguy5.jpg": {
    "type": "image/jpeg",
    "etag": "\"e106c-qHxdgAvRm76LIAFVxvnnDxoLf0w\"",
    "mtime": "2023-10-22T20:00:53.177Z",
    "path": "../public/img/footballguy5.jpg"
  },
  "/img/gabriel.jpeg": {
    "type": "image/jpeg",
    "etag": "\"e01c-gl1YtjBdcx/2KYzaP5WxB+uLFbk\"",
    "mtime": "2023-10-22T20:00:53.174Z",
    "path": "../public/img/gabriel.jpeg"
  },
  "/img/hill.png": {
    "type": "image/png",
    "etag": "\"cc853-eAsmae7YcpRgz/39FmN4gcrJE7o\"",
    "mtime": "2023-10-22T20:00:53.171Z",
    "path": "../public/img/hill.png"
  },
  "/img/hockey-bench.JPG": {
    "type": "image/jpeg",
    "etag": "\"1a4087-uC5t90bvi/jeHNfMM8CeP14TgCA\"",
    "mtime": "2023-10-22T20:00:53.168Z",
    "path": "../public/img/hockey-bench.JPG"
  },
  "/img/hockeyphone.png": {
    "type": "image/png",
    "etag": "\"35b82-H/TABzLEgxxdBb+JRXtlaP43y+k\"",
    "mtime": "2023-10-22T20:00:53.164Z",
    "path": "../public/img/hockeyphone.png"
  },
  "/img/johnny_g.svg": {
    "type": "image/svg+xml",
    "etag": "\"9eba3-TlpcaPoPfXY6x5M92iLaATZCAh4\"",
    "mtime": "2023-10-22T20:00:53.162Z",
    "path": "../public/img/johnny_g.svg"
  },
  "/img/josh_allen.JPG": {
    "type": "image/jpeg",
    "etag": "\"a68a0-mvRxg/D2Nw0tyxFPIZqIiiDs/fc\"",
    "mtime": "2023-10-22T20:00:53.160Z",
    "path": "../public/img/josh_allen.JPG"
  },
  "/img/karlsson.png": {
    "type": "image/png",
    "etag": "\"1e7f8-Dnn7h4X7oFv1acA+X9f0yTHilMM\"",
    "mtime": "2023-10-22T20:00:53.158Z",
    "path": "../public/img/karlsson.png"
  },
  "/img/locker-room.jpeg": {
    "type": "image/jpeg",
    "etag": "\"2fa468-yYy5Gu3aOrREaIA0HuL4uBPCREk\"",
    "mtime": "2023-10-22T20:00:53.154Z",
    "path": "../public/img/locker-room.jpeg"
  },
  "/img/mixon.png": {
    "type": "image/png",
    "etag": "\"60903-y2LKld/vHmJzIwcb2EjIkCbSr/U\"",
    "mtime": "2023-10-22T20:00:53.147Z",
    "path": "../public/img/mixon.png"
  },
  "/img/ovi.svg": {
    "type": "image/svg+xml",
    "etag": "\"f4984-R+K6QylF5fNuEYO2hyDbsa52Qz0\"",
    "mtime": "2023-10-22T20:00:53.144Z",
    "path": "../public/img/ovi.svg"
  },
  "/img/pk_subban.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d06f-Nm54twp2B208vUeThNnqiiXQ/8k\"",
    "mtime": "2023-10-22T20:00:53.141Z",
    "path": "../public/img/pk_subban.svg"
  },
  "/img/player.jpg": {
    "type": "image/jpeg",
    "etag": "\"16b0e0-sMf3qlncJ43+eUbK3ncE+SIyQMQ\"",
    "mtime": "2023-10-22T20:00:53.139Z",
    "path": "../public/img/player.jpg"
  },
  "/img/qb-close.JPG": {
    "type": "image/jpeg",
    "etag": "\"15879e-6Bky2J7q5ej1MvcmTmzN7wbbJUo\"",
    "mtime": "2023-10-22T20:00:53.128Z",
    "path": "../public/img/qb-close.JPG"
  },
  "/img/qb.JPG": {
    "type": "image/jpeg",
    "etag": "\"c8cb5-sBIWbDDLZKWwZBRNcYPadVRTcqM\"",
    "mtime": "2023-10-22T20:00:53.125Z",
    "path": "../public/img/qb.JPG"
  },
  "/img/qb_8.JPG": {
    "type": "image/jpeg",
    "etag": "\"bb048-YQCPYT/nFmCfWoMTtRbga7XnHnk\"",
    "mtime": "2023-10-22T20:00:53.122Z",
    "path": "../public/img/qb_8.JPG"
  },
  "/img/qb_run.JPG": {
    "type": "image/jpeg",
    "etag": "\"b688b-YwkUDKfNDK7qA3QqgVy5tKG/y+w\"",
    "mtime": "2023-10-22T20:00:53.119Z",
    "path": "../public/img/qb_run.JPG"
  },
  "/img/rb.JPG": {
    "type": "image/jpeg",
    "etag": "\"120e19-n6O8Dcy/QaPZTfbz5661BcNWhqo\"",
    "mtime": "2023-10-22T20:00:53.116Z",
    "path": "../public/img/rb.JPG"
  },
  "/img/rosterbox.png": {
    "type": "image/png",
    "etag": "\"86173-h5b2YGzBz1gbb+bmiw0Zmhw2K6k\"",
    "mtime": "2023-10-22T20:00:53.111Z",
    "path": "../public/img/rosterbox.png"
  },
  "/img/rotorink.jpeg": {
    "type": "image/jpeg",
    "etag": "\"10e5e6-TYPWXhcB3MO9ddY5i8k34EZFzG8\"",
    "mtime": "2023-10-22T20:00:53.108Z",
    "path": "../public/img/rotorink.jpeg"
  },
  "/img/singletary.jpeg": {
    "type": "image/jpeg",
    "etag": "\"e62c-xPmcl57eTx05iapS+FVbFbjedkA\"",
    "mtime": "2023-10-22T20:00:53.106Z",
    "path": "../public/img/singletary.jpeg"
  },
  "/img/te.JPG": {
    "type": "image/jpeg",
    "etag": "\"b1749-1WVBMpbwi2yQ3JyOOo20fRlmLko\"",
    "mtime": "2023-10-22T20:00:53.104Z",
    "path": "../public/img/te.JPG"
  },
  "/img/te_jump.JPG": {
    "type": "image/jpeg",
    "etag": "\"dead4-RE1QzyNRTSv5vQFKevXvydYWY38\"",
    "mtime": "2023-10-22T20:00:53.101Z",
    "path": "../public/img/te_jump.JPG"
  },
  "/img/underdog.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1a2e9-SSjFSdYEyw3KcWaklm0FJxPUpTI\"",
    "mtime": "2023-10-22T20:00:53.098Z",
    "path": "../public/img/underdog.jpeg"
  },
  "/img/wr.JPG": {
    "type": "image/jpeg",
    "etag": "\"15a68e-G9vrpVJTb22cKcCHvwRir73cYcg\"",
    "mtime": "2023-10-22T20:00:53.094Z",
    "path": "../public/img/wr.JPG"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _152570 = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    $not: (item, condition) => !match(item, condition),
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    $in: (item, condition) => ensureArray(condition).some((cond) => match(item, cond)),
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    $type: (item, condition) => typeof item === String(condition),
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    $lt: (item, condition) => {
      return item < condition;
    },
    $lte: (item, condition) => {
      return item <= condition;
    },
    $gt: (item, condition) => {
      return item > condition;
    },
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before || 1;
    after = after || 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    (data, params) => params.surround ? surround(data, params.surround) : data,
    (data, params) => params.skip ? data.slice(params.skip) : data,
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    (data, params) => apply(withoutKeys(params.without))(data),
    (data, params) => apply(withKeys(params.only))(data),
    (data, params) => params.first ? data[0] : data
  ];
  return async (query) => {
    const data = await getContentsList();
    return pipelines.reduce(($data, pipe) => pipe($data, query.params()) || $data, data);
  };
}

const FRONTMATTER_DELIMITER = "---";
function stringifyFrontMatter(data, content = "") {
  data = flat.flatten(data, {
    safe: true
  });
  return [
    FRONTMATTER_DELIMITER,
    yaml.dump(data, { lineWidth: -1 }),
    FRONTMATTER_DELIMITER,
    content
  ].join("\n");
}
function parseFrontMatter(content) {
  let data = {};
  if (content.startsWith(FRONTMATTER_DELIMITER)) {
    const idx = content.indexOf("\n" + FRONTMATTER_DELIMITER);
    if (idx !== -1) {
      const frontmatter = content.slice(4, idx);
      if (frontmatter) {
        data = yaml.load(frontmatter);
        content = content.slice(idx + 4);
      }
    }
  }
  return {
    content,
    data: flat.unflatten(data || {}, {})
  };
}

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = ["h2", "h3", "h4"].reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function track(options_) {
  const options = options_ || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(value = "") {
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}
function containerFlow(parent, context, safeOptions = {}) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const tracker = track(safeOptions);
  const results = [];
  let index = -1;
  indexStack.push(-1);
  while (++index < children.length) {
    const child = children[index];
    indexStack[indexStack.length - 1] = index;
    results.push(tracker.move(context.handle(child, parent, context, {
      before: "\n",
      after: "\n",
      ...tracker.current()
    })));
    if (child.type !== "list") {
      context.bulletLastUsed = void 0;
    }
    if (index < children.length - 1) {
      results.push(tracker.move(between(child, children[index + 1])));
    }
  }
  indexStack.pop();
  return results.join("");
  function between(left, right) {
    let index2 = context.join.length;
    while (index2--) {
      const result = context.join[index2](left, right, parent, context);
      if (result === true || result === 1) {
        break;
      }
      if (typeof result === "number") {
        return "\n".repeat(1 + result);
      }
      if (result === false) {
        return "\n\n<!---->\n\n";
      }
    }
    return "\n\n";
  }
}
function containerPhrasing(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const results = [];
  let index = -1;
  let before = safeOptions.before;
  indexStack.push(-1);
  let tracker = track(safeOptions);
  while (++index < children.length) {
    const child = children[index];
    let after;
    indexStack[indexStack.length - 1] = index;
    if (index + 1 < children.length) {
      let handle = context.handle.handlers[children[index + 1].type];
      if (handle && handle.peek) {
        handle = handle.peek;
      }
      after = handle ? handle(children[index + 1], parent, context, {
        before: "",
        after: "",
        ...tracker.current()
      }).charAt(0) : "";
    } else {
      after = safeOptions.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
      before = " ";
      tracker = track(safeOptions);
      tracker.move(results.join(""));
    }
    results.push(tracker.move(context.handle(child, parent, context, {
      ...tracker.current(),
      before,
      after
    })));
    before = results[results.length - 1].slice(-1);
  }
  indexStack.pop();
  return results.join("");
}
function checkQuote(context) {
  const marker = context.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error("Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`");
  }
  return marker;
}

const own = {}.hasOwnProperty;
const shortcut = /^[^\t\n\r "#'.<=>`}]+$/;
const baseFense = 2;
const toMarkdown = {
  unsafe: [
    {
      character: "\r",
      inConstruct: ["leafComponentLabel", "containerComponentLabel"]
    },
    {
      character: "\n",
      inConstruct: ["leafComponentLabel", "containerComponentLabel"]
    },
    {
      before: "[^:]",
      character: ":",
      after: "[A-Za-z]",
      inConstruct: ["phrasing"]
    },
    { atBreak: true, character: ":", after: ":" }
  ],
  handlers: {
    containerComponent: containerComponent$1,
    textComponent,
    componentContainerSection
  }
};
function componentContainerSection(node, _, context) {
  context.indexStack = context.stack;
  return `#${node.name}

${content(node, context)}`;
}
function textComponent(node, _, context) {
  context.indexStack = context.stack;
  const exit = context.enter(node.type);
  let value = ":" + (node.name || "") + label$3(node, context) + attributes$3(node, context);
  value += "\n" + content(node, context);
  exit();
  return value;
}
let nest = 0;
function containerComponent$1(node, _, context) {
  context.indexStack = context.stack;
  const prefix = ":".repeat(baseFense + nest);
  nest += 1;
  const exit = context.enter(node.type);
  let value = prefix + (node.name || "") + label$3(node, context) + attributes$3(node, context);
  let subvalue;
  if (node.fmAttributes) {
    value += "\n" + stringifyFrontMatter(node.fmAttributes).trim();
  }
  if (node.type === "containerComponent") {
    subvalue = content(node, context);
    if (subvalue) {
      value += "\n" + subvalue;
    }
    value += "\n" + prefix;
    if (nest > 1) {
      value = value.split("\n").map((line) => "  " + line).join("\n");
    }
  }
  nest -= 1;
  exit();
  return value;
}
containerComponent$1.peek = function peekComponent() {
  return ":";
};
function label$3(node, context) {
  let label2 = node;
  if (node.type === "containerComponent") {
    if (!inlineComponentLabel(node)) {
      return "";
    }
    label2 = node.children[0];
  }
  const exit = context.enter("label");
  const subexit = context.enter(node.type + "Label");
  const value = containerPhrasing(label2, context, { before: "[", after: "]" });
  subexit();
  exit();
  return value ? "[" + value + "]" : "";
}
function attributes$3(node, context) {
  const quote = checkQuote(context);
  const subset = node.type === "textComponent" ? [quote] : [quote, "\n", "\r"];
  const attrs = node.attributes || {};
  const values = [];
  let id;
  let classesFull = "";
  let classes = "";
  let value;
  let key;
  let index;
  for (key in attrs) {
    if (own.call(attrs, key) && attrs[key] != null) {
      value = String(attrs[key]);
      if (key === "id") {
        id = shortcut.test(value) ? "#" + value : quoted("id", value);
      } else if (key === "class") {
        value = value.split(/[\t\n\r ]+/g);
        classesFull = [];
        classes = [];
        index = -1;
        while (++index < value.length) {
          (shortcut.test(value[index]) ? classes : classesFull).push(value[index]);
        }
        classesFull = classesFull.length ? quoted("class", classesFull.join(" ")) : "";
        classes = classes.length ? "." + classes.join(".") : "";
      } else if (key.startsWith(":") && value === "true") {
        values.push(key.slice(1));
      } else {
        values.push(quoted(key, value));
      }
    }
  }
  if (classesFull) {
    values.unshift(classesFull);
  }
  if (classes) {
    values.unshift(classes);
  }
  if (id) {
    values.unshift(id);
  }
  return values.length ? "{" + values.join(" ") + "}" : "";
  function quoted(key2, value2) {
    return key2 + "=" + quote + stringifyEntitiesLight(value2, { subset }) + quote;
  }
}
function content(node, context) {
  const content2 = inlineComponentLabel(node) ? Object.assign({}, node, { children: node.children.slice(1) }) : node;
  return containerFlow(content2, context);
}
function inlineComponentLabel(node) {
  return node.children && node.children[0] && node.children[0].data && node.children[0].data.componentLabel;
}

const canContainEols = ["textComponent"];
const enter = {
  componentContainer: enterContainer,
  componentContainerSection: enterContainerSection,
  componentContainerDataSection: enterContainerDataSection,
  componentContainerAttributes: enterAttributes,
  componentContainerLabel: enterContainerLabel,
  componentLeaf: enterLeaf,
  componentLeafAttributes: enterAttributes,
  componentText: enterText,
  textSpan: enterTextSpan,
  componentTextAttributes: enterAttributes
};
const exit = {
  componentContainerSectionTitle: exitContainerSectionTitle,
  listUnordered: conditionalExit,
  listOrdered: conditionalExit,
  listItem: conditionalExit,
  componentContainerSection: exitContainerSection,
  componentContainerDataSection: exitContainerDataSection,
  componentContainer: exitContainer,
  componentContainerAttributeClassValue: exitAttributeClassValue,
  componentContainerAttributeIdValue: exitAttributeIdValue,
  componentContainerAttributeName: exitAttributeName,
  componentContainerAttributeValue: exitAttributeValue,
  componentContainerAttributes: exitAttributes,
  componentContainerLabel: exitContainerLabel,
  componentContainerName: exitName,
  componentContainerAttributeInitializerMarker() {
    const attributes = this.getData("componentAttributes");
    attributes[attributes.length - 1][1] = "";
  },
  componentLeaf: exitToken,
  componentLeafAttributeClassValue: exitAttributeClassValue,
  componentLeafAttributeIdValue: exitAttributeIdValue,
  componentLeafAttributeName: exitAttributeName,
  componentLeafAttributeValue: exitAttributeValue,
  componentLeafAttributes: exitAttributes,
  componentLeafName: exitName,
  componentText: exitToken,
  textSpan: exitToken,
  componentTextAttributeClassValue: exitAttributeClassValue,
  componentTextAttributeIdValue: exitAttributeIdValue,
  componentTextAttributeName: exitAttributeName,
  componentTextAttributeValue: exitAttributeValue,
  componentTextAttributes: exitAttributes,
  componentTextName: exitName
};
function enterContainer(token) {
  enterToken.call(this, "containerComponent", token);
}
function exitContainer(token) {
  const container = this.stack[this.stack.length - 1];
  if (container.children.length > 1) {
    const dataSection = container.children.find((child) => child.rawData);
    container.rawData = dataSection?.rawData;
  }
  container.children = container.children.flatMap((child) => {
    if (child.rawData) {
      return [];
    }
    if (child.name === "default" || !child.name) {
      return child.children;
    }
    child.data = {
      hName: "component-slot",
      hProperties: {
        ...child.attributes,
        [`v-slot:${child.name}`]: ""
      }
    };
    return child;
  });
  this.exit(token);
}
function enterContainerSection(token) {
  enterToken.call(this, "componentContainerSection", token);
}
function enterContainerDataSection(token) {
  enterToken.call(this, "componentContainerDataSection", token);
}
function exitContainerSection(token) {
  this.exit(token);
}
function exitContainerDataSection(token) {
  let section = this.stack[this.stack.length - 1];
  while (section.type === "listItem" || section.type === "list") {
    const [stackToken] = this.tokenStack[this.tokenStack.length - 1];
    this.exit(stackToken);
    section = this.stack[this.stack.length - 1];
  }
  if (section.type === "componentContainerDataSection") {
    section.rawData = this.sliceSerialize(token);
    this.exit(token);
  }
}
function exitContainerSectionTitle(token) {
  this.stack[this.stack.length - 1].name = this.sliceSerialize(token);
}
function enterLeaf(token) {
  enterToken.call(this, "leafComponent", token);
}
function enterTextSpan(token) {
  this.enter({ type: "textComponent", name: "span", attributes: {}, children: [] }, token);
}
function enterText(token) {
  enterToken.call(this, "textComponent", token);
}
function enterToken(type, token) {
  this.enter({ type, name: "", attributes: {}, children: [] }, token);
}
function exitName(token) {
  this.stack[this.stack.length - 1].name = this.sliceSerialize(token);
}
function enterContainerLabel(token) {
  this.enter({ type: "paragraph", data: { componentLabel: true }, children: [] }, token);
}
function exitContainerLabel(token) {
  this.exit(token);
}
function enterAttributes() {
  this.setData("componentAttributes", []);
  this.buffer();
}
function exitAttributeIdValue(token) {
  this.getData("componentAttributes").push(["id", parseEntities(this.sliceSerialize(token))]);
}
function exitAttributeClassValue(token) {
  this.getData("componentAttributes").push(["class", parseEntities(this.sliceSerialize(token))]);
}
function exitAttributeValue(token) {
  const attributes = this.getData("componentAttributes");
  attributes[attributes.length - 1][1] = parseEntities(this.sliceSerialize(token));
}
function exitAttributeName(token) {
  this.getData("componentAttributes").push([this.sliceSerialize(token), true]);
}
function exitAttributes() {
  const attributes = this.getData("componentAttributes");
  const cleaned = {};
  let index = -1;
  let attribute;
  while (++index < attributes.length) {
    attribute = attributes[index];
    const name = kebabCase(attribute[0]);
    if (name === "class" && cleaned.class) {
      cleaned.class += " " + attribute[1];
    } else {
      cleaned[name] = attribute[1];
    }
  }
  this.setData("componentAttributes");
  this.resume();
  let stackTop = this.stack[this.stack.length - 1];
  if (stackTop.type === "paragraph") {
    stackTop = stackTop.children[stackTop.children.length - 1];
  }
  stackTop.attributes = cleaned;
}
function exitToken(token) {
  this.exit(token);
}
function conditionalExit(token) {
  const [section] = this.tokenStack[this.tokenStack.length - 1];
  if (section.type === token.type) {
    this.exit(token);
  }
}
const fromMarkdown = {
  canContainEols,
  enter,
  exit
};

const ContainerSequenceSize = 2;
const SectionSequenceSize = 3;
const slotSeparatorCode = 35;
const slotSeparatorLength = 1;
const Codes = {
  EOF: null,
  space: 32,
  quotationMark: 34,
  hash: 35,
  apostrophe: 39,
  openingParentheses: 40,
  closingParentheses: 41,
  comma: 44,
  dash: 45,
  dot: 46,
  colon: 58,
  LessThan: 60,
  equals: 61,
  greaterThan: 62,
  uppercaseX: 88,
  openingSquareBracket: 91,
  backSlash: 92,
  closingSquareBracket: 93,
  underscore: 95,
  backTick: 96,
  lowercaseX: 120,
  openingCurlyBracket: 123,
  closingCurlyBracket: 125
};

function createLabel(effects, ok, nok, type, markerType, stringType, disallowEol) {
  let size = 0;
  let balance = 0;
  return start;
  function start(code) {
    if (code !== Codes.openingSquareBracket) {
      throw new Error("expected `[`");
    }
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    return afterStart;
  }
  function afterStart(code) {
    if (code === Codes.closingSquareBracket) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    return atBreak(code);
  }
  function atBreak(code) {
    if (code === Codes.EOF || size > 999) {
      return nok(code);
    }
    if (code === Codes.closingSquareBracket && !balance--) {
      return atClosingBrace(code);
    }
    if (markdownLineEnding(code)) {
      if (disallowEol) {
        return nok(code);
      }
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkText", { contentType: "text" });
    return label(code);
  }
  function label(code) {
    if (code === Codes.EOF || markdownLineEnding(code) || size > 999) {
      effects.exit("chunkText");
      return atBreak(code);
    }
    if (code === Codes.openingSquareBracket && ++balance > 3) {
      return nok(code);
    }
    if (code === Codes.closingSquareBracket && !balance--) {
      effects.exit("chunkText");
      return atClosingBrace(code);
    }
    effects.consume(code);
    return code === Codes.backSlash ? labelEscape : label;
  }
  function atClosingBrace(code) {
    effects.exit(stringType);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.exit(type);
    return ok;
  }
  function labelEscape(code) {
    if (code === Codes.openingSquareBracket || code === Codes.backSlash || code === Codes.closingSquareBracket) {
      effects.consume(code);
      size++;
      return label;
    }
    return label(code);
  }
}

const label$2 = { tokenize: tokenizeLabel$2, partial: true };
const gfmCheck = { tokenize: checkGfmTaskCheckbox, partial: true };
function tokenize$4(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.openingSquareBracket) {
      throw new Error("expected `[`");
    }
    if (self.previous === Codes.EOF && self._gfmTasklistFirstContentOfListItem) {
      return effects.check(gfmCheck, nok, attemptLabel)(code);
    }
    return attemptLabel(code);
  }
  function attemptLabel(code) {
    effects.enter("textSpan");
    return effects.attempt(label$2, exit, nok)(code);
  }
  function exit(code) {
    if (code === Codes.openingParentheses || code === Codes.openingSquareBracket) {
      return nok(code);
    }
    effects.exit("textSpan");
    return ok(code);
  }
}
function tokenizeLabel$2(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentTextLabel", "componentTextLabelMarker", "componentTextLabelString");
}
const tokenizeSpan = {
  tokenize: tokenize$4
};
function checkGfmTaskCheckbox(effects, ok, nok) {
  return enter;
  function enter(code) {
    effects.enter("formGfmTaskCheckbox");
    effects.consume(code);
    return check;
  }
  function check(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return check;
    }
    if (code === Codes.uppercaseX || code === Codes.lowercaseX) {
      effects.consume(code);
      return check;
    }
    if (code === Codes.closingSquareBracket) {
      effects.exit("formGfmTaskCheckbox");
      return ok(code);
    }
    return nok(code);
  }
}

function createAttributes(effects, ok, nok, attributesType, attributesMarkerType, attributeType, attributeIdType, attributeClassType, attributeNameType, attributeInitializerType, attributeValueLiteralType, attributeValueType, attributeValueMarker, attributeValueData, disallowEol) {
  let type;
  let marker;
  return start;
  function start(code) {
    effects.enter(attributesType);
    effects.enter(attributesMarkerType);
    effects.consume(code);
    effects.exit(attributesMarkerType);
    return between;
  }
  function between(code) {
    if (code === Codes.hash) {
      type = attributeIdType;
      return shortcutStart(code);
    }
    if (code === Codes.dot) {
      type = attributeClassType;
      return shortcutStart(code);
    }
    if (code === Codes.colon || code === Codes.underscore || asciiAlpha(code)) {
      effects.enter(attributeType);
      effects.enter(attributeNameType);
      effects.consume(code);
      return code === Codes.colon ? bindAttributeName : name;
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, between, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, between)(code);
    }
    return end(code);
  }
  function shortcutStart(code) {
    effects.enter(attributeType);
    effects.enter(type);
    effects.enter(type + "Marker");
    effects.consume(code);
    effects.exit(type + "Marker");
    return shortcutStartAfter;
  }
  function shortcutStartAfter(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.hash || code === Codes.apostrophe || code === Codes.dot || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick || code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      return nok(code);
    }
    effects.enter(type + "Value");
    effects.consume(code);
    return shortcut;
  }
  function shortcut(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.apostrophe || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick) {
      return nok(code);
    }
    if (code === Codes.hash || code === Codes.dot || code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      effects.exit(type + "Value");
      effects.exit(type);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return shortcut;
  }
  function bindAttributeName(code) {
    if (code === Codes.dash || asciiAlphanumeric(code)) {
      effects.consume(code);
      return bindAttributeName;
    }
    effects.exit(attributeNameType);
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, bindAttributeNameAfter, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, bindAttributeNameAfter)(code);
    }
    return bindAttributeNameAfter(code);
  }
  function bindAttributeNameAfter(code) {
    if (code === Codes.equals) {
      effects.enter(attributeInitializerType);
      effects.consume(code);
      effects.exit(attributeInitializerType);
      return valueBefore;
    }
    effects.exit(attributeType);
    return nok(code);
  }
  function name(code) {
    if (code === Codes.dash || code === Codes.dot || code === Codes.colon || code === Codes.underscore || asciiAlphanumeric(code)) {
      effects.consume(code);
      return name;
    }
    effects.exit(attributeNameType);
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, nameAfter, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, nameAfter)(code);
    }
    return nameAfter(code);
  }
  function nameAfter(code) {
    if (code === Codes.equals) {
      effects.enter(attributeInitializerType);
      effects.consume(code);
      effects.exit(attributeInitializerType);
      return valueBefore;
    }
    effects.exit(attributeType);
    return between(code);
  }
  function valueBefore(code) {
    if (code === Codes.EOF || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick || code === Codes.closingCurlyBracket || disallowEol && markdownLineEnding(code)) {
      return nok(code);
    }
    if (code === Codes.quotationMark || code === Codes.apostrophe) {
      effects.enter(attributeValueLiteralType);
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      marker = code;
      return valueQuotedStart;
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, valueBefore, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, valueBefore)(code);
    }
    effects.enter(attributeValueType);
    effects.enter(attributeValueData);
    effects.consume(code);
    marker = void 0;
    return valueUnquoted;
  }
  function valueUnquoted(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.apostrophe || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick) {
      return nok(code);
    }
    if (code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      effects.exit(attributeValueData);
      effects.exit(attributeValueType);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return valueUnquoted;
  }
  function valueQuotedStart(code) {
    if (code === marker) {
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      effects.exit(attributeValueLiteralType);
      effects.exit(attributeType);
      return valueQuotedAfter;
    }
    effects.enter(attributeValueType);
    return valueQuotedBetween(code);
  }
  function valueQuotedBetween(code) {
    if (code === marker) {
      effects.exit(attributeValueType);
      return valueQuotedStart(code);
    }
    if (code === Codes.EOF) {
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      return disallowEol ? nok(code) : factoryWhitespace(effects, valueQuotedBetween)(code);
    }
    effects.enter(attributeValueData);
    effects.consume(code);
    return valueQuoted;
  }
  function valueQuoted(code) {
    if (code === marker || code === Codes.EOF || markdownLineEnding(code)) {
      effects.exit(attributeValueData);
      return valueQuotedBetween(code);
    }
    effects.consume(code);
    return valueQuoted;
  }
  function valueQuotedAfter(code) {
    return code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code) ? between(code) : end(code);
  }
  function end(code) {
    if (code === Codes.closingCurlyBracket) {
      effects.enter(attributesMarkerType);
      effects.consume(code);
      effects.exit(attributesMarkerType);
      effects.exit(attributesType);
      return ok;
    }
    return nok(code);
  }
}

const attributes$2 = { tokenize: tokenizeAttributes$2, partial: true };
const validEvents = [
  "textSpan",
  "attentionSequence",
  "codeText",
  "link",
  "image"
];
function tokenize$3(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.openingCurlyBracket) {
      throw new Error("expected `{`");
    }
    const event = self.events[self.events.length - 1];
    if (markdownLineEnding(self.previous) || !event || !validEvents.includes(event[1].type)) {
      return nok;
    }
    return effects.attempt(attributes$2, ok, nok)(code);
  }
}
function tokenizeAttributes$2(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentTextAttributes", "componentTextAttributesMarker", "componentTextAttribute", "componentTextAttributeId", "componentTextAttributeClass", "componentTextAttributeName", "componentTextAttributeInitializerMarker", "componentTextAttributeValueLiteral", "componentTextAttributeValue", "componentTextAttributeValueMarker", "componentTextAttributeValueData");
}
const tokenizeAttribute = {
  tokenize: tokenize$3
};

function createName(effects, ok, nok, nameType) {
  const self = this;
  return start;
  function start(code) {
    if (asciiAlpha(code)) {
      effects.enter(nameType);
      effects.consume(code);
      return name;
    }
    return nok(code);
  }
  function name(code) {
    if (code === Codes.dash || code === Codes.underscore || asciiAlphanumeric(code)) {
      effects.consume(code);
      return name;
    }
    effects.exit(nameType);
    return self.previous === Codes.underscore ? nok(code) : ok(code);
  }
}

const label$1 = { tokenize: tokenizeLabel$1, partial: true };
const attributes$1 = { tokenize: tokenizeAttributes$1, partial: true };
function previous(code) {
  return code !== Codes.colon || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenize$2(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.colon) {
      throw new Error("expected `:`");
    }
    if (self.previous !== null && !markdownLineEndingOrSpace(self.previous) && ![Codes.openingSquareBracket].includes(self.previous)) {
      return nok(code);
    }
    if (!previous.call(self, self.previous)) {
      throw new Error("expected correct previous");
    }
    effects.enter("componentText");
    effects.enter("componentTextMarker");
    effects.consume(code);
    effects.exit("componentTextMarker");
    return createName.call(self, effects, afterName, nok, "componentTextName");
  }
  function afterName(code) {
    if (code === Codes.colon) {
      return nok(code);
    }
    if (code === Codes.openingSquareBracket) {
      return effects.attempt(label$1, afterLabel, afterLabel)(code);
    }
    if (code === Codes.openingCurlyBracket) {
      return effects.attempt(attributes$1, afterAttributes, afterAttributes)(code);
    }
    return exit(code);
  }
  function afterAttributes(code) {
    if (code === Codes.openingSquareBracket) {
      return effects.attempt(label$1, afterLabel, afterLabel)(code);
    }
    return exit(code);
  }
  function afterLabel(code) {
    if (code === Codes.openingCurlyBracket) {
      return effects.attempt(attributes$1, exit, exit)(code);
    }
    return exit(code);
  }
  function exit(code) {
    effects.exit("componentText");
    return ok(code);
  }
}
function tokenizeLabel$1(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentTextLabel", "componentTextLabelMarker", "componentTextLabelString");
}
function tokenizeAttributes$1(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentTextAttributes", "componentTextAttributesMarker", "componentTextAttribute", "componentTextAttributeId", "componentTextAttributeClass", "componentTextAttributeName", "componentTextAttributeInitializerMarker", "componentTextAttributeValueLiteral", "componentTextAttributeValue", "componentTextAttributeValueMarker", "componentTextAttributeValueData");
}
const tokenizeInline = {
  tokenize: tokenize$2,
  previous
};

function sizeChunks(chunks) {
  let index = -1;
  let size = 0;
  while (++index < chunks.length) {
    size += typeof chunks[index] === "string" ? chunks[index].length : 1;
  }
  return size;
}
function prefixSize(events, type) {
  const tail = events[events.length - 1];
  if (!tail || tail[1].type !== type) {
    return 0;
  }
  return sizeChunks(tail[2].sliceStream(tail[1]));
}
function linePrefixSize(events) {
  let size = 0;
  let index = events.length - 1;
  let tail = events[index];
  while (index >= 0 && tail && tail[1].type === "linePrefix" && tail[0] === "exit") {
    size += sizeChunks(tail[2].sliceStream(tail[1]));
    index -= 1;
    tail = events[index];
  }
  return size;
}
const useTokenState = (tokenName) => {
  const token = {
    isOpen: false,
    enter: (effects) => {
      const initialState = token.isOpen;
      token.exit(effects);
      effects.enter(tokenName);
      token.isOpen = true;
      return () => {
        token.isOpen = initialState;
      };
    },
    enterOnce: (effects) => {
      const initialState = token.isOpen;
      if (!token.isOpen) {
        effects.enter(tokenName);
        token.isOpen = true;
      }
      return () => {
        token.isOpen = initialState;
      };
    },
    exit: (effects) => {
      const initialState = token.isOpen;
      if (token.isOpen) {
        effects.exit(tokenName);
        token.isOpen = false;
      }
      return () => {
        token.isOpen = initialState;
      };
    }
  };
  return token;
};

function tokenizeFrontMatter(effects, ok, _nok, next, initialPrefix) {
  let previous;
  return effects.attempt({
    tokenize: tokenizeDataSection,
    partial: true
  }, dataSectionOpen, next);
  function tokenizeDataSection(effects2, ok2, nok) {
    const self = this;
    let size = 0;
    let sectionIndentSize = 0;
    return closingPrefixAfter;
    function dataLineFirstSpaces(code) {
      if (markdownSpace(code)) {
        effects2.consume(code);
        sectionIndentSize += 1;
        return dataLineFirstSpaces;
      }
      effects2.exit("space");
      return closingPrefixAfter(code);
    }
    function closingPrefixAfter(code) {
      if (markdownSpace(code)) {
        effects2.enter("space");
        return dataLineFirstSpaces(code);
      }
      if (sectionIndentSize === 0) {
        sectionIndentSize = linePrefixSize(self.events);
      }
      effects2.enter("componentContainerSectionSequence");
      return closingSectionSequence(code);
    }
    function closingSectionSequence(code) {
      if (code === Codes.dash || markdownSpace(code)) {
        effects2.consume(code);
        size++;
        return closingSectionSequence;
      }
      if (size < SectionSequenceSize) {
        return nok(code);
      }
      if (sectionIndentSize !== initialPrefix) {
        return nok(code);
      }
      if (!markdownLineEnding(code)) {
        return nok(code);
      }
      effects2.exit("componentContainerSectionSequence");
      return factorySpace(effects2, ok2, "whitespace")(code);
    }
  }
  function dataSectionOpen(code) {
    effects.enter("componentContainerDataSection");
    return effects.attempt({
      tokenize: tokenizeDataSection,
      partial: true
    }, dataSectionClose, dataChunkStart)(code);
  }
  function dataChunkStart(code) {
    if (code === null) {
      effects.exit("componentContainerDataSection");
      effects.exit("componentContainer");
      return ok(code);
    }
    const token = effects.enter("chunkDocument", {
      contentType: "document",
      previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return dataContentContinue(code);
  }
  function dataContentContinue(code) {
    if (code === null) {
      effects.exit("chunkDocument");
      effects.exit("componentContainerDataSection");
      effects.exit("componentContainer");
      return ok(code);
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit("chunkDocument");
      return effects.attempt({
        tokenize: tokenizeDataSection,
        partial: true
      }, dataSectionClose, dataChunkStart);
    }
    effects.consume(code);
    return dataContentContinue;
  }
  function dataSectionClose(code) {
    effects.exit("componentContainerDataSection");
    return factorySpace(effects, next, "whitespace")(code);
  }
}

const label = { tokenize: tokenizeLabel, partial: true };
const attributes = { tokenize: tokenizeAttributes, partial: true };
function tokenize$1(effects, ok, nok) {
  const self = this;
  const initialPrefix = linePrefixSize(this.events);
  let sizeOpen = 0;
  let previous;
  const childContainersSequenceSize = [];
  let containerFirstLine = true;
  const section = useTokenState("componentContainerSection");
  return start;
  function start(code) {
    if (code !== Codes.colon) {
      throw new Error("expected `:`");
    }
    effects.enter("componentContainer");
    effects.enter("componentContainerFence");
    effects.enter("componentContainerSequence");
    return sequenceOpen(code);
  }
  function tokenizeSectionClosing(effects2, ok2, nok2) {
    let size = 0;
    let sectionIndentSize = 0;
    let revertSectionState;
    return closingPrefixAfter;
    function closingPrefixAfter(code) {
      sectionIndentSize = linePrefixSize(self.events);
      revertSectionState = section.exit(effects2);
      effects2.enter("componentContainerSectionSequence");
      return closingSectionSequence(code);
    }
    function closingSectionSequence(code) {
      if (code === slotSeparatorCode) {
        effects2.consume(code);
        size++;
        return closingSectionSequence;
      }
      if (size !== slotSeparatorLength) {
        revertSectionState();
        return nok2(code);
      }
      if (sectionIndentSize !== initialPrefix) {
        revertSectionState();
        return nok2(code);
      }
      if (!asciiAlpha(code)) {
        revertSectionState();
        return nok2(code);
      }
      effects2.exit("componentContainerSectionSequence");
      return factorySpace(effects2, ok2, "whitespace")(code);
    }
  }
  function sectionOpen(code) {
    section.enter(effects);
    if (markdownLineEnding(code)) {
      return factorySpace(effects, lineStart, "whitespace")(code);
    }
    effects.enter("componentContainerSectionTitle");
    return sectionTitle(code);
  }
  function sectionTitle(code) {
    if (markdownLineEnding(code)) {
      effects.exit("componentContainerSectionTitle");
      return factorySpace(effects, lineStart, "linePrefix", 4)(code);
    }
    effects.consume(code);
    return sectionTitle;
  }
  function sequenceOpen(code) {
    if (code === Codes.colon) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }
    if (sizeOpen < ContainerSequenceSize) {
      return nok(code);
    }
    effects.exit("componentContainerSequence");
    return createName.call(self, effects, afterName, nok, "componentContainerName")(code);
  }
  function afterName(code) {
    return code === Codes.openingSquareBracket ? effects.attempt(label, afterLabel, afterLabel)(code) : afterLabel(code);
  }
  function afterLabel(code) {
    return code === Codes.openingCurlyBracket ? effects.attempt(attributes, afterAttributes, afterAttributes)(code) : afterAttributes(code);
  }
  function afterAttributes(code) {
    return factorySpace(effects, openAfter, "whitespace")(code);
  }
  function openAfter(code) {
    effects.exit("componentContainerFence");
    if (code === null) {
      effects.exit("componentContainer");
      return ok(code);
    }
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return self.interrupt ? ok : contentStart;
    }
    return nok(code);
  }
  function contentStart(code) {
    if (code === null) {
      effects.exit("componentContainer");
      return ok(code);
    }
    if (containerFirstLine && (code === Codes.dash || markdownSpace(code))) {
      containerFirstLine = false;
      return tokenizeFrontMatter(effects, ok, nok, contentStart, initialPrefix)(code);
    }
    effects.enter("componentContainerContent");
    return lineStart(code);
  }
  function lineStartAfterPrefix(code) {
    if (code === null) {
      return after(code);
    }
    if (!childContainersSequenceSize.length && (code === slotSeparatorCode || code === Codes.space)) {
      return effects.attempt({ tokenize: tokenizeSectionClosing, partial: true }, sectionOpen, chunkStart)(code);
    }
    if (code === Codes.colon) {
      return effects.attempt({ tokenize: tokenizeClosingFence, partial: true }, after, chunkStart)(code);
    }
    return chunkStart(code);
  }
  function lineStart(code) {
    if (code === null) {
      return after(code);
    }
    return initialPrefix ? factorySpace(effects, lineStartAfterPrefix, "linePrefix", initialPrefix + 1)(code) : lineStartAfterPrefix(code);
  }
  function chunkStart(code) {
    if (code === null) {
      return after(code);
    }
    section.enterOnce(effects);
    const token = effects.enter("chunkDocument", {
      contentType: "document",
      previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return contentContinue(code);
  }
  function contentContinue(code) {
    if (code === null) {
      effects.exit("chunkDocument");
      return after(code);
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit("chunkDocument");
      return lineStart;
    }
    effects.consume(code);
    return contentContinue;
  }
  function after(code) {
    section.exit(effects);
    effects.exit("componentContainerContent");
    effects.exit("componentContainer");
    return ok(code);
  }
  function tokenizeClosingFence(effects2, ok2, nok2) {
    let size = 0;
    return factorySpace(effects2, closingPrefixAfter, "linePrefix", 4);
    function closingPrefixAfter(code) {
      effects2.enter("componentContainerFence");
      effects2.enter("componentContainerSequence");
      return closingSequence(code);
    }
    function closingSequence(code) {
      if (code === Codes.colon) {
        effects2.consume(code);
        size++;
        return closingSequence;
      }
      if (childContainersSequenceSize.length) {
        if (size === childContainersSequenceSize[childContainersSequenceSize.length - 1]) {
          childContainersSequenceSize.pop();
        }
        return nok2(code);
      }
      if (size !== sizeOpen) {
        return nok2(code);
      }
      effects2.exit("componentContainerSequence");
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code);
    }
    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects2.exit("componentContainerFence");
        return ok2(code);
      }
      childContainersSequenceSize.push(size);
      return nok2(code);
    }
  }
}
function tokenizeLabel(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentContainerLabel", "componentContainerLabelMarker", "componentContainerLabelString", true);
}
function tokenizeAttributes(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentContainerAttributes", "componentContainerAttributesMarker", "componentContainerAttribute", "componentContainerAttributeId", "componentContainerAttributeClass", "componentContainerAttributeName", "componentContainerAttributeInitializerMarker", "componentContainerAttributeValueLiteral", "componentContainerAttributeValue", "componentContainerAttributeValueMarker", "componentContainerAttributeValueData", true);
}
const tokenizeContainer = {
  tokenize: tokenize$1,
  concrete: true
};

function tokenize(effects, ok, nok) {
  const self = this;
  return factorySpace(effects, lineStart, "linePrefix");
  function lineStart(code) {
    if (prefixSize(self.events, "linePrefix") < 4) {
      return nok(code);
    }
    switch (code) {
      case Codes.backTick:
        return codeFenced.tokenize.call(self, effects, ok, nok)(code);
      case Codes.colon:
        return tokenizeContainer.tokenize.call(self, effects, ok, nok)(code);
      default:
        return nok(code);
    }
  }
}
const tokenizeContainerIndented = {
  tokenize
};

function micromarkComponentsExtension() {
  return {
    text: {
      [Codes.colon]: tokenizeInline,
      [Codes.openingSquareBracket]: [tokenizeSpan],
      [Codes.openingCurlyBracket]: tokenizeAttribute
    },
    flow: {
      [Codes.colon]: [tokenizeContainer]
    },
    flowInitial: {
      "-2": tokenizeContainerIndented,
      "-1": tokenizeContainerIndented,
      [Codes.space]: tokenizeContainerIndented
    }
  };
}

const toFrontMatter = (yamlString) => `---
${yamlString}
---`;
const remarkMDC = (function({ components = [] } = {}) {
  const data = this.data();
  add("micromarkExtensions", micromarkComponentsExtension());
  add("fromMarkdownExtensions", fromMarkdown);
  add("toMarkdownExtensions", toMarkdown);
  function add(field, value) {
    if (!data[field]) {
      data[field] = [];
    }
    data[field].push(value);
  }
  if (components.length) {
    return async (tree, { data: data2 }) => {
      const jobs = [];
      visit(tree, ["textComponent", "leafComponent", "containerComponent"], (node) => {
        bindNode(node);
        const { instance: handler, options } = components.find((c) => c.name === node.name) || {};
        if (handler) {
          jobs.push(handler(options)(node, data2));
        }
      });
      await Promise.all(jobs);
      return tree;
    };
  }
  return (tree) => {
    visit(tree, ["textComponent", "leafComponent", "containerComponent"], (node) => {
      bindNode(node);
    });
  };
});
function bindNode(node) {
  const nodeData = node.data || (node.data = {});
  node.fmAttributes = getNodeData(node);
  nodeData.hName = kebabCase(node.name);
  nodeData.hProperties = bindData({
    ...node.attributes,
    ...node.fmAttributes
  });
}
function getNodeData(node) {
  if (!node.rawData) {
    return {};
  }
  const yaml = node.rawData.replace(/\s-+$/, "");
  const { data } = parseFrontMatter(toFrontMatter(yaml));
  return data;
}
function bindData(data) {
  const entries = Object.entries(data).map(([key, value]) => {
    if (key.startsWith(":")) {
      return [key, value];
    }
    if (typeof value === "string") {
      return [key, value];
    }
    return [`:${key}`, JSON.stringify(value)];
  });
  return Object.fromEntries(entries);
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(node.position, "code", {
    language,
    filename,
    highlights,
    code
  }, [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]);
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(h({}, "input", {
      type: "checkbox",
      checked: node.checked,
      disabled: true
    }));
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h({
    start: position(result[1]).start,
    end: position(result[result.length - 1]).end
  }, "tbody", wrap(result.slice(1), true));
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return null;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return null;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, ...options } = plugin;
      stream.use(instance, options);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process({
      value: content,
      data: options.data
    }, (error, file) => {
      if (error) {
        return reject(error);
      }
      Object.assign(options.data, file?.data || {});
      resolve(file?.result);
    });
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      passThrough: ["element"]
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
  return content;
}

const _47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47markdown_46mjs = {
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content) => {
    const config = { ...useRuntimeConfig().content?.markdown || {} };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
};
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: await import(name).then((m) => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const _47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47yaml_46mjs = {
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
};

const _47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47json_46mjs = {
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed = content;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
};

const _47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47csv_46mjs = {
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content) => {
    const config = { ...useRuntimeConfig().content?.csv || {} };
    const csvToJson = await import('csvtojson').then((m) => m.default || m);
    const parsed = await csvToJson({ output: "json", ...config }).fromString(content);
    return {
      _id,
      _type: "csv",
      body: parsed
    };
  }
};

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const _47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47path_45meta_46mjs = {
  name: "path-meta",
  extensions: [".*"],
  transform(content) {
    const { locales, defaultLocale } = useRuntimeConfig().content || {};
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = parts.join("/");
    return {
      _path: generatePath(filePath),
      _draft: isDraft(filePath),
      _partial: isPartial(filePath),
      _locale,
      ...content,
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
};
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path) => withLeadingSlash(withoutTrailingSlash(path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/")));
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index/, "").replace(/\.draft/, "");
}

const highlightConfig = useRuntimeConfig().content.highlight;
const withContentBase = (url) => {
  return withBase(url, `/api/${useRuntimeConfig().public.content.base}`);
};
const _47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47shiki_46mjs = {
  name: "markdown",
  extensions: [".md"],
  transform: async (content) => {
    const tokenColors = {};
    const codeBlocks = [];
    const inlineCodes = [];
    visit(content.body, (node) => node.tag === "code" && node?.props.code || node.tag === "code-inline" && (node.props?.lang || node.props?.language), (node) => {
      if (node.tag === "code") {
        codeBlocks.push(node);
      } else if (node.tag === "code-inline") {
        inlineCodes.push(node);
      }
    });
    await Promise.all(codeBlocks.map(highlightBlock));
    await Promise.all(inlineCodes.map(highlightInline));
    if (Object.values(tokenColors).length) {
      const colors = [];
      for (const colorClass of Object.values(tokenColors)) {
        Object.entries(colorClass.colors).forEach(([variant, color]) => {
          if (variant === "default") {
            colors.unshift(`.${colorClass.className}{color:${color}}`);
          } else {
            colors.push(`.${variant} .${colorClass.className}{color:${color}}`);
          }
        });
      }
      content.body.children.push({
        type: "element",
        tag: "style",
        children: [{ type: "text", value: colors.join("") }]
      });
    }
    return content;
    async function highlightInline(node) {
      const code = node.children[0].value;
      const lines = await $fetch(withContentBase("highlight"), {
        method: "POST",
        body: {
          code,
          lang: node.props.lang || node.props.language,
          theme: highlightConfig.theme
        }
      });
      node.children = lines[0].map(tokenSpan);
      node.props = node.props || {};
      node.props.class = "colored";
      return node;
    }
    async function highlightBlock(node) {
      const { code, language: lang, highlights = [] } = node.props;
      const lines = await $fetch(withContentBase("highlight"), {
        method: "POST",
        body: {
          code,
          lang,
          theme: highlightConfig.theme
        }
      });
      const innerCodeNode = node.children[0].children[0];
      innerCodeNode.children = lines.map((line, lineIndex) => ({
        type: "element",
        tag: "span",
        props: { class: ["line", highlights.includes(lineIndex + 1) ? "highlight" : ""].join(" ").trim() },
        children: line.map(tokenSpan)
      }));
      return node;
    }
    function getColorProps(token) {
      if (!token.color) {
        return {};
      }
      if (typeof token.color === "string") {
        return { style: { color: token.color } };
      }
      const key = Object.values(token.color).join("");
      if (!tokenColors[key]) {
        tokenColors[key] = {
          colors: token.color,
          className: "ct-" + Math.random().toString(16).substring(2, 8)
        };
      }
      return { class: tokenColors[key].className };
    }
    function tokenSpan(token) {
      return {
        type: "element",
        tag: "span",
        props: getColorProps(token),
        children: [{ type: "text", value: token.content }]
      };
    }
  }
};

const transformers = [_47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47markdown_46mjs, _47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47yaml_46mjs, _47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47json_46mjs, _47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47csv_46mjs, _47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47path_45meta_46mjs, _47Users_47edwardz_8_47vue_45projects_47nuxt3_45zero_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47shiki_46mjs];
const getParser = (ext) => transformers.find(p => ext.match(new RegExp(p.extensions.join("|"),  "i")) && p.parse);
const getTransformers = (ext) => transformers.filter(p => ext.match(new RegExp(p.extensions.join("|"),  "i")) && p.transform);

async function parseContent(id, content) {
  const nitroApp = useNitroApp();
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const ext = extname(id);
  const plugin = getParser(ext);
  if (!plugin) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parsed = await plugin.parse(file._id, file.body);
  const transformers = getTransformers(ext);
  const result = await transformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    return cur.transform(next);
  }, Promise.resolve(parsed));
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}

const isPreview = (event) => {
  const previewToken = useQuery(event).previewToken || useCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = useQuery(event).previewToken || useCookie(event, "previewToken");
  return { key };
};

const sourceStorage = prefixStorage(useStorage(), "content:source");
prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const contentIgnores = contentConfig.ignores.map((p) => typeof p === "string" ? new RegExp(`^${p}|:${p}`) : p);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || contentIgnores.some((prefix) => prefix.test(key))) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(previewKeys.map(async (key2) => {
        const meta = await sourceStorage.getMeta(key2);
        if (meta?.__deleted) {
          keysSet.delete(key2.substring(previewPrefix.length));
        } else {
          keysSet.add(key2.substring(previewPrefix.length));
        }
      }));
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const hash$1 = hash({
    meta,
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
const createServerQueryFetch = (event, path) => (query) => {
  if (path) {
    if (query.params().first) {
      query.where({ _path: withoutTrailingSlash(path) });
    } else {
      query.where({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
    }
  }
  if (!query.params().sort?.length) {
    query.sort({ _file: 1, $numeric: true });
  }
  return createPipelineFetcher(() => getContentsList(event))(query);
};
function serverQueryContent(event, path, ...pathParts) {
  if (typeof path === "string") {
    path = withLeadingSlash(joinURL(path, ...pathParts));
    return createQuery(createServerQueryFetch(event, path));
  }
  return createQuery(createServerQueryFetch(event), path || {});
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const memory = {};
const getContentQuery = (event) => {
  const { qid } = event.context.params;
  const query = useQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseQueryParams(query._params);
    return memory[qid];
  }
  if (memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseQueryParams(query._params);
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  query.where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      query.where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = query.sort.split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where[key] = query[key];
  }
  return query;
};

const _349193 = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const contents = await serverQueryContent(event, query).find();
  if (query.first && Array.isArray(contents) && contents.length === 0) {
    throw createError({
      statusMessage: "Document not found!",
      statusCode: 404,
      data: {
        description: "Could not find document for the given query.",
        query
      }
    });
  }
  return contents;
});

const _108945 = defineEventHandler(async (event) => {
  const now = Date.now();
  await serverQueryContent(event).find();
  return {
    generatedAt: now,
    generateTime: Date.now() - now
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().content;
  const pickNavigationFields = pick(["title", ...navigation.fields]);
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(navItem, pickNavigationFields(dirConfig));
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}

const _600228 = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const contents = await serverQueryContent(event, query).where({
    _partial: false,
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

var information_for_contributors = [
	"This file has been converted from https://github.com/docusgen/vscode-extension/blob/main/syntaxes/mdc.tmLanguage.json",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request."
];
var version = "https://github.com/docusgen/vscode-extension/blob/1303abd16342880a42a4d143a660da049c79ea6c/syntaxes/mdc.tmLanguage.json";
var name = "markdown";
var injectionSelector = "L:text.html.markdown";
var scopeName = "text.markdown.mdc";
var patterns = [
	{
		include: "text.html.markdown#frontMatter"
	},
	{
		include: "#component_block"
	},
	{
		include: "#block"
	}
];
var repository = {
	block: {
		comment: "Same as `text.html.markdown#block`, but without `raw_block`",
		patterns: [
			{
				include: "#component_block"
			},
			{
				include: "text.html.markdown#separator"
			},
			{
				include: "#heading"
			},
			{
				include: "#blockquote"
			},
			{
				include: "#lists"
			},
			{
				include: "#paragraph"
			},
			{
				include: "text.html.markdown#fenced_code_block"
			},
			{
				include: "text.html.markdown#link-def"
			},
			{
				include: "text.html.markdown#html"
			}
		]
	},
	inline: {
		patterns: [
			{
				include: "#component_inline"
			},
			{
				include: "#span"
			},
			{
				include: "#markdown_attributes"
			}
		]
	},
	markdown_attributes: {
		match: "(?x)([^ ])(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
		name: "markup.component.attribute",
		captures: {
			"4": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		}
	},
	span: {
		match: "(?x)\n  (\\[)           # Open\n    ([^]]*)\n  (\\])\n  (               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )?",
		name: "markup.component.span",
		captures: {
			"2": {
				name: "string.other.link.description.title.markdown"
			},
			"4": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			}
		}
	},
	attributes: {
		match: "(?x)(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
		name: "markup.attributes",
		captures: {
			"3": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		}
	},
	component_inline: {
		match: "(?x)\n  (^|\\G|\\s+)\n  (:)           # component colon\n  (?i:             # component name\n    (\\w[\\w\\d-]*)\n  )\n  (\n      ({[^}]*})        # attributes\n      (\\[[^\\]]*\\]?) # slot\n      # reverse order\n    | (\\[[^\\]]*\\])  # slot\n      ({[^}]*})?       # attributes\n  )?",
		name: "markup.component.inline",
		captures: {
			"2": {
				name: "punctuation.definition.tag.start.component"
			},
			"3": {
				name: "entity.name.tag.component"
			},
			"5": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			},
			"6": {
				patterns: [
					{
						include: "#span"
					}
				]
			},
			"7": {
				patterns: [
					{
						include: "#span"
					}
				]
			},
			"8": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			}
		}
	},
	component_block: {
		begin: "(?x)\n  (^|\\G)(\\s*)\n  (:{2,})     # component colons\n  (?i:\n    (\\w[\\w\\d-]+)   # component name\n    (                 # folowing spaces or attributes\n        \\s*\n      | {([^{]*)}\n    )\n    $\n  )",
		name: "markup.component.block",
		end: "(^|\\G)(\\2)(\\3)\\s*$",
		beginCaptures: {
			"4": {
				name: "entity.name.tag.component"
			},
			"5": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		},
		patterns: [
			{
				include: "#content"
			}
		]
	},
	content: {
		begin: "(^|\\G)(\\s*)(.*)",
		"while": "(^|\\G)(?!\\s*([:]{2,})\\s*$)",
		contentName: "meta.embedded.block.component",
		patterns: [
			{
				begin: "(^|\\G)(\\s*)(-{3})(\\s*)$",
				end: "(^|\\G)(\\s*(-{3})(\\s*)$)",
				patterns: [
					{
						include: "source.yaml"
					}
				]
			},
			{
				match: "^(\\s*)(#[\\w\\-\\_]*)\\s*(<!--(.*)-->)?$",
				captures: {
					"2": {
						name: "entity.other.attribute-name.html"
					},
					"3": {
						name: "comment.block.html"
					}
				}
			},
			{
				comment: "Block Repository created to disable 4-space raw block inside components",
				include: "#block"
			}
		]
	},
	attribute: {
		patterns: [
			{
				match: "(?x)\n  (\n    ([^=><\\s]*)  # attribute name\n    (             # attribute value\n        =[\"]([^\"]*)([\"])|[']([^']*)(['])\n      | =[^\\s'\"]*\n    )?\n    \\s*\n  )",
				captures: {
					"2": {
						name: "entity.other.attribute-name.html"
					},
					"3": {
						patterns: [
							{
								include: "#attribute-interior"
							}
						]
					}
				}
			}
		]
	},
	"attribute-interior": {
		comment: "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L376",
		patterns: [
			{
				begin: "=",
				beginCaptures: {
					"0": {
						name: "punctuation.separator.key-value.html"
					}
				},
				end: "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
				patterns: [
					{
						match: "([^\\s\"'=<>`/]|/(?!>))+",
						name: "string.unquoted.html"
					},
					{
						begin: "\"",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.html"
							}
						},
						end: "\"",
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.html"
							}
						},
						name: "string.quoted.double.html",
						patterns: [
							{
								include: "#entities"
							}
						]
					},
					{
						begin: "'",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.html"
							}
						},
						end: "'",
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.html"
							}
						},
						name: "string.quoted.single.html",
						patterns: [
							{
								include: "#entities"
							}
						]
					},
					{
						match: "=",
						name: "invalid.illegal.unexpected-equals-sign.html"
					}
				]
			}
		]
	},
	entities: {
		comment: "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L532",
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"912": {
						name: "punctuation.definition.entity.html"
					}
				},
				comment: "Yes this is a bit ridiculous, there are quite a lot of these",
				match: "(?x)\n\t\t\t\t\t\t(&)\t(?=[a-zA-Z])\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n\t\t\t\t\t\t  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n\t\t\t\t\t\t  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n\t\t\t\t\t\t  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n\t\t\t\t\t\t  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n\t\t\t\t\t\t  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n\t\t\t\t\t\t  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n\t\t\t\t\t\t  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n\t\t\t\t\t\t  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n\t\t\t\t\t\t  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n\t\t\t\t\t\t  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n\t\t\t\t\t\t  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n\t\t\t\t\t\t  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n\t\t\t\t\t\t  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n\t\t\t\t\t\t  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n\t\t\t\t\t\t  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n\t\t\t\t\t\t  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n\t\t\t\t\t\t  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n\t\t\t\t\t\t  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n\t\t\t\t\t\t  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n\t\t\t\t\t\t  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n\t\t\t\t\t\t  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n\t\t\t\t\t\t  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n\t\t\t\t\t\t  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n\t\t\t\t\t\t  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n\t\t\t\t\t\t  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(;)\n\t\t\t\t\t",
				name: "constant.character.entity.named.$2.html"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"3": {
						name: "punctuation.definition.entity.html"
					}
				},
				match: "(&)#[0-9]+(;)",
				name: "constant.character.entity.numeric.decimal.html"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"3": {
						name: "punctuation.definition.entity.html"
					}
				},
				match: "(&)#[xX][0-9a-fA-F]+(;)",
				name: "constant.character.entity.numeric.hexadecimal.html"
			},
			{
				match: "&(?=[a-zA-Z0-9]+;)",
				name: "invalid.illegal.ambiguous-ampersand.html"
			}
		]
	},
	heading: {
		match: "(?:^|\\G)[ ]*(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
		captures: {
			"1": {
				patterns: [
					{
						match: "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.6.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.5.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.4.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.3.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.2.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.1.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					}
				]
			}
		},
		name: "markup.heading.markdown",
		patterns: [
			{
				include: "text.html.markdown#inline"
			}
		]
	},
	"heading-setext": {
		patterns: [
			{
				match: "^(={3,})(?=[ \\t]*$\\n?)",
				name: "markup.heading.setext.1.markdown"
			},
			{
				match: "^(-{3,})(?=[ \\t]*$\\n?)",
				name: "markup.heading.setext.2.markdown"
			}
		]
	},
	lists: {
		patterns: [
			{
				begin: "(^|\\G)([ ]*)([*+-])([ \\t])",
				beginCaptures: {
					"3": {
						name: "punctuation.definition.list.begin.markdown"
					}
				},
				comment: "Currently does not support un-indented second lines.",
				name: "markup.list.unnumbered.markdown",
				patterns: [
					{
						include: "#block"
					},
					{
						include: "text.html.markdown#list_paragraph"
					}
				],
				"while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
			},
			{
				begin: "(^|\\G)([ ]*)([0-9]+\\.)([ \\t])",
				beginCaptures: {
					"3": {
						name: "punctuation.definition.list.begin.markdown"
					}
				},
				name: "markup.list.numbered.markdown",
				patterns: [
					{
						include: "#block"
					},
					{
						include: "text.html.markdown#list_paragraph"
					}
				],
				"while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
			}
		]
	},
	paragraph: {
		begin: "(^|\\G)[ ]*(?=\\S)",
		name: "meta.paragraph.markdown",
		patterns: [
			{
				include: "#inline"
			},
			{
				include: "text.html.markdown#inline"
			},
			{
				include: "text.html.derivative"
			},
			{
				include: "#heading-setext"
			}
		],
		"while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=\\S))"
	},
	blockquote: {
		begin: "(^|\\G)[ ]*(>) ?",
		captures: {
			"2": {
				name: "punctuation.definition.quote.begin.markdown"
			}
		},
		name: "markup.quote.markdown",
		patterns: [
			{
				include: "#block"
			}
		],
		"while": "(^|\\G)\\s*(>) ?"
	}
};
const mdcTMLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	injectionSelector: injectionSelector,
	scopeName: scopeName,
	patterns: patterns,
	repository: repository
};

const resolveLang = (lang) => BUNDLED_LANGUAGES.find((l) => l.id === lang || l.aliases?.includes(lang))?.id;
const resolveTheme = (theme) => {
  if (!theme) {
    return;
  }
  if (typeof theme === "string") {
    theme = {
      default: theme
    };
  }
  return Object.entries(theme).reduce((acc, [key, value]) => {
    acc[key] = BUNDLED_THEMES.find((t) => t === value);
    return acc;
  }, {});
};
const resolveBody = (body) => {
  if (typeof body.code !== "string") {
    throw createError({ statusMessage: "Bad Request", statusCode: 400, message: "Missing code key." });
  }
  return {
    code: body.code.replace(/\n+$/, ""),
    lang: resolveLang(body.lang),
    theme: resolveTheme(body.theme)
  };
};
const _106146 = defineLazyEventHandler(async () => {
  const { theme, preload } = useRuntimeConfig().content.highlight;
  const highlighter = await getHighlighter({
    theme: theme?.default || theme || "dark-plus",
    langs: [
      ...preload || ["json", "js", "ts", "css"],
      "shell",
      "html",
      "md",
      "yaml",
      {
        id: "md",
        scopeName: "text.markdown.mdc",
        path: "mdc.tmLanguage.json",
        aliases: ["markdown"],
        grammar: mdcTMLanguage
      }
    ]
  });
  return async (event) => {
    const params = await useBody(event);
    const { code, lang, theme: theme2 = { default: highlighter.getTheme() } } = resolveBody(params);
    if (!lang) {
      return [[{ content: code }]];
    }
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      await highlighter.loadLanguage(lang);
    }
    await Promise.all(Object.values(theme2).map(async (theme3) => {
      if (!highlighter.getLoadedThemes().includes(theme3)) {
        await highlighter.loadTheme(theme3);
      }
    }));
    const coloredTokens = Object.entries(theme2).map(([key, theme3]) => {
      const tokens = highlighter.codeToThemedTokens(code, lang, theme3);
      return {
        key,
        theme: theme3,
        tokens
      };
    });
    const highlightedCode = [];
    for (const line in coloredTokens[0].tokens) {
      highlightedCode[line] = coloredTokens.reduce((acc, color) => {
        return mergeLines({
          key: coloredTokens[0].key,
          tokens: acc
        }, {
          key: color.key,
          tokens: color.tokens[line]
        });
      }, coloredTokens[0].tokens[line]);
    }
    return highlightedCode;
  };
});
function mergeLines(line1, line2) {
  const mergedTokens = [];
  const getColors = (h, i) => typeof h.tokens[i].color === "string" ? { [h.key]: h.tokens[i].color } : h.tokens[i].color;
  const [big, small] = line1.tokens.length > line2.tokens.length ? [line1, line2] : [line2, line1];
  let targetToken = 0;
  let targetTokenCharIndex = 0;
  big.tokens.forEach((t, i) => {
    if (targetTokenCharIndex === 0) {
      if (t.content === small.tokens[i]?.content) {
        mergedTokens.push({
          content: t.content,
          color: {
            ...getColors(big, i),
            ...getColors(small, i)
          }
        });
        targetToken = i + 1;
        return;
      }
      if (t.content === small.tokens[targetToken]?.content) {
        mergedTokens.push({
          content: t.content,
          color: {
            ...getColors(big, i),
            ...getColors(small, targetToken)
          }
        });
        targetToken += 1;
        return;
      }
    }
    if (small.tokens[targetToken]?.content?.substring(targetTokenCharIndex, targetTokenCharIndex + t.content.length) === t.content) {
      targetTokenCharIndex += t.content.length;
      mergedTokens.push({
        content: t.content,
        color: {
          ...getColors(big, i),
          ...getColors(small, targetToken)
        }
      });
    }
    if (small.tokens[targetToken]?.content.length <= targetTokenCharIndex) {
      targetToken += 1;
      targetTokenCharIndex = 0;
    }
  });
  return mergedTokens;
}

const _lazy_410995 = () => import('../subscribe.mjs');
const _lazy_259112 = () => import('../getLikes.mjs');
const _lazy_192242 = () => import('../deleteLike.mjs');
const _lazy_206620 = () => import('../addLike.mjs');
const _lazy_736812 = () => import('../getComments.mjs');
const _lazy_104501 = () => import('../deleteComment.mjs');
const _lazy_243281 = () => import('../addComment.mjs');
const _lazy_423706 = () => import('../register.mjs');
const _lazy_171314 = () => import('../logout.mjs');
const _lazy_143138 = () => import('../login.mjs');
const _lazy_227471 = () => import('../getByAuthToken.mjs');
const _lazy_184848 = () => import('../handlers/renderer.mjs').then(function (n) { return n.b; });

const handlers = [
  { route: '', handler: _152570, lazy: false, middleware: true, method: undefined },
  { route: '/api/subscribe', handler: _lazy_410995, lazy: true, middleware: false, method: undefined },
  { route: '/api/like/getLikes', handler: _lazy_259112, lazy: true, middleware: false, method: undefined },
  { route: '/api/like/deleteLike', handler: _lazy_192242, lazy: true, middleware: false, method: undefined },
  { route: '/api/like/addLike', handler: _lazy_206620, lazy: true, middleware: false, method: undefined },
  { route: '/api/comment/getComments', handler: _lazy_736812, lazy: true, middleware: false, method: undefined },
  { route: '/api/comment/deleteComment', handler: _lazy_104501, lazy: true, middleware: false, method: undefined },
  { route: '/api/comment/addComment', handler: _lazy_243281, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/register', handler: _lazy_423706, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/logout', handler: _lazy_171314, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/login', handler: _lazy_143138, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/getByAuthToken', handler: _lazy_227471, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_184848, lazy: true, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid', handler: _349193, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _349193, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache', handler: _108945, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _600228, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _600228, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/highlight', handler: _106146, lazy: false, middleware: false, method: "post" },
  { route: '/**', handler: _lazy_184848, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
