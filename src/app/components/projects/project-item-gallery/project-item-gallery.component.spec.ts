import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemGalleryComponent } from './project-item-gallery.component';

describe('ProjectItemGalleryComponent', () => {
  let component: ProjectItemGalleryComponent;
  let fixture: ComponentFixture<ProjectItemGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
