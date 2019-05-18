import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Board, CreateBoard } from 'src/app/shared/interfaces/board.interfaces';
import { BoardsService } from 'src/app/services/boards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageboards',
  templateUrl: './manageboards.component.html',
  styleUrls: ['./manageboards.component.scss']
})

export class ManageboardsComponent implements OnInit {

 createBoard: FormGroup;

  showCreateForm: boolean = true;

  toggleCreateBoard() {
    this.showCreateForm = false;
  }

  toggleCancelBoard() {
    this.showCreateForm = true;
  }

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

  ngOnInit() {this.boardsService.getAllBoards().subscribe((data:Board[]) => {
    this.boards = data;
  });

  this.createBoard = new FormGroup({
    short_name: new FormControl('',[Validators.required, Validators.maxLength(3)]),
    name: new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required])      
  });
};
};
