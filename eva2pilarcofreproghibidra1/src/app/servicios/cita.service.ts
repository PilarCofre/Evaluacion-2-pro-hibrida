import { Injectable } from '@angular/core';
import { Citas } from '../modeloCitas/citas';


@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private _citas:Citas[] = [ // se crea una propiedad de tipo array y se ingresan unas citas
    new Citas("La confianza en uno mismo es el primer secreto del éxito","Ralph Waldo Emerson")
    ,new Citas("la vida es un regalo, no un problema", "Albert Einstein")
    ,new Citas("Sólo se vive una vez, pero si lo haces bien, una vez es suficiente" , "Mae West")
    ,new Citas("La única forma de hacer un trabajo excelente es amar lo que haces" , "Steve Jobs")
    ,new Citas("Soy un producto de mis decisiones", " Stephen Covey ")
    ,new Citas("Se puede matar al soñador, pero no al sueño"," autor desconocido")
    
   ]
   frase:string = "";
   autor:string = "";
   listaCitas: Citas[] = [];

  constructor() { }
  
    obtenerfraseAleatoria(){
      const indice = Math.floor(Math.random() * this._citas.length);
      return this._citas[indice]
    }

    agregarCitas(c:Citas){ // Agregar Citas
      this._citas.push(c)  }
     

    guardarCita(){
      const nuevaCita = new Citas(this.frase, this.autor);
      this.listaCitas.push(nuevaCita);

    }  
    GetCitas():Citas[] { //para usar el metodo agregar
      return this._citas
    }
    
}