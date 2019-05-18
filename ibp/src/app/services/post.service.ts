import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreatePost, Post} from '../shared/interfaces/post.interface';

const jsonHttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const formDataOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  baseApi = 'http://localhost:3000/api/';


 createNewPost (post: CreatePost, boardShortName: string) {
  let formData: FormData = new FormData();
      formData.append('post[subject]', post.subject);
      formData.append('post[replies_attributes][text]', post.text);

      for (let i = 0; i < post.files.length; i++) {
        let file = post.files.item(i);
        formData.append('post[replies_attributes][attachments_attributes][]', file, file.name);  
      }
      
      return this.http.post<any>(this.baseApi + 'posts/'+ boardShortName, formData);
  
  };

  getReplyForPost(board_index: string, post_index: string){
    return this.http.get<Post[]>(this.baseApi + 'posts/' + board_index + '/' + post_index);
  }
};