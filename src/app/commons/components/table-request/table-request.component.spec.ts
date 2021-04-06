import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRequestComponent } from './table-request.component';

describe('TableComponent', () => {
	let component: TableRequestComponent;
	let fixture: ComponentFixture<TableRequestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ TableRequestComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TableRequestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});