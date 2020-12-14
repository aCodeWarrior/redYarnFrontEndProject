import {Apprenant} from './apprenant.models';
export class ProfilSortie{
  private _id: number;
  private _libelle: string;
  private _apprenants: Apprenant[];
  private _isDeleted: boolean;

  constructor(id: number, libelle: string, apprenants: Apprenant[],
              isDeleted: boolean) {
    this._id = id;
    this._libelle = libelle;
    this._apprenants = apprenants;
    this._isDeleted = isDeleted;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get apprenants(): Apprenant[] {
    return this._apprenants;
  }

  set apprenants(value: Apprenant[]) {
    this._apprenants = value;
  }

  get isDeleted(): boolean {
    return this._isDeleted;
  }

  set isDeleted(value: boolean) {
    this._isDeleted = value;
  }
}
