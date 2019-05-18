import { Reply } from './reply.interfaces';

export interface BoardDetail {
    name: string;
    short_name: string;
    posts: PostDetails[];  
}

export interface PostDetails  {
    subject: string;
    pinned: boolean;
    content: PostContent;
    post_preview: PostContent[];
    }

export interface PostContent{
    index: number;
    text: string;
    created_at: string;
    op: boolean;
    sage: boolean;
    images : ImagesAttachment[];
}

export interface ImagesAttachment{
    file: FileAttachment;
}

export interface FileAttachment{
    url: string;
    thumb: Thumb;
}
export interface Thumb{
    url:string;
}