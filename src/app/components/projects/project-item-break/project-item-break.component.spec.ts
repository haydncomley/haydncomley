import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemBreakComponent } from './project-item-break.component';

describe('ProjectItemBreakComponent', () => {
  let component: ProjectItemBreakComponent;
  let fixture: ComponentFixture<ProjectItemBreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemBreakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
