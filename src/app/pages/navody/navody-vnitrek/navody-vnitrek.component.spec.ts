import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavodyVnitrekComponent } from './navody-vnitrek.component';

describe('NavodyVnitrekComponent', () => {
  let component: NavodyVnitrekComponent;
  let fixture: ComponentFixture<NavodyVnitrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavodyVnitrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavodyVnitrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
