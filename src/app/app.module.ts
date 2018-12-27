import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BirdComponent } from './bird/bird.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BirdAdderComponent } from './bird-adder/bird-adder.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdComponent,
    NavbarComponent,
    BirdAdderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
