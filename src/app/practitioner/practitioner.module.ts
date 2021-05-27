import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PractitionerComponent } from './practitioner.component';
import { MatButtonModule } from '@angular/material/button';
import { DateTransformPipe } from '../services/date.pipe.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PractitionerComponent,DateTransformPipe],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],exports:[PractitionerComponent, DateTransformPipe]
})
export class PractitionerModule { }
