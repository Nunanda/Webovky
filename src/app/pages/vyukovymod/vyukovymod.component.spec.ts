import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VyukaComponent } from './vyukovymod.component';

describe('VyukaComponent', () => {
  let component: VyukaComponent;
  let fixture: ComponentFixture<VyukaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VyukaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VyukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
