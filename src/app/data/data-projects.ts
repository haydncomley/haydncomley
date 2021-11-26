import { IProject } from "../interfaces/IProject";
import { Project_Boxedjs } from "./projects/data-project-boxedjs";
import { Project_Fling } from "./projects/data-project-fling";
import { Project_GetCards } from "./projects/data-project-getcards";
import { Project_HaydnComley } from "./projects/data-project-haydncomley";
import { Project_ImagineX } from "./projects/data-project-imagexracer";
import { Project_InputManager } from "./projects/data-project-inputmanager";
import { Project_Knapsack } from "./projects/data-project-knapsack";
import { Project_Portfolio } from "./projects/data-project-portfolio";
import { Project_SantanderX } from "./projects/data-project-santanderx";
import { Project_Sundown } from "./projects/data-project-sundown";
import { Project_VersionMaybe } from "./projects/data-project-versionmaybe";
import { Project_Vocal } from "./projects/data-project-vocal";

export const AllProjects: IProject[] = [
    Project_Vocal,
    // Project_Boxedjs,
    // Project_HaydnComley,
    Project_Portfolio,
    Project_SantanderX,
    // Project_Knapsack,
    Project_ImagineX,
    Project_VersionMaybe,
    // Project_Sundown,
    Project_GetCards,
    Project_InputManager,
    Project_Fling,
];