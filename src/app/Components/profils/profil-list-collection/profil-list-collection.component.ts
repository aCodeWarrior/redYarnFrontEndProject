import { Component, OnInit } from '@angular/core';
import {ProfilsService} from '../../../services/profils/profils.service';
import {Profil} from '../../../Models/profil.models';

@Component({
  selector: 'app-profil-list-collection',
  templateUrl: './profil-list-collection.component.html',
  styleUrls: ['./profil-list-collection.component.css']
})
export class ProfilListCollectionComponent implements OnInit {
  private _profils: Profil[] = [];
  displayedColumns: string[] = ['Libelle', 'Action'];
  constructor(private profilService: ProfilsService) { }

  ngOnInit(): void {
    this.profilService.getProfils()
      .subscribe(
        response => {
          for (const responseElement of response) {
            const {id, libelle, isDeleted} = responseElement;
            const profil = new Profil(libelle);
            profil._id = id;
            profil._isDeleted = isDeleted;
            this._profils.push(profil);
          }
          console.log(this._profils);
        },
        error => {
          console.log(error);
        }
      );
  }


  get profils(): Profil[] {
    return this._profils;
  }
}
