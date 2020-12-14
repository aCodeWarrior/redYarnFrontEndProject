import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Profil} from '../../../Models/profil.models';
import {ProfilsService} from '../../../services/profils/profils.service';
import {User} from '../../../Models/user.models';
import {UserService} from '../../../services/users/user.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  hide: boolean = true;
  private _create = new FormGroup({
    lastname: new FormControl(),
    firstname: new FormControl(),
    email: new FormControl(),
    profil: new FormControl(),
    avatar: new FormControl()
  });
  private _profils: Profil[] = [];
  constructor(private profiService: ProfilsService, private userService: UserService) { }

  ngOnInit(): void {
    this.profiService.getProfils()
      .subscribe(
        response => {
          for (const responseElement of response) {
            const {id, libelle, isDeleted} = responseElement;
            const profil = new Profil(libelle);
            profil._isDeleted = isDeleted;
            profil._id = id;
            this._profils.push(profil);
          }
        }
      );
  }
  onAdd(): void {
    const { lastname, firstname, email, avatar, profil} = this._create.value;
    const user = new FormData();
    user.append('firstname', firstname);
    user.append('lastname', lastname);
    user.append('email', email);
    user.append('avatar', avatar);
    // const user = new User(firstname, lastname, email, avatar, '');
    // user._profil._id = profil;
    this.userService.add(user)
      .subscribe(
        response => {
          console.log(response);
        }
      );

  }

  get create(): FormGroup {
    return this._create;
  }

  get profils(): Profil[] {
    return this._profils;
  }
}
