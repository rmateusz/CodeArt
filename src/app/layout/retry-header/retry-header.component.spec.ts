import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryHeaderComponent } from './retry-header.component';

describe('RetryHeaderComponent', () => {
  let component: RetryHeaderComponent;
  let fixture: ComponentFixture<RetryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
