import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SelectInputModule } from 'src/app/commons/components/select-input/select-input.module';

import { StudentComponent } from './student.component';
import { StudentRoutes } from './student.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableCharacterModule } from 'src/app/commons/components/table-character/table-character.module';
import { StudentService } from 'src/app/services/student/student.service';

@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    SelectInputModule,
    TableCharacterModule,

    RouterModule.forChild(StudentRoutes)
  ],
	providers: [
    StudentService
  ],
})
export class StudentModule { }
