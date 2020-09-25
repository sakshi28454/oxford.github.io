import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnggComponent } from './engg.component';

describe('EnggComponent', () => {
  let component: EnggComponent;
  let fixture: ComponentFixture<EnggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
