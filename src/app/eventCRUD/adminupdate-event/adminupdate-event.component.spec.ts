import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdateEventComponent } from './adminupdate-event.component';

describe('AdminupdateEventComponent', () => {
  let component: AdminupdateEventComponent;
  let fixture: ComponentFixture<AdminupdateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdateEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminupdateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
