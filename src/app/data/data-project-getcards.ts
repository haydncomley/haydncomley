import { IProject, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Link, ProjectContentItem_Paragraph, ProjectContentItem_Text } from "../interfaces/IProject";
import { ProjectTheme_Red } from "./data-themes";

export const Project_GetCards: IProject = {
    name: 'GetCards',
    short_desc: 'Mobile Game',
    time: 'Summer 2018',
    theme: ProjectTheme_Red,
    tags: ['Ionic', 'iOS', 'Android', 'Firebase'],
    content: [
        new ProjectContentItem_Header({
            header: 'GetCards',
            subtitle: 'A mobile drinking game aimed at students and young adults.'
        }),
        new ProjectContentItem_Paragraph({
            header: 'Inital __Release__',
            text: new ProjectContentItem_Text({
                text: 'The app was released initially on both **iOS & Android** in 2018 using the Unity Game engine. However through the years it has been modernised and moved to **Ionic Native**.'
            })
        }),
        new ProjectContentItem_Columns({
            center: false,
            items: [
                new ProjectContentItem_Text({
                    text: 'Using **Firebase** the app can be updated remotely. The backend allows for unlimited amounts of localisation that can change the UI as well as the contents of the game packs.'
                }),
                new ProjectContentItem_Text({
                    text: 'The game can also have different promotions for different regions meaning it can also capatalise on localised events.'
                })
            ]
        }),
        new ProjectContentItem_Break(),
        new ProjectContentItem_Paragraph({
            header: '__Gameplay__ Overview',
            text: new ProjectContentItem_Text({
                text: 'Users first select a pack they want to play ^^(these are themed and contain different rule sets)^^. They are then promoted to input the names of the people playing. The app will then generate a set of cards containing situations the players must follow, winning or losing these result in sips being given out.'
            })
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
            header: 'Organic __Growth__',
            text: new ProjectContentItem_Text({
                text: 'The app has had moderate success even though there has been no substantial marketing push other than word-of-mouth. The only growth to date has been totally organic - this has worked well for iOS, however Android lacks behind on installs currently.'
            })
        }),
        new ProjectContentItem_Columns({
            center: false,
            items: [
                new ProjectContentItem_Text({
                    text: 'There was also a website created that will direct users to the correct store when opened on on their phone.'
                }),
                new ProjectContentItem_Link({
                    header: 'View Game',
                    link: 'https://getcards.app'
                })
            ]
        }),
    ]
}