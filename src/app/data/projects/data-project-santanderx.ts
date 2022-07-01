import { IProject, ProjectContentItem_Columns, ProjectContentItem_Header, ProjectContentItem_Link, ProjectContentItem_Text } from '../../interfaces/IProject';
import { ProjectTheme_Santander } from '.././data-themes';

export const Project_SantanderX: IProject = {
	content: [
		new ProjectContentItem_Header({
			header: 'Vocal Communities',
			subtitle: 'This is a mobile drinking game aimed at teens and young adults.'
		}),
		new ProjectContentItem_Columns({
			center: true,
			items: [
				new ProjectContentItem_Text({
					text: 'This is some text that will get put into a text paragraph. Fairly easy'
				}),
				new ProjectContentItem_Link({
					header: 'View Project',
					link: '/prototypes/knapsack'
				})
			]
		}),
	],
	name: 'Santander X Awards',
	short_desc: 'National Competition',
	tags: ['Angular', 'Ionic', 'TypeScript', 'PWA'],
	theme: ProjectTheme_Santander,
	time: 'Mid 2021'
};