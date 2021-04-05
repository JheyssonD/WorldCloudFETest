import { Component, OnInit } from '@angular/core';

import { StudentService } from 'src/app/services/student/student.service';

import { Character } from 'src/app/commons/models/character/character';

import { SelectOption } from 'src/app/commons/components/select-input/select-option.interface';


@Component({
	selector: 'app-student',
	templateUrl: './student.component.html',
	styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
	options: Array<SelectOption> = [];
	students: Array<Character> = [];

	/**
	 * @constructs StudentComponent
	 * @param {StudentService} studentService
	 */
	constructor(
		public studentService: StudentService
	) {
	}

	ngOnInit(): void {
		this.getStudents()
	}

	/**
	 * @method getStudents
	 * @returns {void}
	 */
	getStudents(): void {
		this.studentService.get().subscribe(
			(response: any) => {
				console.log(response);
				this.students = response;
			},
			(error: any) => {
				console.log(error);
			}
		);
	}
}
