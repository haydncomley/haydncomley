import { IProject, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Link, ProjectContentItem_Paragraph, ProjectContentItem_Text } from '../../interfaces/IProject';
import { ProjectTheme_Red } from '../data-themes';

export const Project_GetCards: IProject = {
	content: [
		new ProjectContentItem_Header({
			header: 'GetCards',
			subtitle: 'A mobile drinking game aimed at students and young adults.'
		}),
		new ProjectContentItem_Paragraph({
			header: 'Initial __Release__',
			text: new ProjectContentItem_Text({
				text: 'The app was released initially on both !!iOS & Android!! in 2018 using the Unity Game engine. However through the years it has been modernised and most recently in 2021 built from scratch with the use of !!Ionic Native!!.'
			})
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'Using !!Firebase!! the app can be updated remotely. The backend allows for unlimited amounts of localisation that can change the UI as well as the contents of the game packs.'
				}),
				new ProjectContentItem_Text({
					text: 'The game can also have different promotions for different regions meaning it can also capitalise on localised events.'
				})
			]
		}),
		new ProjectContentItem_Break(),
		new ProjectContentItem_Paragraph({
			header: '__Gameplay__ Overview',
			text: new ProjectContentItem_Text({
				text: 'Users first select a pack they want to play ^^(these are themed and contain different rule sets)^^. They are then promoted to input the names of the people playing. The app will then generate a set of cards containing situations the players must follow, winning or losing these result in sips being given out.'
			})
		}),
		new ProjectContentItem_Gallery({
			animation: 'slide',
			fit: 'contain',
			height: '15rem',
			images: [
				'/assets/projects/getcards/preview-1.webp',
				'/assets/projects/getcards/preview-2.webp',
			],
			interval: 3000
		}),
		new ProjectContentItem_Break(),
		new ProjectContentItem_Paragraph({
			header: 'Organic __Growth__',
			text: new ProjectContentItem_Text({
				text: 'The app has had moderate success even though there has been no substantial marketing push other than word-of-mouth. The only growth to date has been !!totally organic!! - this has worked well for iOS, however Android lacks behind on installs currently.'
			})
		}),
		new ProjectContentItem_Columns({
			center: true,
			items: [
				new ProjectContentItem_Text({
					text: 'I also created a website that will direct users to the correct store when opened on on their phone.'
				}),
				new ProjectContentItem_Link({
					header: 'View Game',
					link: 'https://getcards.app'
				})
			]
		}),
		new ProjectContentItem_Paragraph({
			header: '__Future__ Development',
			text: new ProjectContentItem_Text({
				text: 'Currently the app ^^(development-wise)^^ is in good standing. The main things I will focus on in the future is to create more content, and hopefully localise this to more regions in order to gain a wider customer-base.'
			})
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'I would also like to grow the audience in general for this app wider. This means doing more research into marketing methods and growth tactics.'
				}),
				new ProjectContentItem_Text({
					text: 'I have thought about either doing paid ad placements on platforms such as Instagram but think I might be able to capitalise on the !!organic traction!! I have had by creating content for platforms such as TikTok.'
				}),
			]
		}),
		new ProjectContentItem_Break(),
	],
	is_live: {
		label: 'View App',
		link: 'https://getcards.app'
	},
	name: 'GetCards',
	short_desc: 'Mobile Game',
	tags: ['Ionic', 'iOS', 'Android', 'Google Cloud'],
	theme: ProjectTheme_Red,
	time: 'Early 2021'
};