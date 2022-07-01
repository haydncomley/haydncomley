import { IProject, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Header, ProjectContentItem_Link, ProjectContentItem_Paragraph, ProjectContentItem_Text } from '../../interfaces/IProject';
import { ProjectTheme_EasyTheme } from '.././data-themes';

export const Project_EasyTheme: IProject = {
	content: [
		new ProjectContentItem_Header({
			header: 'Easy Theme',
			subtitle: 'A custom NPM package that exposes a bunch of helpful SCSS tools and mixins for responsive theming.'
		}),
		new ProjectContentItem_Paragraph({
			header: 'Reducing __Boilerplate__',
			text: new ProjectContentItem_Text({
				text: 'Throughout my developed journey, especially that on the web there is always one thing that takes time to scaffold at the start of any project, and that is the theming. Over the years of making applications and websites I\'ve refined how I do this and started using !!custom tooling!! to startup new projects faster.'
			})
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'It was only after a while of working with these custom tools I realised I could publish these to !!NPM!! which would make them, easier for me to import into projects, keep them up-to-date and also share with others.'
				}),
				new ProjectContentItem_Text({
					text: 'I made sure to expose all the bits that I use daily when theming for applications - as well as this giving way for some niceties that aren\'t used often but are nice to have on a whim such as !!mixins!! for dark mode detection, reduced motion and more.'
				})
			]
		}),
		new ProjectContentItem_Break(),
		new ProjectContentItem_Paragraph({
			header: '__Documentation__',
			text: new ProjectContentItem_Text({
				text: 'All developers love a good bit of documentation, so I made sure to go a bit of an extra mile in this case with the !!Read Me!! file. I\'ve made sure to include all the information I could think in a nice and presentable way - as well as this giving examples for usage where necessary.'
			})
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'The SCSS tooling compiles you theme preferences down to !!CSS Variables!! which was a big pain I had with other theming options. This allows for you to use these colours and styles anytime, anywhere throughout your project. As well as this, the colours can be updated in realtime allowing for easy to implement dark-mode, as well as hot-switching custom themes for other reasons you may have.'
				}),
				new ProjectContentItem_Text({
					text: 'This package also exposes custom breakpoints for desktop, tablet, and mobile - this helps standardise the responsiveness of application development. When used throughout the application it also means your application components / pages will scale in tandem with each other.'
				})
			]
		}),
		new ProjectContentItem_Columns({
			center: false,
			items: [
				new ProjectContentItem_Text({
					text: 'This package should work with any kind of !!SCSS!! setup, regardless of framework - I\'ve personally used it with both Angular and React with great success and no setup!'
				}),
				new ProjectContentItem_Link({
					header: 'View Package',
					link: 'https://www.npmjs.com/package/easy-theme'
				})
			]
		}),
		new ProjectContentItem_Break(),
	],
	name: 'Easy Theme',
	short_desc: 'NPM Package',
	tags: ['SCSS', 'NPM', 'Package'],
	theme: ProjectTheme_EasyTheme,
	time: 'Early 2022',
};