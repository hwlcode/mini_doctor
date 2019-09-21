import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessagePage } from './user-message.page';

describe('UserMessagePage', () => {
  let component: UserMessagePage;
  let fixture: ComponentFixture<UserMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMessagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
