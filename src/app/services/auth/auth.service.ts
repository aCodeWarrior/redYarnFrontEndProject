import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url: string = environment.apiURL;
  constructor(private  httpClient: HttpClient) { }

  login(credentiels) {
    return this.httpClient
      .post(`${environment.apiURL}/login_check`, credentiels);
  }
}
