import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DomicilioComponent } from './components/domicilio/domicilio.component';
import { DatosgeneralesComponent } from './containers/datosgenerales/datosgenerales.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    DomicilioComponent,
    DatosgeneralesComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
