import { IProject, ProjectContentItem_Header } from "../interfaces/IProject";
import { ProjectTheme_Red } from "./data-themes";

export const Project_GetCards: IProject = {
    name: 'GetCards',
    short_desc: 'Mobile Game',
    time: 'Summer 2020',
    theme: ProjectTheme_Red,
    content: [
        new ProjectContentItem_Header({
            header: 'GetCards',
            subtitle: 'This is a mobile drinking game aimed at teens and young adults.',
            background: '/assets/projects/getcards/shapes.svg'
        })
    ]
}