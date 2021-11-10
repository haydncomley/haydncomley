import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemColumnsComponent } from './project-item-columns.component';

describe('ProjectItemColumnsComponent', () => {
  let component: ProjectItemColumnsComponent;
  let fixture: ComponentFixture<ProjectItemColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
