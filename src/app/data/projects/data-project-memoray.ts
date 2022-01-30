import { IProject, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Link, ProjectContentItem_Paragraph, ProjectContentItem_Text } from "../../interfaces/IProject";
import { ProjectTheme_Memoray } from ".././data-themes";

export const Project_Memoray: IProject = {
    name: 'Memo-rays',
    short_desc: 'AI Powered Application',
    time: 'Early 2022',
    is_live: {
        link: 'httsp://memo-ray.web.app/'
    },
    theme: ProjectTheme_Memoray,
    tags: ['Ionic', 'Angular', 'TypeScript'],
    content: [
        new ProjectContentItem_Header({
            header: 'Memo-rays',
            subtitle: 'An AI powered web application to digitise and tag old photographs.'
        }),
        new ProjectContentItem_Paragraph({
            header: 'Project __Details__',
            text: new ProjectContentItem_Text({
                text: 'This application was built to a specification set out my one of my final year modules at the !!University of Portsmouth!!. The core principle was to use AI in a practical and interesting way.'
            })
        }),
        new ProjectContentItem_Columns({
            center: false,
            items: [
                new ProjectContentItem_Text({
                    text: 'I have had the idea to create an app that allows me to !!digitise old photographs!! for a while so this seemed like the perfect time to do so. This was built in a week using a mixture of frameworks.'
                }),
                new ProjectContentItem_Text({
                    text: 'The front-end is built using !!Ionic & Angular!! along with custom components - and the backend database is being handled with !!Google Firebase!!.'
                })
            ]
        }),
        new ProjectContentItem_Gallery({
            fit: 'contain',
            interval: 3000,
            animation: 'slide',
            height: '15rem',
            images: [
                '/assets/projects/memoray/preview-1.png',
                '/assets/projects/memoray/preview-2.png',
            ]
        }),
        new ProjectContentItem_Paragraph({
            header: '__Using AI__',
            text: new ProjectContentItem_Text({
                text: 'AI is used in two ways within the application. The first is to detect and aid with image reconstruction. !!Open CV!! allows me to transform an image that a user marks out within the UI in order to crop the document to size.\n\nI then use a pre-trained model alongside !!TensorFlow.js!! on the device in order to !!detect faces!! and extract their positions within a photo. Users can then tag these (similar to social-media sites) in order to use as filtering later on.'
            })
        }),
        new ProjectContentItem_Break(),
        new ProjectContentItem_Columns({
            center: true,
            items: [
                new ProjectContentItem_Text({
                    text: 'The app is publicly available and works for Web & Mobile Devices - however it was built with a mobile first approach.'
                }),
                new ProjectContentItem_Link({
                    header: 'View App',
                    link: 'https://memo-ray.web.app/'
                })
            ]
        }),
        new ProjectContentItem_Break(),
    ]
}