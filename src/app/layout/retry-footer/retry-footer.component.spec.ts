import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryFooterComponent } from './retry-footer.component';

describe('RetryFooterComponent', () => {
  let component: RetryFooterComponent;
  let fixture: ComponentFixture<RetryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
