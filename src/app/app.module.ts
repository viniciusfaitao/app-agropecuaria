import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
  imports:      [ NgMultiSelectDropDownModule,CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, 
  RouterModule.forRoot([{ path: '', component: AppComponent }])],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, ProductAlertsComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }