import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should minimize notes correctly for various amounts', () => {
    // Test case 1: Amount 230
    component.amount = 230;
    component.minimizeNotes();
    expect(component.notesBreakdown).toEqual(new Map([
      [100, 2],
      [20, 1],
      [10, 1]
    ]));

    // Test case 2: Amount 375
    component.amount = 375;
    component.minimizeNotes();
    expect(component.notesBreakdown).toEqual(new Map([
      [100, 3],
      [50, 1],
      [20, 1],
      [5, 1]
    ]));

    // Test case 3: Amount 80
    component.amount = 80;
    component.minimizeNotes();
    expect(component.notesBreakdown).toEqual(new Map([
      [50, 1],
      [20, 1],
      [10, 1]
    ]));

    // Test case 4: Amount 0
    component.amount = 0;
    component.minimizeNotes();
    expect(component.notesBreakdown).toEqual(new Map());
  });
});
