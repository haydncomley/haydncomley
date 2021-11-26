import { IProject } from "../interfaces/IProject";
import { Project_Boxedjs } from "./projects/data-project-boxedjs";
import { Project_Knapsack } from "./projects/data-project-knapsack";
import { Project_Sundown } from "./projects/data-project-sundown";
import { Prototype_Pubs } from "./prototypes/data-proto-pubs";
import { Prototype_Survive } from "./prototypes/data-proto-survive";

export const AllPrototypes: IProject[] = [
    Project_Boxedjs,
    Project_Knapsack,
    Project_Sundown,
    Prototype_Pubs,
    Prototype_Survive,
]