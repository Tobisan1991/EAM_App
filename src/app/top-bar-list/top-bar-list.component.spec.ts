import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarListComponent } from './top-bar-list.component';

describe('TopBarListComponent', () => {
  let component: TopBarListComponent;
  let fixture: ComponentFixture<TopBarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
