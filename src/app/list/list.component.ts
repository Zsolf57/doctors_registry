import { Component, OnInit } from '@angular/core';
import { IPractitioner } from '../models/practitioner.model';
import { FbBaseService } from '../services/fb-base.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   practicioners : IPractitioner[];

  constructor(private service : FbBaseService) { }

  private _listFilter = '';
  filteredPracs : IPractitioner[];

  get listFilter(): string {
    return this._listFilter;
  }

  getPracs(){
    this.service.get('doctors').subscribe(pracs => {
      this.filteredPracs = pracs as IPractitioner[]
      this.practicioners = this.filteredPracs;
    });
  }


  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPracs = this.performFilter(value);
  }

  performFilter(filterBy: string): IPractitioner[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.practicioners.filter((practitioner: IPractitioner) =>
      practitioner.name.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.getPracs();
  }

}
