import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDetalleComponent } from './alumno-detalle.component';

describe('AlumnoDetalleComponent', () => {
  let component: AlumnoDetalleComponent;
  let fixture: ComponentFixture<AlumnoDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoDetalleComponent]
    });
    fixture = TestBed.createComponent(AlumnoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
