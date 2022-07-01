import { IProject, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Paragraph, ProjectContentItem_Text } from '../../interfaces/IProject';
import { ProjectTheme_VocalCommunities } from '.././data-themes';

export const Project_Vocal: IProject = {
	content: [
		new ProjectContentItem_Header({
			header: 'Vocal Communities',
			subtitle: 'This is a mobile drinking game aimed at teens and young adults.'
		}),
		new ProjectContentItem_Paragraph({
			text: new ProjectContentItem_Text({
				text: 'This is some text that will get put into a text paragraph. Fairly easy'
			})
		}),
		new ProjectContentItem_Gallery({
			images: [
				'/assets/projects/getcards/shapes.svg',
				'/assets/projects/getcards/shapes-i.png',
				'/assets/projects/getcards/shapes.svg',
				'/assets/projects/getcards/shapes-i.png',
			]
		})
	],
	is_live: {
		link: 'https://vocal.versionmaybe.com'
	},
	name: 'Vocal Communities',
	short_desc: 'Business Website',
	tags: ['WordPress', 'Blog', 'CMS'],
	theme: ProjectTheme_VocalCommunities,
	time: 'Late 2021'
};