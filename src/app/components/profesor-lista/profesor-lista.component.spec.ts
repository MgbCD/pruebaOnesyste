import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorListaComponent } from './profesor-lista.component';

describe('ProfesorListaComponent', () => {
  let component: ProfesorListaComponent;
  let fixture: ComponentFixture<ProfesorListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorListaComponent]
    });
    fixture = TestBed.createComponent(ProfesorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
