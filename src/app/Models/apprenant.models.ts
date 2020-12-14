import {User} from './user.models';
import {ProfilSortie} from './profilSortie.models';
import {Profil} from './profil.models';
export class Apprenant extends User{
  private _profilSortie: ProfilSortie | null;

  constructor(id: number, fistname: string, lastname: string, email: string,
              password: string, avatar: any, isDeleted: boolean, username: string,
              profil: Profil, role: string, profilSortie: ProfilSortie) {
    super(id, fistname, lastname, email, password, avatar, isDeleted, username, profil, role);
    this._profilSortie = profilSortie;
  }
}
