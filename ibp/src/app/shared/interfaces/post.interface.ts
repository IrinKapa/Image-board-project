export interface Post {
    board_index: string;
    post_index: string;
}

export interface CreatePost {
    board_index: string;
    subject: string;
    text: string;
    files: FileList;
}