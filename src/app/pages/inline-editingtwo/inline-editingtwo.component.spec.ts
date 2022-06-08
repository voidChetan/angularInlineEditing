import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditingtwoComponent } from './inline-editingtwo.component';

describe('InlineEditingtwoComponent', () => {
  let component: InlineEditingtwoComponent;
  let fixture: ComponentFixture<InlineEditingtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineEditingtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditingtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
