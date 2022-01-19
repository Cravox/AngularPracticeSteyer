import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateComponent } from '../date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from '../status-color.pipe';
import { StatusFilterPipe } from '../statusfilter.pipe';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe
  ],
  exports: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
