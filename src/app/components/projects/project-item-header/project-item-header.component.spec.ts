import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemHeaderComponent } from './project-item-header.component';

describe('ProjectItemHeaderComponent', () => {
	let component: ProjectItemHeaderComponent;
	let fixture: ComponentFixture<ProjectItemHeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ProjectItemHeaderComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProjectItemHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
