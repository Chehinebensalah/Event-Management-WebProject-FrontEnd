import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewEVENTComponent } from './adminview-event.component';

describe('AdminviewEVENTComponent', () => {
  let component: AdminviewEVENTComponent;
  let fixture: ComponentFixture<AdminviewEVENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewEVENTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewEVENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
