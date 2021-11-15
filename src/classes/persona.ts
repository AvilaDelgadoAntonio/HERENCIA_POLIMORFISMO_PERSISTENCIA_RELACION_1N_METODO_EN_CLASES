export class Persona {
    protected _id: string;
    protected _nombre: string; // para acceder en la subclase
    protected _sueldoBase: number;
    protected _matricula: string;
    constructor(nombre: string, sueldoBase: number, id: string, matricula: string) {
      this._sueldoBase = sueldoBase;
      this._nombre = nombre;
      this._id = id;
      this._matricula = matricula;
    }
    get id(){
      return this._id;
    }
    get nombre(){
      return this._nombre;
    }
    get sueldoBase() {
      return this._sueldoBase;
    }

    get matricula(){
      return this._matricula;
    }

    calcularSueldo(): number {
    return this._sueldoBase;
  
  
  }
}

