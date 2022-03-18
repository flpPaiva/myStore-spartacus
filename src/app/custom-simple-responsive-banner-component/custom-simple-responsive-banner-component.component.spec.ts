import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSimpleResponsiveBannerComponentComponent } from './custom-simple-responsive-banner-component.component';

describe('CustomSimpleResponsiveBannerComponentComponent', () => {
  let component: CustomSimpleResponsiveBannerComponentComponent;
  let fixture: ComponentFixture<CustomSimpleResponsiveBannerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSimpleResponsiveBannerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSimpleResponsiveBannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
