import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SelectService } from './select.service';
import { ShowComponent } from './show/show.component';

@NgModule({
  imports:      [ BrowserModule,  ReactiveFormsModule ],
  declarations: [ AppComponent, ShowComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SelectService]
})
export class AppModule { }
