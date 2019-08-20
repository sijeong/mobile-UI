import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolloComponent } from './apollo.component';

describe('ApolloComponent', () => {
  let component: ApolloComponent;
  let fixture: ComponentFixture<ApolloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApolloComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
