import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userName: string = '';
  createUserStatus: string = '';

  constructor() { }

  ngOnInit() {
  }

  onCreateUser() {
    this.createUserStatus = 'New user created: ' + this.userName;
    this.userName = '';
  }

  onResetUser() {
    this.userName = '';
  }
}
