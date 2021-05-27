import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPractitioner } from '../models/practitioner.model';
import { FbBaseService } from '../services/fb-base.service';

@Component({
  selector: 'app-practitioner',
  templateUrl: './practitioner.component.html',
  styleUrls: ['./practitioner.component.css']
})
export class PractitionerComponent implements OnInit {

  @Input() practitioner : IPractitioner;

  constructor(private service: FbBaseService, private router : Router) { }

  ngOnInit(): void {
  }

   public deleteDoctor(id: string): void{
    this.service.delete('doctors',id);
    this.router.navigateByUrl('/list');
  }
}
