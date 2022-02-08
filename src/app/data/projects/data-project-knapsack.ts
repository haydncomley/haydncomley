import { IProject } from "../../interfaces/IProject";
import { ProjectTheme_Teal } from ".././data-themes";

export const Project_Knapsack: IProject = {
    name: 'Knapsack',
    short_desc: 'Web Application',
    time: 'Early 2022',
    is_live: {
        label: 'View Beta',
        link: 'https://beta.knapsack-app.com',
    },
    theme: ProjectTheme_Teal,
    tags: ['Angular', 'SaaS', 'TypeScript', 'PWA']
}