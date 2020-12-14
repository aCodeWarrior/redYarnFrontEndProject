import { Injectable} from '@angular/core';
import {User} from '../../Models/user.models';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiURL;
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.url}/admin/users?page=3`);
  }

  add(user: FormData): Observable<any>{
    const header = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    return this.httpClient
            .post(`${this.url}/admin/users`, user, {
              headers: header
            });
  }
}
