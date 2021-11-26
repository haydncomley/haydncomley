import { IProject } from "../../interfaces/IProject";
import { ProjectTheme_Teal } from ".././data-themes";

export const Project_Knapsack: IProject = {
    name: 'Knapsack',
    short_desc: 'Web Application',
    time: 'Summer 2021',
    is_live: {
        label: 'View Beta',
        link: 'https://beta.knapsack-app.com',
    },
    theme: ProjectTheme_Teal,
    tags: ['Angular', 'Ionic', 'TypeScript', 'PWA']
}