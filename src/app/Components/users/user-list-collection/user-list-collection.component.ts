import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/users/user.service';
import {User} from '../../../Models/user.models';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-user-list-collection',
  templateUrl: './user-list-collection.component.html',
  styleUrls: ['./user-list-collection.component.css']
})
export class UserListCollectionComponent implements OnInit {
  private _users: User[] = [];
  displayedColumns: string[] = ['avatar', 'firstname', 'lastname', 'username', 'email', 'profil', 'actions'];
  constructor(private userService: UserService, private sanitzer: DomSanitizer) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(
        responses => {
          this.users = responses;
        }
      );
  }
  transform(encodedImage): SafeResourceUrl {
    encodedImage = 'data:image/png;base64,' + encodedImage;
    return this.sanitzer.bypassSecurityTrustResourceUrl(encodedImage);
  }
  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }
}
