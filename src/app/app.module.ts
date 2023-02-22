import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicConceptComponent } from './basic-concept/basic-concept.component';
import { ButtonModule } from 'primeng/button';
import { Chapter03Component } from './chapter03/chapter03.component';
import { Chapter07Component } from './chapter07/chapter07.component';
import { Chapter11Component } from './chapter11/chapter11.component';
import { Chapter11BComponent } from './chapter11-b/chapter11-b.component';
import { Chapter11CComponent } from './chapter11-c/chapter11-c.component';
import { Chapter11DComponent } from './chapter11-d/chapter11-d.component';
import { Chapter11EComponent } from './chapter11-e/chapter11-e.component';
import { Chapter13AComponent } from './chapter13-a/chapter13-a.component';
import { Chapter13BComponent } from './chapter13-b/chapter13-b.component';
import { Chapter14AComponent } from './chapter14-a/chapter14-a.component';
import { Chapter14BComponent } from './chapter14-b/chapter14-b.component';
import { Chapter14CComponent } from './chapter14-c/chapter14-c.component';
import { Chapter14DComponent } from './chapter14-d/chapter14-d.component';
import { Chapter14EComponent } from './chapter14-e/chapter14-e.component';
import { Chapter14FComponent } from './chapter14-f/chapter14-f.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicConceptComponent,
    Chapter03Component,
    Chapter07Component,
    Chapter11Component,
    Chapter11BComponent,
    Chapter11CComponent,
    Chapter11DComponent,
    Chapter11EComponent,
    Chapter13AComponent,
    Chapter13BComponent,
    Chapter14AComponent,
    Chapter14BComponent,
    Chapter14CComponent,
    Chapter14DComponent,
    Chapter14EComponent,
    Chapter14FComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
