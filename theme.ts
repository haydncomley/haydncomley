import { Plugin } from "$fresh/server.ts";
import {
  PluginRenderContext,
  PluginRenderResult,
} from "https://deno.land/x/fresh@1.1.2/src/server/types.ts";

// import { setLightTheme } from "easy-theme";
import sass from "https://deno.land/x/denosass@1.0.6/mod.ts";

const easyThemePlugin: (rootScss: string) => Plugin = (
  rootScss = "./theme/index.scss",
): Plugin => {
  const plugin: Plugin = {
    name: "easy_theme",
    render: (ctx: PluginRenderContext): PluginRenderResult => {
      ctx.render();

      const result = sass.compileString("body { color: green; }");

      //   setLightTheme({
      //     "test": ["#ffffff", "#000000"],
      //   });

      return {
        styles: [
          {
            id: "easy-theme",
            cssText: result.css,
          },
        ],
      };
    },
  };

  return plugin;
};

export default easyThemePlugin;
