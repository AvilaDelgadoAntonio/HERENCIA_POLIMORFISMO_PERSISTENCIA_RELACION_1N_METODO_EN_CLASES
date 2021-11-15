import { Persona } from "./persona";

export class Automovil {
  protected _precioBase: number; // para acceder en la subclase
  private _potenciaMotor: number;
  private _persona: Array<Persona>;
  protected _matricula: string;
  constructor(precioBase: number, potenciaMotor: number, persona: Array<Persona>, matricula: string) {
    this._precioBase = precioBase;
    this._potenciaMotor = potenciaMotor;
    this._persona = persona;
    this._matricula = matricula;
    this._persona = new Array<Persona>();
  }
  get precioBase() {
    return this._precioBase;
  }
  get potenciaMotor() {
    return this._potenciaMotor;
  }
  get persona() {
    return this._persona;
  }
  get matricula() {
    return this._matricula;
  }

  sueldoPersonas() {
    let sueldoTC: number = 0
    /* esta es la manera clásica de hacerlo y FUNCIONA
    for (let index = 0; index < this._persona.length; index++) {
      sueldoTC += this._persona[index].calcularSueldo();
    }
*/
//esta es la forma más moderna
    for(let tmpPer of this._persona){
      sueldoTC += tmpPer.calcularSueldo()
    }
    return sueldoTC
  }

  precio(): number {
    let precio: number;
    precio = this._precioBase;
    if (this._potenciaMotor > 150) {
      precio += 0.2 * precio;
    }
    return precio;
  }

  public addPersona(persona: Persona) {
    this._persona.push(persona);
  }

  public removePersona(persona: Persona) {
    let index = this._persona.indexOf(persona);
    if (index > -1) {
      this._persona.splice(index, 1);
    }
  }

  public getPersona(index: number) {
    return this._persona[index];
  }

  public getPersonas() {
    return this._persona;
  }

  totalsueldo(){
    let sueldo : number;
    let persona: Array<Persona>;
     
  }

  todo() {
    return `Precio base: ${this._precioBase}, potencia: ${this._potenciaMotor}`;
  }
}
