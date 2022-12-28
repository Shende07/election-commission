import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAndFComponent } from './m-and-f.component';

describe('MAndFComponent', () => {
  let component: MAndFComponent;
  let fixture: ComponentFixture<MAndFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAndFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAndFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
