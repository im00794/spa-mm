import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlpItemComponent } from './plp-item.component';

describe('PlpItemComponent', () => {
  let component: PlpItemComponent;
  let fixture: ComponentFixture<PlpItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlpItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
