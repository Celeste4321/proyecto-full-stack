import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarihuanaComponent } from './marihuana.component';

describe('MarihuanaComponent', () => {
  let component: MarihuanaComponent;
  let fixture: ComponentFixture<MarihuanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarihuanaComponent]
    });
    fixture = TestBed.createComponent(MarihuanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
