import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemImageComponent } from './project-item-image.component';

describe('ProjectItemImageComponent', () => {
	let component: ProjectItemImageComponent;
	let fixture: ComponentFixture<ProjectItemImageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ProjectItemImageComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProjectItemImageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
