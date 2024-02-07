import { TProject } from "../types/TProject.js";

export const Page_EasyTheme: TProject = {
    name: 'EasyTheme',
    slug: 'easy-theme',
    date: '2021-08-01',
    theme: 'indigo',
    tags: ['Web App'],
    blocks: [
        {
            type: 'text',
            size: {
                width: 1,
                height: 1
            },
            content: ''
        },
        {
            type: 'text',
            size: {
                width: 1,
                height: 2
            },
            content: ''
        },
        {
            type: 'text',
            size: {
                width: 2,
                height: 2
            },
            content: ''
        },
        {
            type: 'image',
            size: {
                width: 2,
                height: 2
            },
            content: {
                src: '/images/outranked.png',
                alt: 'OutRanked Logo'
            }
        }
    ]
};