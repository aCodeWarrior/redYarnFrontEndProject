import {Profil} from './profil.models';
export class User {
  private id: number = null;
  private firstname: string;
  private lastname: string;
  private email: string;
  private password: string;
  private avatar: any;
  private isDeleted: boolean;
  private username: string;
  private profil: Profil = new Profil('');

  constructor(firstname: string, lastname: string, email: string, avatar: any, username: string) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.avatar = avatar;
      this.username = username;
  }


  get _id(): number {
    return this.id;
  }

  set _id(value: number) {
    this.id = value;
  }

  get _firstname(): string {
    return this.firstname;
  }

  set _firstname(value: string) {
    this.firstname = value;
  }

  get _lastname(): string {
    return this.lastname;
  }

  set _lastname(value: string) {
    this.lastname = value;
  }

  get _email(): string {
    return this.email;
  }

  set _email(value: string) {
    this.email = value;
  }

  get _password(): string {
    return this.password;
  }

  set _password(value: string) {
    this.password = value;
  }

  get _avatar(): any {
    return this.avatar;
  }

  set _avatar(value: any) {
    this.avatar = value;
  }

  get _isDeleted(): boolean {
    return this.isDeleted;
  }

  set _isDeleted(value: boolean) {
    this.isDeleted = value;
  }

  get _username(): string {
    return this.username;
  }

  set _username(value: string) {
    this.username = value;
  }

  get _profil(): Profil {
    return this.profil;
  }

  set _profil(value: Profil) {
    this.profil = value;
  }
}
