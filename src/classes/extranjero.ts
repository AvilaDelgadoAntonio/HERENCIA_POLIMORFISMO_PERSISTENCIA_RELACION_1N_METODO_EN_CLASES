import { Persona } from './persona';
export class Extranjero extends Persona {
    protected _complemento: number;
    constructor(nombre: string, sueldoBase: number, ID: string, complemento: number, matricula: string) {
        super(nombre, sueldoBase, ID, matricula);
    this._complemento = complemento;
    }
    get complemento(){
      return this._complemento;
    }


CalcularSueldo(): number {
    return this._sueldoBase + this._complemento;
  }
}
