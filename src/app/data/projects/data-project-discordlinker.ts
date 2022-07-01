import { IProject, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Paragraph, ProjectContentItem_Text } from '../../interfaces/IProject';
import { ProjectTheme_DiscordLinker } from '.././data-themes';

export const Project_DiscordLinker: IProject = {
	content: [
		new ProjectContentItem_Header({
			header: 'Knapsack',
			subtitle: 'This is a SaaS project management tool aimed at students and creative startups.'
		}),
		new ProjectContentItem_Paragraph({
			header: 'The __Problem__ and __Solution__',
			text: new ProjectContentItem_Text({
				text: 'Throughout my time at the !!University of Portsmouth!! one of the pain points was always group projects. Different groups would have different ways of handling projects but they always left something to be desired. !!Knapsack!! aims to be the solution to four key areas identified by myself within a creative working environment: !!Collaboration!!, !!Communication!!, !!Content!! and !!Context!!.'
			})
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'Group projects trend towards a !!split in the technologies!! used, and while this can be beneficial in some cases - for the most part it leads to !!duplicated or lost work!!, !!mis-communications!! and a !!lack of productivity!!.'
				}),
				new ProjectContentItem_Text({
					text: 'The fix for this is to !!consolidate the core features!! needed for a successful group project in a means that allows users to !!work in a way that they choose!!. This is different to how they can be forced to work in un-favourable, or un-familiar ways on other platforms.'
				})
			]
		}),
		new ProjectContentItem_Break(),
		new ProjectContentItem_Paragraph({
			header: 'What is __Knapsack?__',
			text: new ProjectContentItem_Text({
				text: 'Throughout my time at the !!University of Portsmouth!! one of the pain points was always group projects. Different groups would have different ways of handling projects but they always left something to be desired. !!Knapsack!! aims to be the solution to four key areas identified by myself within a creative working environment: !!Collaboration!!, !!Communication!!, !!Content!! and !!Context!!.'
			})
		}),
		new ProjectContentItem_Gallery({
			animation: 'slide',
			fit: 'contain',
			height: '15rem',
			images: [
				'/assets/projects/knapsack/preview-1.png',
				'/assets/projects/knapsack/preview-2.png',
				'/assets/projects/knapsack/preview-4.png',
				'/assets/projects/knapsack/preview-3.png',
			],
			interval: 3000
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'Group projects trend towards a !!split in the technologies!! used, and while this can be beneficial in some cases - for the most part it leads to !!duplicated or lost work!!, !!mis-communications!! and a !!lack of productivity!!.'
				}),
				new ProjectContentItem_Text({
					text: 'The fix for this is to !!consolidate the core features!! needed for a successful group project in a means that allows users to !!work in a way that they choose!!. This is different to how they can be forced to work in un-favourable, or un-familiar ways on other platforms.'
				})
			]
		}),
		new ProjectContentItem_Break(),
		new ProjectContentItem_Paragraph({
			header: '__Future__ Plans',
			text: new ProjectContentItem_Text({
				text: 'Throughout my time at the !!University of Portsmouth!! one of the pain points was always group projects. Different groups would have different ways of handling projects but they always left something to be desired. !!Knapsack!! aims to be the solution to four key areas identified by myself within a creative working environment: !!Collaboration!!, !!Communication!!, !!Content!! and !!Context!!.'
			})
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'Group projects trend towards a !!split in the technologies!! used, and while this can be beneficial in some cases - for the most part it leads to !!duplicated or lost work!!, !!mis-communications!! and a !!lack of productivity!!.'
				}),
				new ProjectContentItem_Text({
					text: 'The fix for this is to !!consolidate the core features!! needed for a successful group project in a means that allows users to !!work in a way that they choose!!. This is different to how they can be forced to work in un-favourable, or un-familiar ways on other platforms.'
				})
			]
		}),
		new ProjectContentItem_Break(),
	],
	is_live: {
		label: 'View Beta',
		link: 'https://beta.knapsack-app.com',
	},
	name: 'Knapsack',
	short_desc: 'Web Application',
	tags: ['Angular', 'SaaS', 'TypeScript', 'PWA'],
	theme: ProjectTheme_DiscordLinker,
	time: 'Early 2022',
};