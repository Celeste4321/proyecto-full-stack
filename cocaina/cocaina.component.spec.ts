import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocainaComponent } from './cocaina.component';

describe('CocainaComponent', () => {
  let component: CocainaComponent;
  let fixture: ComponentFixture<CocainaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocainaComponent]
    });
    fixture = TestBed.createComponent(CocainaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
