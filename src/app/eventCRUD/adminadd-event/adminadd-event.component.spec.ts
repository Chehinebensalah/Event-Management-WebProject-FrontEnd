import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddEventComponent } from './adminadd-event.component';

describe('AdminaddEventComponent', () => {
  let component: AdminaddEventComponent;
  let fixture: ComponentFixture<AdminaddEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
