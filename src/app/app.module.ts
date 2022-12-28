import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EleComponent } from './ele/ele.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { UAndRComponent } from './u-and-r/u-and-r.component';
import { MAndFComponent } from './m-and-f/m-and-f.component';
import {ChartModule} from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    EleComponent,
    UAndRComponent,
    MAndFComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ChartModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
