import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomuckyComponent } from './pomucky.component';

describe('PomuckyComponent', () => {
  let component: PomuckyComponent;
  let fixture: ComponentFixture<PomuckyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomuckyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PomuckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});