import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventSinglepageComponent } from './view-event-singlepage.component';

describe('ViewEventSinglepageComponent', () => {
  let component: ViewEventSinglepageComponent;
  let fixture: ComponentFixture<ViewEventSinglepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEventSinglepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEventSinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
