import { IProject } from "../interfaces/IProject";
import { Project_EasyTheme } from "./projects/data-project-easy-theme";
import { Project_Fling } from "./projects/data-project-fling";
import { Project_GetCards } from "./projects/data-project-getcards";
import { Project_ImagineX } from "./projects/data-project-imagexracer";
import { Project_Knapsack } from "./projects/data-project-knapsack";
import { Project_LetsDraw } from "./projects/data-project-lets-draw";
import { Project_Memoray } from "./projects/data-project-memoray";
import { Project_Sundown } from "./projects/data-project-sundown";

export const AllProjects: IProject[] = [
    Project_LetsDraw,
    Project_EasyTheme,
    // Project_Boxedjs,
    // Project_Knapsack,
    Project_Memoray,
    // Project_Vocal,
    // Project_SantanderX,
    Project_GetCards,
    Project_ImagineX,
    // Project_VersionMaybe,
    Project_Sundown,
    // Project_InputManager,
    Project_Fling,
];