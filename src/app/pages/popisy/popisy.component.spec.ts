import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopisyComponent } from './popisy.component';

describe('PopisyComponent', () => {
  let component: PopisyComponent;
  let fixture: ComponentFixture<PopisyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopisyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopisyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
