import {Schema, model } from 'mongoose'

const personaSchema = new Schema({
    _tipoObjeto: {
        type: String,
    },
    _nombre: {
        type: String,
    },
    _sueldoBase: {
        type: Number
    },
    _id: {
        type: String  
    },
    _complemento: {
        type: Number
    },
    _matricula: {
        type: String
    },
})

export type iExtranjero = {
    _tipoObjeto: string | null,
    _nombre: string | null,
    _sueldoBase: number | null,
    _id: string | null,
    _complemento: number | null,
    _matricula: string | null
}

export type iPersona = {
    _tipoObjeto: string | null,
    _nombre: string | null,
    _sueldoBase: number | null,
    _id: string | null,
    _matricula: string | null,
}

export type iPersona2 = {
    _tipoObjeto: string | null,
    _nombre: string | null,
    _sueldoBase: number | null,
    _id: string | null,
    _complemento: number ,
    _matricula: string 
    
}

export const Personas = model('personas', personaSchema)