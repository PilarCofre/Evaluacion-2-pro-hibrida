import { Component, OnInit } from '@angular/core'
import {  IonButton, IonTitle, IonToolbar, IonHeader, IonContent, IonButtons, IonIcon, IonCardContent, IonCard, IonFab, IonFabButton } from '@ionic/angular/standalone'
import { CitaService } from '../servicios/cita.service'
import { Citas } from '../modeloCitas/citas';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppCitasComponent } from '../app-citas/app-citas.component';
import { addIcons } from 'ionicons';
import { settingsOutline, add, trash } from 'ionicons/icons'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonFabButton, IonFab, IonCard, IonCardContent,  IonButton, IonIcon, IonButtons,  RouterModule, IonHeader, IonToolbar, IonTitle, CommonModule ],
})
export class HomePage implements OnInit  {
[x: string]: any; // OnInit = metodo de ciclo de vida
     //export class HomePage {
    fraseAleatoria:any;
    frase: any;
    citas: any;
  constructor(private citaService: CitaService) {
  
    addIcons({add,settingsOutline, trash});
  }

  ngOnInit() {
      this.fraseAleatoria = this.citaService.obtenerfraseAleatoria();
     }  // carga datos con el  metodo ciclo de vida, cuando se carga el 
        //componente home utiliza el servicio para recuperar las frases que esten 
        //en la memoria
    
       
}
  
