export interface Reply {
    board_index: string; // коротка назва дошки
    index: string; // індекс коментаря
    
}

export interface CreateReply {
    board_index: string; // коротка назва дошки
    post_index: string; // індекс поста до якого робиться коментар
    text: string;
    files: FileList;
}