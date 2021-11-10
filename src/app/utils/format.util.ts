export class FormatUtil {

    public static parse(text: string) {
        text = this.replace(text, /\*\*(.+?)\*\*/gm, '<span class="format-bold">${}</span>')
        text = this.replace(text, /\!\!(.+?)\!\!/gm, '<span class="format-bold format-bold--accent">${}</span>')
        text = this.replace(text, /\_\_(.+?)\_\_/gm, '<span class="format-bold format-bold--block">${}</span>')
        text = this.replace(text, /\^\^(.+?)\^\^/gm, '<span class="format-bold format-bold--quiet">${}</span>')

        return text;
    }

    public static replace(s: string, regex: any, replacement: string) {
        const matches = s.match(regex);
        if (matches) {
            matches.forEach(match => {
                s = s.replace(match, replacement.replace('${}', match.trim().slice(2).slice(0, -2)));
            });
        }

        return s;
    }
}