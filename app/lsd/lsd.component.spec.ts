import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSDComponent } from './lsd.component';

describe('LSDComponent', () => {
  let component: LSDComponent;
  let fixture: ComponentFixture<LSDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LSDComponent]
    });
    fixture = TestBed.createComponent(LSDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
