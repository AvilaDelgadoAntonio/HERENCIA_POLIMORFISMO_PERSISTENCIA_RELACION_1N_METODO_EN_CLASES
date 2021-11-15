import {Schema, model } from 'mongoose'
import { Persona } from '../classes/persona'
// Definimos el Schema
const automovilSchema = new Schema({
    _tipoObjeto: {
        type: String  //Valores "A, "T"...
    },
    _precioBase: {
        type: Number
    },
    _potenciaMotor: {
        type: Number
    },
    _traccion: {
        type: String
    },
    _matricula: {
        type: String
    }
})


export type iAuto = {
    _tipoObjeto: string | null,
    _precioBase: number | null,
    _potenciaMotor: number | null,
    _matricula: string | null,
    _persona: Persona[] | null

  }

  export type iTodoTerreno = {
    _tipoObjeto: string | null,
    _precioBase: number | null,
    _potenciaMotor: number | null,
    _traccion: string | null,
    _matricula: string | null,
    _persona: Persona[] | null,
  }

    export type tAutomovil = {     //esta es para la sacada de los datos
        _tipoObjeto: string,
        _precioBase: number,
        _potenciaMotor: number,
        _traccion: string,
        _matricula: string,
    }


    
    export type tAutomovil2 = {     //esta es para la sacada de los datos
        _tipoObjeto: string,
        _precioBase: number,
        _persona: Persona[],
        _potenciaMotor: number,
        _traccion: string,
        _matricula: string
    }

// La colección de la BD (Plural siempre)
export const Autos = model('automoviles', automovilSchema)