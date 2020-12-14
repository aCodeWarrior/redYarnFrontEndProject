import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {AuthComponent} from './Components/auth/auth.component';
import {ProfilListCollectionComponent} from './Components/profils/profil-list-collection/profil-list-collection.component';
import {UserListCollectionComponent} from './Components/users/user-list-collection/user-list-collection.component';
import {UserCreationComponent} from './Components/users/user-creation/user-creation.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent},
  { path: 'admin/profils', component: ProfilListCollectionComponent},
  { path: 'admin/users', component: UserListCollectionComponent},
  { path: 'admin/user/create', component: UserCreationComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
