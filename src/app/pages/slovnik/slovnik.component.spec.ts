import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovnikComponent } from './slovnik.component';

describe('SlovnikComponent', () => {
  let component: SlovnikComponent;
  let fixture: ComponentFixture<SlovnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlovnikComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SlovnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});