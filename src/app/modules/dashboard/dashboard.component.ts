import { Component, OnInit } from '@angular/core';

import { CharacterService } from 'src/app/services/character/character.service';

import { Character } from 'src/app/commons/models/character/character';

import { SelectOption } from 'src/app/commons/components/select-input/select-option.interface';
import { HOUSE_OPTIONS } from 'src/app/commons/constants/house-options';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  options: Array<SelectOption> = [];
  characters: Array<Character> = [];

	/**
	 * @constructs DashboardComponent
	 * @param {CharacterService} characterService
	 */
  constructor(
		public characterService: CharacterService
    ) {
    for (let key in HOUSE_OPTIONS) {
      this.options.push({ text: key, value: HOUSE_OPTIONS[key] });
    }
  }

  ngOnInit(): void {
  }

  /**
   * @method selectionChange
   * @param {string} house
   * @returns {void}
   */
  selectionChange(house: string): void {
    if (house != undefined) {
      this.getCharactersByHouse(house)
    } else {
      this.characters = [];
      // limpliar la tabla
    }
  }

  /**
   * @method getCharactersByHouse
   * @param {string} house
   * @returns {void}
   */
  getCharactersByHouse(house: string): void {
    this.characterService.getByHouse(house).subscribe(
      (response: any) => {
        console.log(response);
        this.characters = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
