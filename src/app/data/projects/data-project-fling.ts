import { IProject, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Link, ProjectContentItem_Paragraph, ProjectContentItem_Text } from '../../interfaces/IProject';
import { ProjectTheme_Green } from '.././data-themes';

export const Project_Fling: IProject = {
	content: [
		new ProjectContentItem_Header({
			header: 'Fling - Jump, Collect, Explore!',
			subtitle: 'This is a mobile game aimed towards a younger audience.'
		}),
		new ProjectContentItem_Paragraph({
			header: 'Project __Creation__',
			text: new ProjectContentItem_Text({
				text: 'This was the first commercial project that I released by myself. It took a couple of months to create using !!Unity!! as the core game engine, with the art created in a piece of software called !!MagicaVoxel!!.'
			})
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'The art style was a key point that I wanted to nail - I wanted it to look modern, emulating some of the graphics of other popular games at the time while still running smoothly. I had been using !!Unity!! for a while at this point with hobbyist projects but I really wanted to publish something and get my work out there.'
				}),
				new ProjectContentItem_Text({
					text: 'Once the core game mechanics were in place the biggest task was creating content. This is always something I struggle with as it\'s the final hurdle to overcome. I slowly made characters and levels in tandem with creating the store listing which helped push me forward.'
				})
			]
		}),
		new ProjectContentItem_Gallery({
			fit: 'contain',
			images: [
				'/assets/projects/fling/preview-1.webp',
			],
			maxHeight: '15rem',
			position: 'bottom'
		}),
		new ProjectContentItem_Paragraph({
			header: 'Core __Development__',
			text: new ProjectContentItem_Text({
				text: 'When it came to development I tried to use no third party packages, therefore I went through all the stages needed to !!integrate with native APIs!! such as handling in-app purchases, touch controls, store deployment and more.'
			})
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'The main reason I chose not to use external libraries was because this was going to be my first self-published app and I wanted to get familiar with all the steps needed.'
				}),
				new ProjectContentItem_Text({
					text: 'This knowledge of integration and deployment will go on to help me with projects later down the line that might use different tooling and allow me to diagnose platform specific bugs easier.'
				}),
			]
		}),
		new ProjectContentItem_Break(),
		new ProjectContentItem_Columns({
			center: true,
			items: [
				new ProjectContentItem_Text({
					text: 'This game is still available on iOS and gains a couple of downloads each month still to this day.'
				}),
				new ProjectContentItem_Link({
					header: 'View App',
					link: 'https://apps.apple.com/bg/app/falmingo/id1290883506#?platform=iphone'
				})
			]
		}),
		new ProjectContentItem_Gallery({
			animation: 'slide',
			fit: 'contain',
			height: '15rem',
			images: [
				'/assets/projects/fling/preview-1.png',
				'/assets/projects/fling/preview-2.png',
			],
			interval: 3000
		}),
		new ProjectContentItem_Break(),
	],
	name: 'Fling',
	short_desc: 'Mobile Game',
	tags: ['Unity', 'C#', 'iOS', 'Android'],
	theme: ProjectTheme_Green,
	time: 'Early 2017'
};