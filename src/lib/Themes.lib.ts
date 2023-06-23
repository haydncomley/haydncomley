import fs from 'fs';
import path from 'path';

const THEMES_BASE_DIR = "./src/styles/themes";
const THEMES_PARENT = THEMES_BASE_DIR + "/_!themes.scss";

const ThemeFileToName = (path: string) => {
    const THEME_REGEX = /(?:_theme)[!]?(.+).scss/gm; 
    let m;

    while ((m = THEME_REGEX.exec(path)) !== null) {
        if (m.index === THEME_REGEX.lastIndex) {
            THEME_REGEX.lastIndex++;
        }
        
        return [m[1], m[1].replace('_', ' ')];
    }

    return ['', ''];
}

const GetThemes = () => {
    return new Promise<[string, string, string][]>((resolve, reject) => {
        fs.readdir(path.join(process.cwd(), THEMES_BASE_DIR), (err, files) => {
            if (err) return reject(err);
            resolve(files
                .filter((file) => !file.startsWith('_!'))
                .map((file) => {
                    const names = ThemeFileToName(file);
                    return [file, names[0], names[1]]
                })
            );
        });
    });
};

const AllThemes = await GetThemes();

try {
    const THEME_SELECTOR_REGEX = /useTheme\(.+\)/gm; 
    AllThemes.forEach(([file, theme]) => {
        const fileContent = fs.readFileSync(path.join(process.cwd(), THEMES_BASE_DIR, file), 'utf8');
        const newContent = fileContent.replace(THEME_SELECTOR_REGEX, `useTheme('${theme}')`);
        console.log(theme)
        if (newContent !== fileContent) {
            fs.writeFileSync(path.join(process.cwd(), THEMES_BASE_DIR, file), newContent);
        }
    });
} catch {
    console.warn('Couldn\'t check theme imports - make sure you don\'t have it open in another program.');
}

try {
    fs.writeFileSync(
        path.join(process.cwd(), THEMES_PARENT),
        '// I\'m auto-generated by: Theme.lib.ts\n' + 
        AllThemes.map((theme) => `@import '${THEMES_BASE_DIR}/${theme[0]}';`).join('\n')
    )
} catch {
    console.warn('Couldn\'t write themes to file - make sure you don\'t have it open in another program.');
}


export const Themes = AllThemes.map((theme) => ({
    id: theme[1],
    name: theme[2],
}));