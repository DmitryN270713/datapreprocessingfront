import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatatoenterComponent } from './datatoenter/datatoenter.component';
import { EntereddataComponent } from './entereddata/entereddata.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DatatoenterComponent,
    EntereddataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
