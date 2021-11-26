import { IProject, IProjectTheme, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Link, ProjectContentItem_Paragraph, ProjectContentItem_Text } from "../../interfaces/IProject";
import { ProjectTheme_Green, ProjectTheme_Orange, ProjectTheme_Red, ProjectTheme_Violet } from ".././data-themes";

export const Project_Sundown: IProject = {
    name: 'Sundown',
    short_desc: 'Festival Website',
    time: 'Winter 2019',
    is_live: {
        label: 'View Demo',
        link: 'https://sundown.haydncomley.com'
    },
    theme: ProjectTheme_Orange,
    tags: ['JavaScript', 'E-Commerce'],
    content: [
        new ProjectContentItem_Header({
            header: 'Sundown',
            subtitle: 'This is a website made for a fictional festival as part of my University course.'
        }),
        new ProjectContentItem_Paragraph({
            header: 'Project __Specification__',
            text: new ProjectContentItem_Text({
                text: 'During my first year of University one of our modules was to create a website for a fake festival that would be taking place locally. The key points were to show the acts performing, to have multiple pages and to look aesthetically pleasing.'
            })
        }),
        new ProjectContentItem_Columns({
            center: false,
            items: [
                new ProjectContentItem_Text({
                    text: 'I had to create everything myself as we were working individually on this project. I also decided early on I was going to involve !!JavaScript!! in order to provide extra functionality in order to go slightly beyond scope and gain extra marks. '
                }),
                new ProjectContentItem_Text({
                    text: 'The extra details added include a functioning store, interactive set-lists, and single page application style transitions. Everything was made with traditional HTML5/JavaScript methods and !!no frameworks!! were used.'
                })
            ]
        }),
        new ProjectContentItem_Gallery({
            fit: 'contain',
            interval: 3000,
            animation: 'slide',
            height: '15rem',
            images: [
                '/assets/projects/getcards/preview-1.png',
                '/assets/projects/getcards/preview-2.png',
            ]
        }),
        new ProjectContentItem_Break(),
        new ProjectContentItem_Paragraph({
            header: 'Vanilla __JavaScript__',
            text: new ProjectContentItem_Text({
                text: 'When making this website I was unaware of TypeScript or frameworks such as Angular & React. However, I had used various sites in the past that acted like single page applications. This pushed me to use clever routing and push my knowledge of JavaScript in order to make it feel like a more advanced !!web application!!.'
            })
        }),
        new ProjectContentItem_Columns({
            center: false,
            items: [
                new ProjectContentItem_Text({
                    text: 'I initially went through some revisions on !!Adobe Photoshop!! before settling on a design to bring forward. I really like the final aesthetic that I went for, and think that I made a really functional website.'
                }),
                new ProjectContentItem_Link({
                    header: 'View Website',
                    link: 'https://sundown.haydncomley.com'
                })
            ]
        }),
        new ProjectContentItem_Gallery({
            fit: 'cover',
            interval: 3000,
            animation: 'slide',
            height: '15rem',
            images: [
                '/assets/projects/getcards/preview-1.png',
                '/assets/projects/getcards/preview-2.png',
            ]
        }),
        new ProjectContentItem_Paragraph({
            header: '__Feedback__',
            text: new ProjectContentItem_Text({
                text: 'I had a really good reception to this project from family and friends. Even some who !!thought this was an actual event!! taking place when I had posted screenshots on my social media. As well as this, my professor was really pleased and I managed to get a !!First!! for this project to start off the academic year.'
            })
        }),
        new ProjectContentItem_Break(),
    ]
}