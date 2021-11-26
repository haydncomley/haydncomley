import { IProject, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Image, ProjectContentItem_Link, ProjectContentItem_Paragraph, ProjectContentItem_Text } from "../../interfaces/IProject";
import { ProjectTheme_Purple } from "../data-themes";

export const Project_Boxedjs: IProject = {
    name: 'Boxed JS',
    short_desc: 'Web Framework',
    time: 'Winter 2021',
    is_live: {
        label: 'Learn More',
        link: 'https://boxedjs.com/'
    },
    theme: ProjectTheme_Purple,
    tags: ['Open Source', 'JavaScript', 'Prototype'],
    content: [
        new ProjectContentItem_Header({
            header: 'Boxed JS',
            subtitle: 'This is a mobile drinking game aimed at teens and young adults.'
        }),
        new ProjectContentItem_Columns({
            items: [
                new ProjectContentItem_Text({
                    text: 'This is some text that will get put into a __text paragraph__. 1'
                }),
                new ProjectContentItem_Link({
                    header: 'Visit Site',
                    link: 'https://boxedjs.com',
                }),
            ]
        }),
        new ProjectContentItem_Break(),
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
        }),
        new ProjectContentItem_Columns({
            items: [
                new ProjectContentItem_Text({
                    text: 'This is some text that will get put into a text paragraph. 1'
                }),
                new ProjectContentItem_Link({
                    header: 'Visit Site',
                    link: 'https://boxedjs.com',
                }),
            ]
        }),
    ]
}