import { IProject, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Link, ProjectContentItem_Paragraph, ProjectContentItem_Text } from '../../interfaces/IProject';
import { ProjectTheme_DiscordLinker } from '.././data-themes';

export const Project_DiscordLinker: IProject = {
	content: [
		new ProjectContentItem_Header({
			header: 'Discord Linker',
			subtitle: 'A web application that hooks into an existing API to allow linking of their accounts to a game server.'
		}),
		new ProjectContentItem_Paragraph({
			header: 'API __Integration__',
			text: new ProjectContentItem_Text({
				text: 'The !!API!! for this project already existing and is part of a further set of tools that enable users to manage a variety of game servers.'
			})
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'There was a previous application that was used by people in order to interact with this service, however it was outdated and required a new lease of life.'
				}),
				new ProjectContentItem_Text({
					text: 'I was brought in to develop a new frontend for this application - it had to be trustworthy looking while also tailored towards gaming centric communities.'
				})
			]
		}),
		new ProjectContentItem_Break(),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'This project was completed in a total of about 7 days including all the steps from ideation, design, development and implementation. This rapid development was due to strong communication with the client who was excited to get this out as soon as possible.'
				}),
				new ProjectContentItem_Link({
					header: 'View Website',
					link: 'https://discordlinker.com'
				})
			]
		}),
		// new ProjectContentItem_Paragraph({
		// 	header: 'Quick __Turnaround__',
		// 	text: new ProjectContentItem_Text({
		// 		text: 'This project was completed in a total of about 7 days including all the steps from ideation, design, development and implementation. This rapid development was due to strong communication with the client who was excited to get this out as soon as possible.'
		// 	})
		// }),
		new ProjectContentItem_Paragraph({
			text: new ProjectContentItem_Text({
				text: 'The platform is a !!React!! application that handles routing and API interaction - it is apart of a larger !!.NET!! backend implementation that also contains hosting. Users can view all of the connected communities from the home page, as well as being able to complete community specific actions on each organisation page. As well as these actions, the pages are also customised via the data received from the API such as the name and images.'
			})
		}),
		new ProjectContentItem_Gallery({
			animation: 'slide',
			fit: 'contain',
			height: '15rem',
			images: [
				'/assets/projects/discordlinker/preview-1.png',
				'/assets/projects/discordlinker/preview-2.png',
				'/assets/projects/discordlinker/preview-3.png',
			],
			interval: 3000
		}),
		new ProjectContentItem_Break(),
	],
	is_live: {
		label: 'View Beta',
		link: 'https://discordlinker.com',
	},
	name: 'Discord Linker',
	short_desc: 'Web Application',
	tags: ['React', 'API Integration', 'TypeScript'],
	theme: ProjectTheme_DiscordLinker,
	time: 'Mid 2022',
};