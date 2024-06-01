import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorDetalleComponent } from './profesor-detalle.component';

describe('ProfesorDetalleComponent', () => {
  let component: ProfesorDetalleComponent;
  let fixture: ComponentFixture<ProfesorDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorDetalleComponent]
    });
    fixture = TestBed.createComponent(ProfesorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
