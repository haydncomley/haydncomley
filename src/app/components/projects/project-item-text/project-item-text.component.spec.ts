import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemTextComponent } from './project-item-text.component';

describe('ProjectItemTextComponent', () => {
  let component: ProjectItemTextComponent;
  let fixture: ComponentFixture<ProjectItemTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
