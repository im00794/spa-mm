import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomBlogComponent} from './custom-blog.component';

describe('CustomBlogComponent', () => {
  let component: CustomBlogComponent;
  let fixture: ComponentFixture<CustomBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
