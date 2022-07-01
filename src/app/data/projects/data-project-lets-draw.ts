import { IProject, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Link, ProjectContentItem_Paragraph, ProjectContentItem_Text } from '../../interfaces/IProject';
import { ProjectTheme_LetsDraw } from '.././data-themes';

export const Project_LetsDraw: IProject = {
	content: [
		new ProjectContentItem_Header({
			header: 'Let\'s Draw',
			subtitle: 'A daily web game where you have to draw a prompt in a given amount time.'
		}),
		new ProjectContentItem_Paragraph({
			header: 'But __Why?__',
			text: new ProjectContentItem_Text({
				text: 'I\'ve always had an affinity for making games as that is where my initial exploration into coding began, this alongside the release of games such as !!Wordle!! made me want to have something of my own I could play with friends and family.'
			})
		}),
		new ProjectContentItem_Gallery({
			animation: 'slide',
			fit: 'contain',
			height: '15rem',
			images: [
				'/assets/projects/letsdraw/preview-1.png',
				'/assets/projects/letsdraw/preview-2.png',
				'/assets/projects/letsdraw/preview-3.png',
			],
			interval: 3000
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'This was originally meant to be a quick and simple weekend project of mine, however it quickly expanded a bit further after showing it to some friends and me wanting to integrate feature after feature touching on some new !!Web API!! standards.'
				}),
				new ProjectContentItem_Text({
					text: 'The frontend is all custom designed and developed components that leverages !!Ionic and Angular!! for templating. The backend was made with !!Google Firebase!! and gave me a nice reason to dip further into custom security rules for firestore as well as storage.'
				}),
				new ProjectContentItem_Link({
					header: 'Play Now',
					link: 'https://LetsDraw.Today'
				})
			]
		}),
		new ProjectContentItem_Paragraph({
			header: '__Design__ Language',
			text: new ProjectContentItem_Text({
				text: 'The application is also heavily styled in a design language that I\'ve been waiting to use in a project. It so what people called !!Neumorphism!!, often when I\'ve seen applications in this style it is overly heavy handed and doesn\'t end up looking great. Saying that, I feel as if I managed to find a good balance between function and form, I really like how the look of the application turned out.'
			})
		}),
		new ProjectContentItem_Break(),
		new ProjectContentItem_Paragraph({
			header: '__Gamification__',
			text: new ProjectContentItem_Text({
				text: 'The game is fairly simple, each day everyone gets a set length of time to draw a given prompt. While the concept is simple, there are multiple complexities when implementing drawing, playback and leaderboards etc. As well as this the app allows you to rate others drawings and see who has one when each new day begins.'
			})
		}),
		new ProjectContentItem_Paragraph({
			header: '__Security__ and __Fairness__',
			text: new ProjectContentItem_Text({
				text: 'Even though this game is small in scope and I have no plans to market it, I still wanted to think about how to !!enforce fairness!! between users who might try to be !!malicious!! and gain the system. One way I went about this was some !!custom security rules!! on the backend API. When a user draws it stores the points in order to provide an animated playback for other users, when this information is posted to the server there are some calculations that take place that factor in the time allotted for each drawing, the expected drawing polling rate and more - if certain conditions are not met we can assume a user was cheating and discard their drawing.'
			})
		}),
		// new ProjectContentItem_Columns({
		// 	center: false,
		// 	items: [
		// 		new ProjectContentItem_Text({
		// 			text: 'Group projects trend towards a !!split in the technologies!! used, and while this can be beneficial in some cases - for the most part it leads to !!duplicated or lost work!!, !!mis-communications!! and a !!lack of productivity!!.'
		// 		}),
		// 		new ProjectContentItem_Text({
		// 			text: 'The fix for this is to !!consolidate the core features!! needed for a successful group project in a means that allows users to !!work in a way that they choose!!. This is different to how they can be forced to work in un-favourable, or un-familiar ways on other platforms.'
		// 		})
		// 	]
		// }),
		new ProjectContentItem_Break(),
	],
	name: 'Let\'s Draw',
	short_desc: 'Web Application',
	tags: ['Angular', 'Web Game', 'PWA'],
	theme: ProjectTheme_LetsDraw,
	time: 'Early 2022',
};