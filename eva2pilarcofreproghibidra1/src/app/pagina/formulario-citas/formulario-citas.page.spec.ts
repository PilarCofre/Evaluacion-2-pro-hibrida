import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioCitasPage } from './formulario-citas.page';

describe('FormularioCitasPage', () => {
  let component: FormularioCitasPage;
  let fixture: ComponentFixture<FormularioCitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
