import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { SelectService } from './select.service';
import { FirstLevel } from './first-level';
import { SecondLevel } from './second-level';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  form: FormGroup;

  constructor( ){}

  ngOnInit(){
    this.form = new FormGroup({
      firstId: new FormControl(''),
      secondId: new FormControl(''),
    })

    this.form.setValue({
      firstId: 1,
      secondId: 0,
    })
  }

  onSubmit(){
    console.log(this.form);
  }
}
