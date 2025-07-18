import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deadline } from './deadline';

describe('Deadline', () => {
  let component: Deadline;
  let fixture: ComponentFixture<Deadline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deadline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deadline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
