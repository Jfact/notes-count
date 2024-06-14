import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.inject(AppComponent);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should minimize notes correctly for various amounts', () => {
    expect(component.minimizeNotes(230)).toEqual(new Map([
      [100, 2],
      [20, 1],
      [10, 1]
    ]));

    expect(component.minimizeNotes(375)).toEqual(new Map([
      [100, 3],
      [50, 1],
      [20, 1],
      [5, 1]
    ]));

    expect(component.minimizeNotes(80)).toEqual(new Map([
      [50, 1],
      [20, 1],
      [10, 1]
    ]));

    expect(component.minimizeNotes(0)).toEqual(new Map());
  });
});
