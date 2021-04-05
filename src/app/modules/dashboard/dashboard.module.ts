import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SelectInputModule } from 'src/app/commons/components/select-input/select-input.module';


import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { CharacterService } from 'src/app/services/character/character.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableCharacterModule } from 'src/app/commons/components/table-character/table-character.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    SelectInputModule,
    TableCharacterModule,

    RouterModule.forChild(DashboardRoutes)
  ],
	providers: [
    CharacterService
  ],
})
export class DashboardModule { }
