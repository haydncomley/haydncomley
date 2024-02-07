export interface TProject {
    name: string;
    date: string;
    tags: string[];
    slug: string;
    theme:  'red' |
            'orange' |
            'yellow' |
            'green' |
            'cyan' |
            'turquoise' |
            'blue' |
            'indigo' |
            'violet';
    blocks: TProjectBlocks[];
}

export type TProjectBlocks = TProjectImageBlock | TProjectTextBlock;

export interface TProjectBlock {
    type: string;
    size: {
        width: number;
        height: number;
    };
    content?: unknown;
}

export interface TProjectImageBlock extends TProjectBlock {
    type: 'image';
    content: {
        src: string;
        alt: string;
    };
}

export interface TProjectTextBlock extends TProjectBlock {
    type: 'text';
}