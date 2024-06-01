import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresComponent } from './profesor.component';

describe('ProfesorComponent', () => {
  let component: ProfesoresComponent;
  let fixture: ComponentFixture<ProfesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoresComponent]
    });
    fixture = TestBed.createComponent(ProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
