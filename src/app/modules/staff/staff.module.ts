import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SelectInputModule } from 'src/app/commons/components/select-input/select-input.module';


import { StaffComponent } from './staff.component';
import { StaffRoutes } from './staff.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableCharacterModule } from 'src/app/commons/components/table-character/table-character.module';
import { StaffService } from 'src/app/services/staff/staff.service';



@NgModule({
  declarations: [
    StaffComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    SelectInputModule,
    TableCharacterModule,

    RouterModule.forChild(StaffRoutes)
  ],
	providers: [
    StaffService
  ],
})
export class StaffModule { }
