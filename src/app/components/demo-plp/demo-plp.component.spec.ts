import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPlpComponent } from './demo-plp.component';

describe('DemoPlpComponent', () => {
  let component: DemoPlpComponent;
  let fixture: ComponentFixture<DemoPlpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPlpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
