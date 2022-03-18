import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBannerComponentComponent } from './simple-banner-component.component';

describe('SimpleBannerComponentComponent', () => {
  let component: SimpleBannerComponentComponent;
  let fixture: ComponentFixture<SimpleBannerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleBannerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
