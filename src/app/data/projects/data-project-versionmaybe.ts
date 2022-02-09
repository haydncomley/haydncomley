import { IProject, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Paragraph, ProjectContentItem_Text } from "../../interfaces/IProject";
import { ProjectTheme_VM } from ".././data-themes";

export const Project_VersionMaybe: IProject = {
    name: 'VersionMaybe.',
    short_desc: 'Business Website',
    time: 'Summer 2020',
    is_live: {
        link: 'https://versionmaybe.com'
    },
    theme: ProjectTheme_VM,
    tags: ['SCSS', 'SSR', 'Craft CMS', 'TypeScript'],
    content: [
        new ProjectContentItem_Header({
            header: 'VersionMaybe.',
            subtitle: 'A corporate business website and an integrated blog used generate leads.'
        }),
        new ProjectContentItem_Paragraph({
            header: '__Technology__ Stack',
            text: new ProjectContentItem_Text({
                text: 'This website is built using !!Craft CMS!! as the content management system. This is used alongside fully custom designs in order to give a bespoke and modern appearance.'
            })
        }),
        new ProjectContentItem_Columns({
            center: false,
            items: [
                new ProjectContentItem_Text({
                    text: 'The core reason for going with Craft is that it is efficient and easy to use for both development and marketing. Blocks are built out and then these can be added, rearranged and !!optimised!! for user presentation.'
                }),
                new ProjectContentItem_Text({
                    text: 'Being able to rearrange blocks is just the beginning however as Craft is a !!server side!! solution. This means that more in-depth SEO tactics can be applied by marketing individuals that developers might not focus on.'
                })
            ]
        }),
        new ProjectContentItem_Break(),
        new ProjectContentItem_Paragraph({
            header: 'Design & __Development__',
            text: new ProjectContentItem_Text({
                text: 'The initial website was designed and blocked out using !!Adobe Photoshop!!. This allows me to quickly create elements and make rapid changes to designs as I see fit. It gives a good representation of how a website will flow and can be tweaked ahead of development. As well as this I make sure to create the designs with development considerations ahead of time allowing for a seamless flow when building out the different components later on.'
            })
        }),
        new ProjectContentItem_Gallery({
            fit: 'contain',
            interval: 3000,
            animation: 'slide',
            height: '15rem',
            images: [
                '/assets/projects/versionmaybe/preview-1.webp',
                '/assets/projects/versionmaybe/preview-2.webp',
            ]
        }),
        new ProjectContentItem_Break(),
    ]
}