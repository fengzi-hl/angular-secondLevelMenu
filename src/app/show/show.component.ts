import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Input, Output } from '@angular/core';
import { FormControl, ControlContainer, FormGroupDirective } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

import { SelectService } from '../select.service';


@Component({
  selector: 'app-show',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    }
  ],
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {
  
  @Input() firstId: string;
  @Input() secondId: string;
  @Input() firstLabel: string;
  @Input() secondLabel: string;

  _firstId: FormControl;
  _secondId: FormControl;
  firsts: any[] = [];
  seconds: any[] = [];

  isAlive: boolean = true;

  constructor( private selectService: SelectService , private fgd: FormGroupDirective) { }



  ngOnInit() {
    this.selectService.getFirstLevels().subscribe(
      firsts => this.firsts = firsts);
    
    this._firstId = (this.fgd.form.get(this.firstId) as FormControl);
    this._secondId = (this.fgd.form.get(this.secondId) as FormControl);
    this._firstId.valueChanges.pipe(
      takeWhile(() => this.isAlive)
    ).subscribe(res => {this.seconds = this.selectService.filterSecond(this._firstId.value);
    })
  }

  ngOnDestroy(){
    this.isAlive = false;
  }

}