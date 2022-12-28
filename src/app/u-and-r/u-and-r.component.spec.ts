import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UAndRComponent } from './u-and-r.component';

describe('UAndRComponent', () => {
  let component: UAndRComponent;
  let fixture: ComponentFixture<UAndRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UAndRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UAndRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
