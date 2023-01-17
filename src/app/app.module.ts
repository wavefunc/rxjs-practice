import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicConceptComponent } from './basic-concept/basic-concept.component';
import { Chapter03Component } from './chapter03/chapter03.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicConceptComponent,
    Chapter03Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
