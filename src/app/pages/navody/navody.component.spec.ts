import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavodyComponent } from './navody.component';

describe('NavodyComponent', () => {
  let component: NavodyComponent;
  let fixture: ComponentFixture<NavodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavodyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});