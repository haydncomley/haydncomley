import { IProject } from "../interfaces/IProject";
import { Project_Boxedjs } from "./data-project-boxedjs";
import { Project_Fling } from "./data-project-fling";
import { Project_GetCards } from "./data-project-getcards";
import { Project_HaydnComley } from "./data-project-haydncomley";
import { Project_ImagineX } from "./data-project-imagexracer";
import { Project_InputManager } from "./data-project-inputmanager";
import { Project_Knapsack } from "./data-project-knapsack";
import { Project_Portfolio } from "./data-project-portfolio";
import { Project_Sundown } from "./data-project-sundown";
import { Project_VersionMaybe } from "./data-project-versionmaybe";
import { Project_Vocal } from "./data-project-vocal";

export const AllProjects: IProject[] = [
    Project_Vocal,
    Project_Boxedjs,
    Project_HaydnComley,
    Project_Portfolio,
    // Project_Knapsack,
    Project_ImagineX,
    Project_VersionMaybe,
    Project_Sundown,
    Project_GetCards,
    Project_InputManager,
    Project_Fling,
];