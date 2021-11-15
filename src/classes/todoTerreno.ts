import { Automovil } from './automovil';
import { Persona } from "./persona"; // <-- Importar la clase Persona
export class TodoTerreno extends Automovil {
  private _traccion: string;
  constructor(precioBase: number, potenciaMotor: number, traccion: string, persona: Array<Persona>, matricula: string) {
    super(precioBase, potenciaMotor, persona, matricula);
    this._traccion = traccion;
  }
  get traccion() {
    return this._traccion;
  }
  get prueba(){
    return this._precioBase  // solo accedo si es protected
  }


  // sobre escribimos el método
  precio(): number {
    let precio: number;
    precio = super.precio();
    if (this._traccion == '4x4') {
      precio += 0.1 * precio;
    }
    return precio;
  }

  todo(){
    let resultado: string
    resultado = `${super.todo()}, tracción: ${this._traccion}`
    return resultado
  }
}
