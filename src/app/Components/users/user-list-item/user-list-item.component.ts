import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/users/user.service';
import {User} from '../../../Models/user.models';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  private _users: User[] = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {

  }

  addUser(form: NgForm){
  }

  get users(): User[] {
    return this._users;
  }

}
