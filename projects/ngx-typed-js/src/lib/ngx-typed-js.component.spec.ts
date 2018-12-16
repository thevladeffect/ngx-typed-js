import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxTypedJsComponent} from './ngx-typed-js.component';

describe('NgxTypedJsComponent', () => {
  let component: NgxTypedJsComponent;
  let fixture: ComponentFixture<NgxTypedJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTypedJsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTypedJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
