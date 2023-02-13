import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicConceptComponent } from './basic-concept/basic-concept.component';
import { ButtonModule } from 'primeng/button';
import { Chapter03Component } from './chapter03/chapter03.component';
import { Chapter07Component } from './chapter07/chapter07.component';
import { Chapter11Component } from './chapter11/chapter11.component';
import { Chapter11BComponent } from './chapter11-b/chapter11-b.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicConceptComponent,
    Chapter03Component,
    Chapter07Component,
    Chapter11Component,
    Chapter11BComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
