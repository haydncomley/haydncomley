export interface IProject {
    name: string;
    short_desc: string;
    time: string;

    theme: IProjectTheme;
}

export interface IProjectTheme {
    primary: string;
    secondary: string;
    contrast: string;
}