import { IProject, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Paragraph, ProjectContentItem_Text } from "../../interfaces/IProject";
import { ProjectTheme_Green } from ".././data-themes";

export const Project_Fling: IProject = {
    name: 'Fling',
    short_desc: 'Mobile Game',
    time: 'Summer 2017',
    theme: ProjectTheme_Green,
    tags: ['Unity', 'C#', 'iOS', 'Android'],
    content: [
        new ProjectContentItem_Header({
            header: 'Fling - Jump, Collect, Explore!',
            subtitle: 'This is a mobile game aimed towards a younger audience.'
        }),
        new ProjectContentItem_Paragraph({
            header: 'Project __Creation__',
            text: new ProjectContentItem_Text({
                text: 'This was the first commercial project that I released by myself. It took a couple of months to create using !!Unity!! as the core game engine, with the art created in a piece of software called !!MagicaVoxel!!.'
            })
        }),
        new ProjectContentItem_Columns({
            center: false,
            items: [
                new ProjectContentItem_Text({
                    text: 'The art style was a key point that I wanted to nail - I wanted it to look modern, emulating some of the graphics of other popular games at the time while still running smoothly. I had been using !!Unity!! for a while at this point with hobbyist projects but I really wanted to publish something and get my work out there.'
                }),
                new ProjectContentItem_Text({
                    text: 'Once the core game mechanics were in place the biggest task was creating content. This is always something I struggle with as it\'s the final hurdle to overcome. I slowly made characters and levels in tandem with creating the store listing which helped push me forward.'
                })
            ]
        }),
        new ProjectContentItem_Gallery({
            fit: 'contain',
            position: 'bottom',
            maxHeight: '15rem',
            images: [
                '/assets/projects/fling/preview-1.jpg',
            ]
        }),
    ]
}