import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonazepamComponent } from './colonazepam.component';

describe('ColonazepamComponent', () => {
  let component: ColonazepamComponent;
  let fixture: ComponentFixture<ColonazepamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColonazepamComponent]
    });
    fixture = TestBed.createComponent(ColonazepamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
