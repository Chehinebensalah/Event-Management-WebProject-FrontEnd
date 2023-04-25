import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsviewComponent } from './subsview.component';

describe('SubsviewComponent', () => {
  let component: SubsviewComponent;
  let fixture: ComponentFixture<SubsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
