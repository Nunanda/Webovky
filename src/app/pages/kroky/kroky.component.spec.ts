import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrokyComponent } from './kroky.component';

describe('KrokyComponent', () => {
  let component: KrokyComponent;
  let fixture: ComponentFixture<KrokyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrokyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KrokyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
