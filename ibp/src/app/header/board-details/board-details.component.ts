import { Component, OnInit } from '@angular/core';
import { BoardDetail, PostDetails, ImagesAttachment, PostContent } from '../../shared/interfaces/board-detail.interfaces';
import { BoardDetailService } from '../../services/board-detail.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.scss']
})
export class BoardDetailsComponent implements OnInit {

  private baseUrl = 'http://localhost:3000';

  public boardDetail: BoardDetail;

  public boardName: string;
  
  public bigImage: string = null;

  constructor(private boardDetailService: BoardDetailService,
              private router: Router,
              private route: ActivatedRoute) { 
    this.route.params.subscribe((params: Params) => { 
      if (params["short_name"]) {
          this.boardName = params["short_name"];
        }
      });
     };

  ngOnInit() {
    this.boardDetailService.getAllPosts(this.boardName).subscribe((data:BoardDetail) => {
      this.boardDetail = data;
      console.log(this.boardDetail);
    });
  }

  setActiveBigImage(image: string){
    this.bigImage = image;
  }

  getImageAttachment(content: PostContent){
    let attachments = content.images.map(a => a.file);
    return attachments;
  }

  addBaseUrl(source: string){
    return this.baseUrl + source;
  };
};
