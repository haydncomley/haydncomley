import { IProject, IProjectTheme } from "../interfaces/IProject";
import { ProjectTheme_Green, ProjectTheme_Violet, ProjectTheme_VM } from "./data-themes";

export const Project_VersionMaybe: IProject = {
    name: 'VersionMaybe.',
    short_desc: 'Business Website',
    time: 'Summer 2020',
    theme: ProjectTheme_VM,
    tags: ['Angular', 'CMS', 'TypeScript', 'Static']
}