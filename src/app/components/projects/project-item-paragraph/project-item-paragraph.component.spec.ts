import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemParagraphComponent } from './project-item-paragraph.component';

describe('ProjectItemParagraphComponent', () => {
  let component: ProjectItemParagraphComponent;
  let fixture: ComponentFixture<ProjectItemParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
