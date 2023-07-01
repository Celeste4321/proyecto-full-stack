import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoDeAyudaComponent } from './foro-de-ayuda.component';

describe('ForoDeAyudaComponent', () => {
  let component: ForoDeAyudaComponent;
  let fixture: ComponentFixture<ForoDeAyudaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForoDeAyudaComponent]
    });
    fixture = TestBed.createComponent(ForoDeAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
