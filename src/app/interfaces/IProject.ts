import { Component } from "@angular/core";
import { ProjectItemBreakComponent } from "../components/projects/project-item-break/project-item-break.component";
import { ProjectItemColumnsComponent } from "../components/projects/project-item-columns/project-item-columns.component";
import { ProjectItemGalleryComponent } from "../components/projects/project-item-gallery/project-item-gallery.component";
import { ProjectItemHeaderComponent } from "../components/projects/project-item-header/project-item-header.component";
import { ProjectItemImageComponent } from "../components/projects/project-item-image/project-item-image.component";
import { ProjectItemLinkComponent } from "../components/projects/project-item-link/project-item-link.component";
import { ProjectItemParagraphComponent } from "../components/projects/project-item-paragraph/project-item-paragraph.component";
import { ProjectItemTextComponent } from "../components/projects/project-item-text/project-item-text.component";

export interface IProject {
    name: string;
    short_desc: string;
    time: string;
    theme: IProjectTheme;
    content?: ProjectContentItem[];
    tags: string[];
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
        background?: string
    }) { super(props) }
}

export class ProjectContentItem_Text extends ProjectContentItem {
    component = ProjectItemTextComponent;
    constructor(props: {
        text: string;
    }) { super(props) }
}

export class ProjectContentItem_Columns extends ProjectContentItem {
    component = ProjectItemColumnsComponent;
    constructor(props: {
        items: ProjectContentItem[];
        minWidth?: string;
        center?: boolean;
    }) { super(props) }
}

export class ProjectContentItem_Paragraph extends ProjectContentItem {
    component = ProjectItemParagraphComponent;
    constructor(props: {
        header?: string;
        text: ProjectContentItem_Text;
    }) { super(props) }
}

export class ProjectContentItem_Break extends ProjectContentItem {
    component = ProjectItemBreakComponent;
    constructor() { super({}) }
}

export class ProjectContentItem_Image extends ProjectContentItem {
    component = ProjectItemImageComponent;
    constructor(props: {
        image: string;
    }) { super(props) }
}

export class ProjectContentItem_Link extends ProjectContentItem {
    component = ProjectItemLinkComponent;
    constructor(props: {
        header: string;
        link: string;
        filled?: boolean;
    }) { super(props) }
}

export class ProjectContentItem_Gallery extends ProjectContentItem {
    component = ProjectItemGalleryComponent;
    constructor(props: {
        images: string[];
        height?: string;
        interval?: number;
        fit?: 'contain' | 'cover';
        animation?: 'swipe' | 'slide';
    }) { super(props) }
}