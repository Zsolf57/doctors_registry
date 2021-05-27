import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';
import { PractitionerModule } from '../practitioner/practitioner.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    PractitionerModule,
  ],
  exports:[ListComponent, FormsModule]
})
export class ListModule { }
