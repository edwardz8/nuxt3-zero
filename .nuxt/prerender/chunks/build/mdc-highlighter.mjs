import { getMdcConfigs } from './mdc-configs.mjs';
import { createWasmOnigEngine } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/engine-oniguruma.mjs';

function createShikiHighlighter({
  langs = [],
  themes = [],
  bundledLangs = {},
  bundledThemes = {},
  getMdcConfigs,
  options: shikiOptions,
  engine
} = {}) {
  let shiki;
  let configs;
  async function _getShiki() {
    const { createHighlighterCore, addClassToHast, isSpecialLang, isSpecialTheme } = await import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/core.mjs');
    const { transformerNotationDiff, transformerNotationErrorLevel, transformerNotationFocus, transformerNotationHighlight } = await import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@shikijs/transformers/dist/index.mjs');
    const shiki2 = await createHighlighterCore({
      langs,
      themes,
      engine
    });
    for await (const config of await getConfigs()) {
      await config.shiki?.setup?.(shiki2);
    }
    return {
      shiki: shiki2,
      addClassToHast,
      isSpecialLang,
      isSpecialTheme,
      transformers: [
        transformerNotationDiff(),
        transformerNotationErrorLevel(),
        transformerNotationFocus(),
        transformerNotationHighlight()
      ]
    };
  }
  async function getShiki() {
    if (!shiki) {
      shiki = _getShiki();
    }
    return shiki;
  }
  async function getConfigs() {
    if (!configs) {
      configs = Promise.resolve(getMdcConfigs?.() || []);
    }
    return configs;
  }
  const highlighter = async (code, lang, theme, options = {}) => {
    const {
      shiki: shiki2,
      addClassToHast,
      isSpecialLang,
      isSpecialTheme,
      transformers: baseTransformers
    } = await getShiki();
    const codeToHastOptions = {
      defaultColor: false,
      meta: {
        __raw: options.meta
      }
    };
    if (lang === "ts-type" || lang === "typescript-type") {
      lang = "typescript";
      codeToHastOptions.grammarContextCode = "let a:";
    } else if (lang === "vue-html" || lang === "vue-template") {
      lang = "vue";
      codeToHastOptions.grammarContextCode = "<template>";
    }
    const themesObject = { ...typeof theme === "string" ? { default: theme } : theme || {} };
    const loadedThemes = shiki2.getLoadedThemes();
    const loadedLanguages = shiki2.getLoadedLanguages();
    if (typeof lang === "string" && !loadedLanguages.includes(lang) && !isSpecialLang(lang)) {
      if (bundledLangs[lang]) {
        await shiki2.loadLanguage(bundledLangs[lang]);
      } else {
        lang = "text";
      }
    }
    for (const [color, theme2] of Object.entries(themesObject)) {
      if (typeof theme2 === "string" && !loadedThemes.includes(theme2) && !isSpecialTheme(theme2)) {
        if (bundledThemes[theme2]) {
          await shiki2.loadTheme(bundledThemes[theme2]);
        } else {
          themesObject[color] = "none";
        }
      }
    }
    const transformers = [
      ...baseTransformers
    ];
    for (const config of await getConfigs()) {
      const newTransformers = typeof config.shiki?.transformers === "function" ? await config.shiki?.transformers(code, lang, theme, options) : config.shiki?.transformers || [];
      transformers.push(...newTransformers);
    }
    const root = shiki2.codeToHast(code.trimEnd(), {
      lang,
      ...codeToHastOptions,
      themes: themesObject,
      transformers: [
        ...transformers,
        {
          name: "mdc:highlight",
          line(node, line) {
            if (options.highlights?.includes(line))
              addClassToHast(node, "highlight");
            node.properties.line = line;
          }
        },
        {
          name: "mdc:newline",
          line(node) {
            if (code?.includes("\n")) {
              if (node.children.length === 0 || node.children.length === 1 && node.children[0].type === "element" && node.children[0].children.length === 1 && node.children[0].children[0].type === "text" && node.children[0].children[0].value === "") {
                node.children = [{
                  type: "element",
                  tagName: "span",
                  properties: {
                    emptyLinePlaceholder: true
                  },
                  children: [{ type: "text", value: "\n" }]
                }];
                return;
              }
              const last = node.children.at(-1);
              if (last?.type === "element" && last.tagName === "span") {
                const text = last.children.at(-1);
                if (text?.type === "text")
                  text.value += "\n";
              }
            }
          }
        }
      ]
    });
    const preEl = root.children[0];
    const codeEl = preEl.children[0];
    const wrapperStyle = shikiOptions?.wrapperStyle;
    preEl.properties.style = wrapperStyle ? typeof wrapperStyle === "string" ? wrapperStyle : preEl.properties.style : "";
    const styles = [];
    Object.keys(themesObject).forEach((color) => {
      const colorScheme = color !== "default" ? `.${color}` : "";
      styles.push(
        wrapperStyle ? `${colorScheme} .shiki,` : "",
        `html .${color} .shiki span {`,
        `color: var(--shiki-${color});`,
        `background: var(--shiki-${color}-bg);`,
        `font-style: var(--shiki-${color}-font-style);`,
        `font-weight: var(--shiki-${color}-font-weight);`,
        `text-decoration: var(--shiki-${color}-text-decoration);`,
        "}"
      );
      styles.push(
        `html${colorScheme} .shiki span {`,
        `color: var(--shiki-${color});`,
        `background: var(--shiki-${color}-bg);`,
        `font-style: var(--shiki-${color}-font-style);`,
        `font-weight: var(--shiki-${color}-font-weight);`,
        `text-decoration: var(--shiki-${color}-text-decoration);`,
        "}"
      );
    });
    return {
      tree: codeEl.children,
      className: Array.isArray(preEl.properties.class) ? preEl.properties.class.join(" ") : preEl.properties.class,
      inlineStyle: preEl.properties.style,
      style: styles.join("")
    };
  };
  return highlighter;
}

const bundledLangs = {
"javascript": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/javascript.mjs'),
"js": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/javascript.mjs'),
"jsx": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/jsx.mjs'),
"json": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/json.mjs'),
"typescript": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/typescript.mjs'),
"ts": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/typescript.mjs'),
"tsx": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/tsx.mjs'),
"vue": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/vue.mjs'),
"css": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/css.mjs'),
"html": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/html.mjs'),
"shellscript": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/shellscript.mjs'),
"bash": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/shellscript.mjs'),
"sh": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/shellscript.mjs'),
"shell": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/shellscript.mjs'),
"zsh": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/shellscript.mjs'),
"markdown": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/markdown.mjs'),
"md": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/markdown.mjs'),
"mdc": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/mdc.mjs'),
"yaml": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/yaml.mjs'),
"yml": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/langs/yaml.mjs'),
};
const bundledThemes = {
"material-theme-palenight": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/themes/material-theme-palenight.mjs').then(r => r.default),
"github-dark": () => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/themes/github-dark.mjs').then(r => r.default),
};
const options = {"theme":{"default":"material-theme-palenight","dark":"github-dark"}};
const engine = createWasmOnigEngine(() => import('file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/shiki/dist/wasm.mjs'));
const highlighter = createShikiHighlighter({ bundledLangs, bundledThemes, options, getMdcConfigs, engine });

export { createShikiHighlighter, highlighter as default };
//# sourceMappingURL=mdc-highlighter.mjs.map
