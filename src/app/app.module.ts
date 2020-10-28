import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { CardComponent } from './app/card/card.component';
import { ContactComponent } from './app/contact/contact.component';
import { AboutComponent } from './app/about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { CardDetalleComponent } from './app/card-detalle/card-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ContactComponent,
    AboutComponent,
    CardDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
