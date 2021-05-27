import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({name: 'transformDate'})
export class DateTransformPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

    transform(date) {
        return this.datePipe.transform(date, 'yyyy-MM-dd'); 
    }

}