import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntereddataComponent } from './entereddata.component';

describe('EntereddataComponent', () => {
  let component: EntereddataComponent;
  let fixture: ComponentFixture<EntereddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntereddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntereddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
