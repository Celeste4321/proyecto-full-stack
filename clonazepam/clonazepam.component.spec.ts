import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonazepamComponent } from './clonazepam.component';

describe('ClonazepamComponent', () => {
  let component: ClonazepamComponent;
  let fixture: ComponentFixture<ClonazepamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClonazepamComponent]
    });
    fixture = TestBed.createComponent(ClonazepamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
