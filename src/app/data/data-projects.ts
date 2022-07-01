import { IProject } from '../interfaces/IProject';
import { Project_DiscordLinker } from './projects/data-project-discordlinker';
import { Project_EasyTheme } from './projects/data-project-easy-theme';
import { Project_Fling } from './projects/data-project-fling';
import { Project_GetCards } from './projects/data-project-getcards';
import { Project_ImagineX } from './projects/data-project-imagexracer';
import { Project_Knapsack } from './projects/data-project-knapsack';
import { Project_LetsDraw } from './projects/data-project-lets-draw';
import { Project_Sundown } from './projects/data-project-sundown';

export const AllProjects: IProject[] = [
	Project_DiscordLinker,
	Project_EasyTheme,
	Project_LetsDraw,
	// Project_Boxedjs,
	Project_Knapsack,
	// Project_Memoray,
	// Project_Vocal,
	// ,
	// Project_HaydnComley,
	// Project_Portfolio,
	// Project_SantanderX,
	Project_GetCards,
	Project_ImagineX,
	// Project_VersionMaybe,
	Project_Sundown,
	// Project_InputManager,
	Project_Fling,
];
