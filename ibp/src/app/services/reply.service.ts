import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reply, CreateReply} from '../shared/interfaces/reply.interfaces';

const jsonHttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const formDataOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
}

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private http:HttpClient) { }
  baseApi = 'http://localhost:3000/api/';

  createNewReply(reply: CreateReply, shortName: string, postIndex: string){
      let formData = new FormData();
          formData.append('reply[text]', reply.text);

          if (reply.files !== null) {
            for (let i = 0; i < reply.files.length; i++) {
              let file = reply.files.item(i);
              formData.append('reply[attachments_attributes][]', file, file.name);
            };
          };

          return this.http.post<any>(this.baseApi + 'replies/' + shortName + '/' + postIndex, formData);
  };
};