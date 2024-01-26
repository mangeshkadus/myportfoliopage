import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSectionComponent } from './inner-section.component';

describe('InnerSectionComponent', () => {
  let component: InnerSectionComponent;
  let fixture: ComponentFixture<InnerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
