import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp01Component } from './componente/comp01/comp01.component';
import { Comp02Component } from './componente/comp02/comp02.component';
import { Comp03Component } from './componente/comp03/comp03.component';
import { Comp04Component } from './componente/comp04/comp04.component';
import { Comp05Component } from './componente/comp05/comp05.component';
import { Comp06Component } from './componente/comp06/comp06.component';
import { Comp07Component } from './componente/comp07/comp07.component';
import { Comp08Component } from './componente/comp08/comp08.component';
import { Comp09Component } from './componente/comp09/comp09.component';
import { Comp10Component } from './componente/comp10/comp10.component';
import { HttpClientModule } from '@angular/common/http';
import { Comp11Component } from './componente/comp11/comp11.component';
import { Comp12Component } from './componente/comp12/comp12.component';
import { Comp13Component } from './componente/comp13/comp13.component';
import { Comp14Component } from './componente/comp14/comp14.component';
import { Comp15Component } from './componente/comp15/comp15.component'; 

@NgModule({
  declarations: [
    AppComponent,
    Comp01Component,
    Comp02Component,
    Comp03Component,
    Comp04Component,
    Comp05Component,
    Comp06Component,
    Comp07Component,
    Comp08Component,
    Comp09Component,
    Comp10Component,
    Comp11Component,
    Comp12Component,
    Comp13Component,
    Comp14Component,
    Comp15Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
