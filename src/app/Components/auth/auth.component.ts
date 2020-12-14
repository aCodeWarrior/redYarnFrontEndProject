import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private _loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });
  private  authSubscription = new Subscription();
  private _hide = true;
  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void{
    const credentiels = this.loginForm.value;
    console.log(credentiels);
    const tokenName = 'token';
    this.authSubscription = this.authService.login(credentiels).subscribe(
      response => {
        const token = response[tokenName];
        localStorage.setItem(environment.tokenName, token);
        if ( token ) {
          this._router.navigate(['admin/profils']);
        }
      },
      error => {
      }
    );
  }

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  get hide(): boolean {
    return this._hide;
  }

  set hide(value: boolean) {
    this._hide = value;
  }
}
