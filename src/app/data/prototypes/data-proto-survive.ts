import { IProject, ProjectContentItem_Header } from '../../interfaces/IProject';
import { ProjectTheme_Forest } from '.././data-themes';

export const Prototype_Survive: IProject = {
	content: [
		new ProjectContentItem_Header({
			header: 'Turtle Torture',
			subtitle: 'This is a website made for a fictional festival as part of my University course.'
		}),
	],
	is_live: {
		label: 'View Submission',
		link: 'https://ldjam.com/events/ludum-dare/43/savetheturles'
	},
	name: 'Turtle Torture',
	short_desc: 'Game Jam',
	tags: ['Unity', 'C#', 'Ludum Dare'],
	theme: ProjectTheme_Forest,
	time: 'Mid 2019'
};