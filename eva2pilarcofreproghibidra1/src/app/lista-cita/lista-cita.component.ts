import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonTitle, IonHeader, IonToolbar, IonCardHeader, IonCardSubtitle, IonButton, IonCardTitle, IonIcon } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { Citas } from '../modeloCitas/citas';
import { ConfiguracionService } from '../servicios/configuracion.service';

@Component({
  selector: 'app-lista-cita',
  templateUrl: './lista-cita.component.html',
  styleUrls: ['./lista-cita.component.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonCardContent, CommonModule, IonIcon],
})
export class ListaCitaComponent implements OnInit {
  @Input() citas: Citas[] = [];

  constructor (public configuracionService: ConfiguracionService) {}
  ngOnInit(): void {}

  eliminarCita(index: number) {
    this.citas.splice(index, 1);
  }
}
