import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilListCollectionComponent } from './Components/profils/profil-list-collection/profil-list-collection.component';
import { ProfilListItemComponent } from './Components/profils/profil-list-item/profil-list-item.component';
import { UserListCollectionComponent } from './Components/users/user-list-collection/user-list-collection.component';
import { UserListItemComponent } from './Components/users/user-list-item/user-list-item.component';
import { HomeComponent } from './Components/home/home.component';
import {UserService} from './services/users/user.service';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './Material/material.module';
import {DefaultNavBarComponent} from './Components/default-nav-bar/default-nav-bar.component';
import { AuthComponent } from './Components/auth/auth.component';
import {RequestsInterceptorProvider} from './Interceptors/requests.interceptor';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { UserCreationComponent } from './Components/users/user-creation/user-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfilListCollectionComponent,
    ProfilListItemComponent,
    UserListCollectionComponent,
    UserListItemComponent,
    HomeComponent,
    DefaultNavBarComponent,
    AuthComponent,
    NavBarComponent,
    UserCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    RequestsInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
