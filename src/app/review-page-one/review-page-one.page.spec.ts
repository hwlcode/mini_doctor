import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPageOnePage } from './review-page-one.page';

describe('ReviewPageOnePage', () => {
  let component: ReviewPageOnePage;
  let fixture: ComponentFixture<ReviewPageOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPageOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
