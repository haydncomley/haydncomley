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

export type TProjectBlocks = TProjectEmptyBlock | TProjectTitleBlock | TProjectImageBlock | TProjectTextBlock;

export interface TProjectBlock {
    type: string;
    size: {
        width: number;
        height: number;
    };
    content?: unknown;
}

// Done
export interface TProjectEmptyBlock extends TProjectBlock {
    type: 'empty';
}

export interface TProjectTitleBlock extends TProjectBlock {
    type: 'title';
    content: {
        text: string;
    }
}

// In-progress
export interface TProjectImageBlock extends TProjectBlock {
    type: 'image';
    content: {
        src: string;
        alt: string;
        caption?: string;
    };
}

export interface TProjectTextBlock extends TProjectBlock {
    type: 'text';
}