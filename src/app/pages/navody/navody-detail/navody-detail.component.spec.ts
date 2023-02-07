import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavodyDetailComponent } from './navody-detail.component';

describe('NavodyDetailComponent', () => {
  let component: NavodyDetailComponent;
  let fixture: ComponentFixture<NavodyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavodyDetailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavodyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});