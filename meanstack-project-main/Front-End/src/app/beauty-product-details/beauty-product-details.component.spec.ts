import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyProductDetailsComponent } from './beauty-product-details.component';

describe('BeautyProductDetailsComponent', () => {
  let component: BeautyProductDetailsComponent;
  let fixture: ComponentFixture<BeautyProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautyProductDetailsComponent]
    });
    fixture = TestBed.createComponent(BeautyProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
