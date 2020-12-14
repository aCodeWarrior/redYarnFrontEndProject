
export class Profil{
 private id: number = null;
 private libelle: string;
 private isDeleted: boolean;

 constructor(libelle: string) {
   this.libelle = libelle;
 }

  get _id(): number {
    return this.id;
  }

  set _id(value: number) {
    this.id = value;
  }

  get _libelle(): string {
    return this.libelle;
  }

  set _libelle(value: string) {
    this.libelle = value;
  }

  get _isDeleted(): boolean {
    return this.isDeleted;
  }

  set _isDeleted(value: boolean) {
    this.isDeleted = value;
  }
}
