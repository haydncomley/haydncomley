import i18next from "i18next";

export const Projects = [
    'OutRanked',
    'EasyTheme',
    'LetsDraw',
] as const;

export type Projects = typeof Projects[number];
export type TypedTFunc = (key: string) => string;

export const UseProject = (project: Projects) => {
    const id = `project_${project.toLowerCase().replaceAll(' ', '_')}`

    return {
        t: i18next.getFixedT(i18next.language) as unknown as TypedTFunc,
        project: i18next.getFixedT(i18next.language, `project_${project}`) as unknown as TypedTFunc,
        anchor:`#${id}`,
        id: id,
    };
}