import { SafePipe } from './safe.pipe';
import { TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

describe('SafePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
    });
  });

  it('create an instance', () => {
    const domSanitizer = TestBed.get(DomSanitizer);
    const pipe = new SafePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
