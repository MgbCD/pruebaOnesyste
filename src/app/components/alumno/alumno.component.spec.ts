import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosComponent } from './alumno.component';

describe('AlumnoComponent', () => {
  let component: AlumnosComponent;
  let fixture: ComponentFixture<AlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosComponent]
    });
    fixture = TestBed.createComponent(AlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
