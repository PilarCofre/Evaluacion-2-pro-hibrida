import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfiguracionService {

  public permitirEliminar: boolean = true;

}
