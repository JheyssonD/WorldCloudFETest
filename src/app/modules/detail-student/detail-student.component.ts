import { Component, OnInit } from '@angular/core';

import { StudentService } from 'src/app/services/student/student.service';

import { Character } from 'src/app/commons/models/character/character';

import { SelectOption } from 'src/app/commons/components/select-input/select-option.interface';

@Component({
	selector: 'app-detail-student',
	templateUrl: './detail-student.component.html',
	styleUrls: ['./detail-student.component.scss']
})
export class DetailStudentComponent implements OnInit {
	student: Character = new Character;

	/**
	 * @constructs DetailStudentComponent
	 * @param {StudentService} studentService
	 */
	constructor(
		public studentService: StudentService
	) {
		this.getStudent();
	}

	/**
	 * @method ngOnInit
	 * @returns {void}
	 */
	ngOnInit(): void { }

	/**
	 * @method getStudent
	 * @param {string} house
	 * @returns {void}
	 */
	getStudent(): void {
		this.student = this.studentService.getStudent();
		console.log(this.student);
	}
}
