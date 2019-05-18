import { Component, OnInit, HostBinding } from '@angular/core';
import { Board, CreateBoard } from '../../shared/interfaces/board.interfaces';
import { BoardsService } from '../../services/boards.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})

export class BoardsComponent implements OnInit {


  createBoard: FormGroup;

  showCreateForm: boolean = true;

  toggleCreateBoard() {
    this.showCreateForm = false;
  }

  // toggleCancelBoard() {
  //   this.showCreateForm = true;
  // }

  public boards: Board[];

  constructor(private boardsService: BoardsService,
              private router: Router) {}

  public createNewBoard: CreateBoard = {
    name: '',
    short_name: '',
    description: '',
  };

  addBoard() {
    this.boardsService.createBoard(this.createNewBoard)
    .subscribe(board => {
      console.log(board);
      this.createNewBoard.name = '';
      this.createNewBoard.short_name = '';
      this.createNewBoard.description = '';
      this.showCreateForm = true;
    });
  };
 
  ngOnInit() {
    this.boardsService.getAllBoards().subscribe((data:Board[]) => {
      this.boards = data;
    });

    this.createBoard = new FormGroup({
      short_name: new FormControl('',[Validators.required, Validators.maxLength(3)]),
      name: new FormControl('',[Validators.required]),
      description: new FormControl('', [Validators.required])      
    });
  }
}
