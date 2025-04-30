import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonCard, IonCardContent, IonButton, IonItem, IonLabel, IonInput, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-form-cita',
  templateUrl: './form-cita.component.html',
  styleUrls: ['./form-cita.component.scss'],
  standalone: true,
  imports: [IonText, IonInput, IonLabel, IonItem, IonButton, IonCard, RouterModule, FormsModule, IonCardContent]
})
export class FormCitaComponent implements OnInit {

  fraseStr: string = '';
  autorStr: string = '';

  @Output() onCreate = new EventEmitter<{ frase: string; autor: string }>();

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.onCreate.emit({ frase: this.fraseStr, autor: this.autorStr });
    this.fraseStr= '';
    this. autorStr = '';

  }
}
