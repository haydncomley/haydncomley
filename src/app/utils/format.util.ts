export class FormatUtil {

	private static types: [RegExp[], string][] = [
		[
			[/\*\*(.+?)\*\*/gm],
			'<span class="format-bold">${}</span>'
		],
		[
			[/!!(.+?)!!/gm],
			'<span class="format-bold format-bold--accent">${0}</span>'
		],
		[
			[/__(.+?)__/gm],
			'<span class="format-bold format-bold--block">${0}</span>'
		],
		[
			[/\^\^(.+?)\^\^/gm],
			'<span class="format-bold format-bold--quiet">${0}</span>'
		]
	];

	public static parse(text: string) {
		FormatUtil.types.forEach((type) => {
			text = this.replace(text, ...type);
		});

		return text;
	}

	public static replace(s: string, regex: any[], replacement: string) {
		regex.forEach((re, index) => {
			const matches = s.match(re);
			if (matches) {
				matches.forEach(match => {
					s = s.replace(match, replacement.replace('${' + index + '}', match.trim().slice(2).slice(0, -2)));
				});
			}
		});

		return s;
	}
}