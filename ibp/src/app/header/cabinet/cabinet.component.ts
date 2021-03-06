import { Component, OnInit, ViewChild } from '@angular/core';
import { CabinetService } from '../../services/cabinet.service';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { InterfaceUser } from '../../shared/interfaces/users.interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  authorizedUser = {};
  constructor(private cabinetUser: CabinetService,
              private usersService: UsersService,
              private router: Router) { }

  public changeDataUser: InterfaceUser = {
    email: '',
    user: '',
    password: '',
    invite_token: ''
  };

  userData = {};
  userDataChange = {};
  changeSubmited = false;
  accessAdmin = false;

  // access = window.localStorage.getItem(this.userData.access_level);

  ngOnInit() {
    this.cabinetUser.getUser()
    .subscribe(
      response => {this.authorizedUser = response,
        window.localStorage.setItem('userData', JSON.stringify(response));
                   if (response.access_level === 'admin') {
          this.accessAdmin = true;
        }
      },
      error => console.log(error)
    );
  }

    getUser() {
    this.cabinetUser.getUser()
    .subscribe(
      response => {this.authorizedUser = response,
        console.log(this.authorizedUser),
        this.userData = this.authorizedUser;
      },
      error => console.log(error)
    );
  }

  // changeUser(changeUserForm) {
  //   this.cabinetUser.putUser(changeUserForm.value)
  //   .subscribe(
  //     response => console.log(response),
  //     error => console.log(error)
  //   );
  //   console.log('Submited change!', changeUserForm);
  //   this.changeSubmited = true;
  //   this.userDataChange = changeUserForm.value;
  //   changeUserForm.reset();
  // }

  deleteUser(authorizedUser) {
    this.cabinetUser.deleteUser(authorizedUser)
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  // submitInvite(formInvite: NgForm) {
  //   console.log('Запрошення відправлено!', formInvite);
  // }

}
