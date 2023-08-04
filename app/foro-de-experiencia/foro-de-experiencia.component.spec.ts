import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoComponent } from './foro-de-experiencia.component';

describe('ForoDeExperienciaComponent', () => {
  let component: ForoComponent;
  let fixture: ComponentFixture<ForoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForoComponent]
    });
    fixture = TestBed.createComponent(ForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
