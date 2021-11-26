import { IProject, ProjectContentItem_Header } from "../../interfaces/IProject";
import { ProjectTheme_BlueGold, ProjectTheme_Teal } from ".././data-themes";

export const Prototype_Pubs: IProject = {
    name: 'Fourteen Units',
    short_desc: 'Data Visualisation',
    time: 'Winter 2019',
    theme: ProjectTheme_BlueGold,
    tags: ['Deck.GL', 'Google Maps API', 'FSA API'],
    content: [
        new ProjectContentItem_Header({
            header: 'Fourteen Units',
            subtitle: 'This is a website made for a fictional festival as part of my University course.'
        }),
    ]
}