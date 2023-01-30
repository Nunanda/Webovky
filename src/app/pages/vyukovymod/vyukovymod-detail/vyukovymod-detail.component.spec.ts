import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyukovymodDetailComponent } from './vyukovymod-detail.component';

describe('VyukovymodDetailComponent', () => {
  let component: VyukovymodDetailComponent;
  let fixture: ComponentFixture<VyukovymodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VyukovymodDetailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VyukovymodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});