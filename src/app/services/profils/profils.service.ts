import { Injectable } from '@angular/core';
import {Profil} from '../../Models/profil.models';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {
  private _profils: Profil[];
  constructor(private httpClient: HttpClient) {
    this._profils = [];
  }

  get profils(): Profil[] {
    return this._profils;
  }
  getProfils(): Observable<any>{
    return this.httpClient.get(`${environment.apiURL}/admin/profils`);
  }
}
