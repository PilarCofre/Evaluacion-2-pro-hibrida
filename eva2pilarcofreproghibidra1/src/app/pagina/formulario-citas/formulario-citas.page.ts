import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { AppCitasComponent } from "../../app-citas/app-citas.component";
@Component({
  selector: 'app-formulario-citas',
  templateUrl: './formulario-citas.page.html',
  styleUrls: ['./formulario-citas.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, AppCitasComponent]
})
export class FormularioCitasPage implements OnInit {
 

  constructor() { }

  ngOnInit() {
  }

}
