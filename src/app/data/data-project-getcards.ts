import { IProject, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Paragraph, ProjectContentItem_Text } from "../interfaces/IProject";
import { ProjectTheme_Red } from "./data-themes";

export const Project_GetCards: IProject = {
    name: 'GetCards',
    short_desc: 'Mobile Game',
    time: 'Summer 2018',
    theme: ProjectTheme_Red,
    tags: ['Ionic', 'iOS', 'Android', 'Firebase'],
    content: [
        new ProjectContentItem_Header({
            header: 'GetCards',
            subtitle: 'This is a mobile drinking game aimed at teens and young adults.'
        }),
        new ProjectContentItem_Paragraph({
            text: new ProjectContentItem_Text({
                text: 'This is some text that will get put into a text paragraph. Fairly easytt'
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