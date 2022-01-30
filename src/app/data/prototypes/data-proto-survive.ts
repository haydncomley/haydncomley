import { IProject, ProjectContentItem_Header } from "../../interfaces/IProject";
import { ProjectTheme_BlueGold, ProjectTheme_Forest, ProjectTheme_Green, ProjectTheme_Teal } from ".././data-themes";

export const Prototype_Survive: IProject = {
    name: 'Turtle Torture',
    short_desc: 'Game Jam',
    time: 'Mid 2019',
    is_live: {
        label: 'View Submission',
        link: 'https://ldjam.com/events/ludum-dare/43/savetheturles'
    },
    theme: ProjectTheme_Forest,
    tags: ['Unity', 'C#', 'Ludum Dare'],
    content: [
        new ProjectContentItem_Header({
            header: 'Turtle Torture',
            subtitle: 'This is a website made for a fictional festival as part of my University course.'
        }),
    ]
}