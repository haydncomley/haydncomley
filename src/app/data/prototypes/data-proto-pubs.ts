import { IProject, ProjectContentItem_Header } from '../../interfaces/IProject';
import { ProjectTheme_BlueGold } from '.././data-themes';

export const Prototype_Pubs: IProject = {
	content: [
		new ProjectContentItem_Header({
			header: 'Fourteen Units',
			subtitle: 'This is a website made for a fictional festival as part of my University course.'
		}),
	],
	name: 'Fourteen Units',
	short_desc: 'Data Visualisation',
	tags: ['Deck.GL', 'Google Maps API', 'FSA API'],
	theme: ProjectTheme_BlueGold,
	time: 'Late 2019'
};