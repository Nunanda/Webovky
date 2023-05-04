import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdchangeComponent } from './passwdchange.component';

describe('PasswdchangeComponent', () => {
  let component: PasswdchangeComponent;
  let fixture: ComponentFixture<PasswdchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswdchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswdchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
