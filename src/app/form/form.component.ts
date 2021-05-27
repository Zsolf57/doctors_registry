import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { FbBaseService } from '../services/fb-base.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  data: Observable<any> | null = null;

  constructor(private service: FbBaseService, private router: ActivatedRoute, private routing : Router) { }

  ngOnInit(): void {
    const param = this.router.snapshot.params;
    
    this.form = new FormGroup({
      id: new FormControl(''),
      active: new FormControl(false),
      name: new FormControl('', Validators.required),
      telecom: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl('Male'),
      birthDate: new FormControl('', Validators.required),
      communication: new FormControl(''),
      photo: new FormControl('./assets/doc.jpg'),
    })

    if(param?.id){
      this.form.get('id').setValue(param.id);
      this.getDoctor(); 
    }
  }
  getDoctor() {
   this.service.getById('doctors', this.form.get('id').value).subscribe(pracs => {
      this.form.get('id').setValue(pracs.id);
      this.form.get('name').setValue(pracs.name);
      this.form.get('active').setValue(pracs.active);
      this.form.get('telecom').setValue(pracs.telecom);
      this.form.get('address').setValue(pracs.address);
      this.form.get('gender').setValue(pracs.gender);
      this.form.get('birthDate').setValue(pracs.birthDate);
      this.form.get('photo').setValue(pracs.photo);
      this.form.get('communication').setValue(pracs.communication);

   })
  }

  onSubmit(): void{
    this.form.get('birthDate').setValue(moment(this.form.get('birthDate').value).format('yyyy-MM-DD'));
    this.service.add('doctors', this.form.value, this.form.get('id')?.value );
    this.routing.navigateByUrl('/list');
    
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.communication.setValue([...this.communication.value,value.trim()]);
      this.communication.updateValueAndValidity;
    }

    if (input) {
      input.value = '';
    }
  }

  remove(lang: string): void {
    const index = this.communication.value.indexOf(lang);

    if (index >= 0) {
      this.communication.value.splice(index, 1);
      this.communication.updateValueAndValidity;
    }
  }

  get communication(){
    return this.form.get('communication');
  }

}
