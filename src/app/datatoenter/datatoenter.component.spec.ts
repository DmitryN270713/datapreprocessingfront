import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatoenterComponent } from './datatoenter.component';

describe('DatatoenterComponent', () => {
  let component: DatatoenterComponent;
  let fixture: ComponentFixture<DatatoenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatoenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatoenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
