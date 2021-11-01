import { IProject } from "../interfaces/IProject";
import { Project_Fling } from "./data-project-fling";
import { Project_GetCards } from "./data-project-getcards";
import { Project_InputManager } from "./data-project-inputmanager";
import { Project_Knapsack } from "./data-project-knapsack";
import { Project_Sundown } from "./data-project-sundown";
import { Project_VersionMaybe } from "./data-project-versionmaybe";

export const AllProjects: IProject[] = [
    Project_Knapsack,
    Project_VersionMaybe,
    Project_GetCards,
    Project_Sundown,
    Project_InputManager,
    Project_Fling
];