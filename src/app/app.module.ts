require('newrelic');
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EssayComponent } from './essay/essay.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EssayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
