import type { AstroI18nextConfig } from "astro-i18next";
import { Projects } from "./src/lib/Projects.lib";

export default {
    defaultLocale: "en",
    locales: ["en"],
    defaultNamespace: "translation",
    namespaces: [
        "translation",
        ...Projects.map(project => `project_${project}`)
    ],
} as AstroI18nextConfig;