import { Automovil } from './src/classes/automovil';
import { TodoTerreno } from './src/classes/todoTerreno';
import { Autos, iAuto, iTodoTerreno, tAutomovil2 } from './src/schemas/automovil'
import { iExtranjero, iPersona,iPersona2, Personas } from './src/schemas/persona';
import { db } from './src/database/database'
import { Persona } from './src/classes/persona';
import { Extranjero } from './src/classes/extranjero';





// Declaramos tipo array de tipo Automovil de dos formas
let automoviles: Array<Automovil> = new Array<Automovil>();
automoviles[0] = new Automovil(25000, 130, [], "1066gyh");
automoviles[1] = new Automovil(35000, 170, [], "8569plo");
automoviles[2] = new TodoTerreno(40000, 190, '4x2', [],"1234ñui");
automoviles[3] = new TodoTerreno(38000, 145, '4x4', [],"0987iop");


let personas: Array<Persona> = new Array<Persona>(); 
personas[0] = new Persona("Juan", 2000, "12345678", "1066gyh")
personas[1] = new Persona("Antonio", 2100, "65656565", "8569plo")
personas[2] = new Extranjero("Linda", 2200, "252569",500, "1234ñui")
personas[3] = new Extranjero("Maria", 2300, "4789652",250, "1066gyh")
personas[4] = new Persona("Sara", 2400, "0002151", "0987iop")



let salvar = async () =>{

  // objeto schema
  let oSchema: any
  let dShemaAuto: iAuto = 
    {
      _tipoObjeto: null,
      _precioBase: null,
      _potenciaMotor: null,
      _matricula: null,
      _persona: null
    }
  
    let dShemaTT: iTodoTerreno = 
    {
      _tipoObjeto: null,
      _precioBase: null,
      _potenciaMotor: null,
      _traccion: null,
      _matricula: null,
      _persona: null
    }

  // documento schema de tipo 
    
  let pSchema: any 

  let dShemaPersona: iPersona = 
  {
    _tipoObjeto: null,
    _nombre: null,
    _sueldoBase: null,
    _id: null,
    _matricula: null,
  
  }

  let dShemaExtranjero: iExtranjero = 
  {
    _tipoObjeto: null,
    _nombre: null,
    _sueldoBase: null,
    _id: null,
    _complemento: null,
    _matricula: null
  }
    

  await db.conectarBD()

  for (let p of personas) {
    dShemaPersona._nombre = dShemaExtranjero._nombre = p.nombre
    dShemaPersona._sueldoBase =dShemaExtranjero._sueldoBase = p.sueldoBase
    dShemaPersona._id = dShemaExtranjero._id = p.id
    dShemaPersona._matricula = dShemaExtranjero._matricula = p.matricula
    

    if (p instanceof Extranjero) {
      dShemaExtranjero._tipoObjeto = "Ex"
      dShemaExtranjero._complemento = p.complemento
      pSchema = new Personas(dShemaExtranjero)
    } else if (p instanceof Persona) {
      dShemaPersona._tipoObjeto = "NoEx"
      pSchema = new Personas(dShemaPersona)
    }
    await pSchema.save()
  }

  // Recorremos el array de automoviles

  for (let a of automoviles) {
    // valores comunes ->
    dShemaAuto._potenciaMotor = dShemaTT._potenciaMotor = a.potenciaMotor
    dShemaAuto._precioBase = dShemaTT._precioBase = a.precioBase
    dShemaAuto._matricula = dShemaTT._matricula = a.matricula
    dShemaAuto._persona = dShemaTT._persona = a.persona

    // Valores propios ->
    // Hay que preguntar primero por las subclases
    if (a instanceof TodoTerreno){
      dShemaTT._tipoObjeto = "T"
      dShemaTT._traccion = a.traccion
      oSchema = new Autos(dShemaTT)
    }else if (a instanceof Automovil) {
      dShemaAuto._tipoObjeto = "A"
      oSchema = new Autos(dShemaAuto)
    }
    await oSchema.save()
  }
  await db.desconectarBD()
}


let sueldoAuto = async () => {
  await db.conectarBD()
  let dAutomovil: tAutomovil2
  let tmpAuto: Automovil = new Automovil(0, 0, [], "")
  let tmpPersona: Persona
  let query: any =  await Autos.find( {} )
  let sueldoTA
 
  for (dAutomovil of query){
    //console.log("Matrícula del vehículo: " +dAutomovil._matricula)
    sueldoTA = 0

    if (dAutomovil._tipoObjeto == "A"){
      console.log("Matrícula del vehículo: " +dAutomovil._matricula)

      tmpAuto = new Automovil(dAutomovil._precioBase, dAutomovil._potenciaMotor,dAutomovil._persona, dAutomovil._matricula)

      let query2: any = await Personas.find( {_matricula: dAutomovil._matricula} )



      for (let dPersona of query2){

        console.log("Persona que condujo coche con matrícula: "+dPersona._matricula)

        if (dPersona._tipoObjeto == "NoEx"){
          tmpPersona = new Persona(dPersona._nombre, dPersona._sueldoBase,  dPersona._id, dPersona._matricula)  
        }else {
          tmpPersona = new Extranjero(dPersona._nombre, dPersona._sueldoBase,  dPersona._id, dPersona._complemento,dPersona._matricula, )
        }

        console.log(tmpPersona.calcularSueldo())
        //sueldoTA += tmpPersona.calcularSueldo()
        tmpAuto.addPersona(tmpPersona)
        //console.log(tmpAutos.getPersonas())
    }
  } 
  //console.log(sueldoTA)  
  console.log(`Sueldo total: ${tmpAuto.sueldoPersonas()}`)  
}
await db.desconectarBD()
}
//Hay que elegir entre método salvar() y sueldoAuto descomentando
salvar()
//sueldoAuto()

