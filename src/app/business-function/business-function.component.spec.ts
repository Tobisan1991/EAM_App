import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFunctionComponent } from './business-function.component';

describe('BusinessFunctionComponent', () => {
  let component: BusinessFunctionComponent;
  let fixture: ComponentFixture<BusinessFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
