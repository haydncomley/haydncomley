import { IProject, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Paragraph, ProjectContentItem_Text } from "../interfaces/IProject";
import { ProjectTheme_DeepOrange, ProjectTheme_VocalCommunities } from "./data-themes";

export const Project_Vocal: IProject = {
    name: 'Vocal Communities',
    short_desc: 'Social Enterprise',
    time: 'Winter 2021',
    is_live: {
        link: 'https://vocal.versionmaybe.com'
    },
    theme: ProjectTheme_VocalCommunities,
    tags: ['WordPress', 'Blog', 'CMS'],
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
    ]
}