import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicConceptComponent } from './basic-concept/basic-concept.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicConceptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
