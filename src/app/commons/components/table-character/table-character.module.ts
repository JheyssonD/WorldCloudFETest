import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableCharacterComponent } from './table-character.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipeModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [
    TableCharacterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipeModule,
  ],
  exports: [
    TableCharacterComponent
  ]
})
export class TableCharacterModule { }
