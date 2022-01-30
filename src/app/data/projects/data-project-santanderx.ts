import { IProject, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Link, ProjectContentItem_Paragraph, ProjectContentItem_Text } from "../../interfaces/IProject";
import { ProjectTheme_Santander, ProjectTheme_Teal } from ".././data-themes";

export const Project_SantanderX: IProject = {
    name: 'Santander X Awards',
    short_desc: 'National Competition',
    time: 'Mid 2021',
    theme: ProjectTheme_Santander,
    tags: ['Angular', 'Ionic', 'TypeScript', 'PWA'],
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
    ]
}