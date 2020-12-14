import {User} from './user.models';
import {Profil} from './profil.models';
export class Admin extends User{

  constructor(id: number, fistname: string, lastname: string, email: string,
              password: string, avatar: any, isDeleted: boolean, username: string,
              profil: Profil, role: string) {
    super(id, fistname, lastname, email, password, avatar, isDeleted, username, profil, role);
  }
}
