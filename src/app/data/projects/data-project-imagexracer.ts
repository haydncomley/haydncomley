import { IProject, ProjectContentItem_Break, ProjectContentItem_Columns, ProjectContentItem_Gallery, ProjectContentItem_Header, ProjectContentItem_Paragraph, ProjectContentItem_Text } from "../../interfaces/IProject";
import { ProjectTheme_Blue, ProjectTheme_Green, ProjectTheme_ImagineX } from ".././data-themes";

export const Project_ImagineX: IProject = {
    name: 'ImagineX Racer',
    short_desc: 'Web Application + Game',
    time: 'Late 2020',
    theme: ProjectTheme_ImagineX,
    tags: ['Angular', 'C#', 'Unity', 'Web Assembly'],
    content: [
        new ProjectContentItem_Header({
            header: 'ImagineX Racer',
            subtitle: 'An online racing game & web application that aids with STEM learning.'
        }),
        new ProjectContentItem_Paragraph({
            header: 'Project __Specification__',
            text: new ProjectContentItem_Text({
                text: 'This application was a freelance project I completed for !!RS Components!! and !!PDC Racing!! as an interactive part of learning materials provided to students during COVID.'
            })
        }),
        new ProjectContentItem_Columns({
            center: false,
            items: [
                new ProjectContentItem_Text({
                    text: 'This project allowed me to use a range of skills over the entire project - it\'s a culmination of !!design and development!! knowledge that I learnt up to this point.'
                }),
                new ProjectContentItem_Text({
                    text: 'I handled everything from !!client expectations, design, development and testing!!. Scope was defined between myself and the client and was developed over the period of about !!3-5 months!!.'
                })
            ]
        }),
        new ProjectContentItem_Paragraph({
            header: '__Technology__ Stack',
            text: new ProjectContentItem_Text({
                text: 'This application used a range of technologies in order to produce the final product. The front-end UI was built using entirely custom components within !!Angular!!. The 3D engine was developed within !!Unity!! using a !!custom web-interface!! between the game engine and browser.'
            })
        }),
        new ProjectContentItem_Paragraph({
            text: new ProjectContentItem_Text({
                text: 'I had to create a custom interface that allowed for easy communication between the !!Angular UI!! and the exported !!Web-Assembly Modules!!. This allowed me to easily pass data to and from the game such as state, user information, game variables and more.'
            })
        }),
        new ProjectContentItem_Break(),
        new ProjectContentItem_Gallery({
            fit: 'contain',
            interval: 3000,
            animation: 'slide',
            height: '15rem',
            images: [
                '/assets/projects/imaginex/preview-1.png',
                '/assets/projects/imaginex/preview-2.png',
                '/assets/projects/imaginex/preview-3.png',
            ]
        }),
        new ProjectContentItem_Columns({
            center: false,
            items: [
                new ProjectContentItem_Text({
                    text: 'This application is used by students after they have gone through a learning pack with their teacher. The student then comes onto the application to apply the knowledge they have learnt.'
                }),
                new ProjectContentItem_Text({
                    text: 'They have to select different parts of a car ^^(e.g. engine size, aero package)^^ to fit a randomly generated track & weather conditions. They can then view it in 3D and watch it drive round the different circuits.'
                })
            ]
        }),
        new ProjectContentItem_Paragraph({
            text: new ProjectContentItem_Text({
                text: 'The teacher can view the progress of all the students from a !!separate admin dashboard!! within the application that !!updates in realtime!!. When all the students have created cars and completed their practice laps, the teacher can bring all the cars into a single race in order to see who has !!applied their knowledge!! from the lesson best.'
            })
        }),
        new ProjectContentItem_Break(),
    ]
}