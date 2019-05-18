import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BoardDetail } from '../shared/interfaces/board-detail.interfaces';
import { BoardsComponent } from '../header/boards/boards.component';

const jsonHttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const urlEnhttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
}

@Injectable({
  providedIn: 'root'
})
export class BoardDetailService {

  constructor(private http: HttpClient) { }
  baseApi = 'http://localhost:3000/api/';

  getAllPosts(shortName:string){
    return this.http.get<BoardDetail>(this.baseApi + 'boards/' + shortName);
  };
  // getAllReplies (shortName: string){
  //   return this.http.get<BoardDetail>(this.baseApi + 'replies/' + shortName);
  //   }
}
