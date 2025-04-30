import { Component, OnInit } from '@angular/core';
import { FormCitaComponent } from "../form-cita/form-cita.component";
import { ListaCitaComponent } from '../lista-cita/lista-cita.component';
import { CitaService } from '../servicios/cita.service';
import { Citas } from '../modeloCitas/citas';

@Component({
  selector: 'app-citas',
  templateUrl: './app-citas.component.html',
  styleUrls: ['./app-citas.component.scss'],
  standalone: true,
  imports: [FormCitaComponent, ListaCitaComponent ],
})
export class AppCitasComponent  implements OnInit {
  
  listacitas:Citas [] = []



  onCreateCita($event: { frase: string; autor: string }) {
    const cita = new Citas($event.frase, $event.autor);
    this.citaService.agregarCitas(cita);
    this._actualizar();
  }


 // listacitas:Citas[] = [] // se crea una lista citas

  constructor( 
    private citaService:CitaService
  ) {}

  ngOnInit() { // componente papa que recupera la lista desde el servicio 
    // cargar citas entonces en el componente hijo de lita de citas se usa tambien una proiedad
    //citas con @Input() es decir se recibe un arreglo de citas
      // this.listacitas = this.citaService.GetCitas()
      this._actualizar()
    }
  private _actualizar() {
    this.listacitas = this.citaService.GetCitas()
  }

}
