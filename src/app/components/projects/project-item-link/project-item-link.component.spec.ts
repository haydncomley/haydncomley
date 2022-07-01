import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemLinkComponent } from './project-item-link.component';

describe('ProjectItemLinkComponent', () => {
	let component: ProjectItemLinkComponent;
	let fixture: ComponentFixture<ProjectItemLinkComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ProjectItemLinkComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProjectItemLinkComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
