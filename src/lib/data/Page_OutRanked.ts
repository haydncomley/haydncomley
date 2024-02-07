import { TProject } from "../types/TProject.js";

export const Page_OutRanked: TProject = {
    name: 'OutRanked',
    slug: 'out-ranked',
    date: '2021-08-01',
    theme: 'red',
    tags: ['Web App'],
    blocks: [
        {
            type: 'image',
            size: {
                width: 1,
                height: 1
            },
            content: {
                src: '/images/outranked.png',
                alt: 'OutRanked Logo'
            }
        },
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
                width: 2,
                height: 2
            },
            content: ''
        },
        {
            type: 'text',
            size: {
                width: 2,
                height: 3
            },
            content: ''
        },
        {
            type: 'text',
            size: {
                width: 2,
                height: 1
            },
            content: ''
        },
    ]
};