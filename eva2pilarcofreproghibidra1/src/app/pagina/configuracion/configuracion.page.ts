import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonToggle, IonItem, IonLabel, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ConfiguracionService } from '../../servicios/configuracion.service'; 
//import { routes } from 'src/app/app.routes';
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, 
    IonToggle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    CommonModule,
    FormsModule
  ]
})
export class ConfiguracionPage {
  permitirEliminar: boolean;

  constructor(private configuracionService: ConfiguracionService) {
    this.permitirEliminar = this.configuracionService.permitirEliminar;
  }
  toggleChange($event: any) {
    this.configuracionService.permitirEliminar = $event.detail.checked;
  }
}