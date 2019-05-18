import { Component, OnInit } from '@angular/core';
import { CreateReply, Reply} from '../shared/interfaces/reply.interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReplyService } from '../services/reply.service';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.scss']
})
export class RepliesComponent implements OnInit {

  createReply: FormGroup;

  public replies: Reply[];

  private boardIndex: string;
  private postIndex: string;

  constructor(private replyService: ReplyService,
              private router: Router,
              private route: ActivatedRoute) {
                this.route.params.subscribe((params: Params) =>{
                  if (params["board_index"]) {
                    this.boardIndex = params["board_index"];
                    console.log(this.boardIndex);
                  };
                });
                this.route.params.subscribe((postParams: Params) => {
                  if (postParams["post_index"]) {
                    this.postIndex = postParams["post_index"];
                    console.log(this.postIndex);
                  }
                })
               }

  public createNewReply: CreateReply = {
    board_index: '',
    post_index: '',
    text: '',
    files: null,
  };


  handleFileInput(files: FileList) {
    this.createNewReply.files = files;
};

  addNewReply(){
    this.replyService.createNewReply(this.createNewReply, this.boardIndex, this.postIndex)
    .subscribe(reply =>{
      console.log(reply);
      this.createNewReply.text = '';
    })
  };

  createCite(t:Tag){
    let split = this.splitString(this.createNewReply.text, this.getCursorPosition());
    let newStr = split.leftSide + t.getCite() + split.rigthSide;
    this.createNewReply.text = newStr;
    let textarea = document.querySelector('.textarea');
    let span = document.createElement('span');
    span.className = 'quote';
    textarea.appendChild(span);
    setTimeout(() => 
      this.setCursorPosition(split.leftSide.length + t.getLenght()),
      500
    )
  };

  circleRight(){
    this.createCite(new Tag(">"))
  };

  boldClicked(){
    this.appendTag(new Tag("b"));
  };

  italicClicked(){
  this.appendTag(new Tag("i"));
  };

  underlineClicked(){
  this.appendTag(new Tag("u"));
  };

  strikethroughClicked(){
    this.appendTag(new Tag("s"));
  };

  subscriptClicked(){
    this.appendTag(new Tag("sub"));
  };

  superscriptClicked(){
    this.appendTag(new Tag("sup"));
  };

  getCursorPosition(){
    let myTextArea = document.getElementById('area') as HTMLInputElement;
    let index = myTextArea.selectionStart; 
    return index;
  };

  setCursorPosition(position: number){
    let myTextArea = document.getElementById('area') as HTMLInputElement;
    myTextArea.focus();
    myTextArea.setSelectionRange(position, position);
  };
 
  splitString(str: string, index:number){
    return {
      leftSide: str.substring(0, index),
      rigthSide: str.substring(index, str.length)
    };
  };
  
  appendTag(t:Tag){
    let split = this.splitString(this.createNewReply.text, this.getCursorPosition());
    let newStr = split.leftSide + t.getFullTag() + split.rigthSide;
    this.createNewReply.text = newStr;
    setTimeout(() => 
      this.setCursorPosition(split.leftSide.length + t.getLenght()),
      500
    )
  };

  ngOnInit() {
    this.createReply = new FormGroup({
      text: new FormControl('', [Validators.required])
    });
  };
};

class Tag { 
  constructor(tagValue:string){
    this.tag = tagValue;
  }

  private tag : string;

  getCite(){
    return ">";
  };

  openTag(){
    return "[" + this.tag + "]";
  };

  closeTag(){
    return "[/" + this.tag + "]";
  };

  getFullTag(){
    return this.openTag() + this.closeTag();
  };

  getLenght(){
    return this.openTag().length;
  };

};
