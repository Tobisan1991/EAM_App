import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFunctionListComponent } from './business-function-list.component';

describe('BusinessFunctionListComponent', () => {
  let component: BusinessFunctionListComponent;
  let fixture: ComponentFixture<BusinessFunctionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFunctionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFunctionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
