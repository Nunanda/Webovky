import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyukovymodComponent } from './vyukovymod.component';

describe('VyukovymodComponent', () => {
  let component: VyukovymodComponent;
  let fixture: ComponentFixture<VyukovymodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VyukovymodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VyukovymodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
