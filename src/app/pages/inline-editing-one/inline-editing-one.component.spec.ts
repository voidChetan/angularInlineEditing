import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditingOneComponent } from './inline-editing-one.component';

describe('InlineEditingOneComponent', () => {
  let component: InlineEditingOneComponent;
  let fixture: ComponentFixture<InlineEditingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineEditingOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
