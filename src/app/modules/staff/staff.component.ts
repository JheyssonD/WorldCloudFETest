import { Component, OnInit } from '@angular/core';

import { StaffService } from 'src/app/services/staff/staff.service';

import { Character } from 'src/app/commons/models/character/character';

import { SelectOption } from 'src/app/commons/components/select-input/select-option.interface';

const HOUSE_OPTIONS: { [key: string]: any } = {
    slytherin : "Slytherin",
    gryffindor : "Gryffindor",
    ravenclaw : "Ravenclaw",
    hufflepuff : "Hufflepuff",
};

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  options: Array<SelectOption> = [];
  staffs: Array<Character> = [];

	/**
	 * @constructs StaffComponent
	 * @param {StaffService} staffService
	 */
  constructor(
    public staffService: StaffService
    ) {
    for (let key in HOUSE_OPTIONS) {
      this.options.push({ text: key, value: HOUSE_OPTIONS[key] });
    }
  }

  ngOnInit(): void {
    this.getStaffs()
  }

  /**
   * @method getStaffs
   * @returns {void}
   */
  getStaffs(): void {
    this.staffService.get().subscribe(
      (response: any) => {
        console.log(response);
        this.staffs = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
