import { Component } from "@angular/core";
import { ProjectItemHeaderComponent } from "../components/projects/project-item-header/project-item-header.component";

export interface IProject {
    name: string;
    short_desc: string;
    time: string;
    theme: IProjectTheme;
    content?: ProjectContentItem[];
}

export interface IProjectTheme {
    primary: string;
    secondary: string;
    contrast: string;
}

export abstract class ProjectContentItem {
    abstract component: any;
    props: unknown;

    constructor(props: unknown) {
        this.props = props;
    }
}

export class ProjectContentItem_Header extends ProjectContentItem {
    component = ProjectItemHeaderComponent;
    constructor(props: {
        header: string,
        subtitle?: string,
        background: string
    }) { super(props) }
}