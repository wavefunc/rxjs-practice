import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicConceptComponent } from './basic-concept/basic-concept.component';
import { Chapter03Component } from './chapter03/chapter03.component';

import { ButtonModule } from 'primeng/button';
import { Chapter07Component } from './chapter07/chapter07.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicConceptComponent,
    Chapter03Component,
    Chapter07Component,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
