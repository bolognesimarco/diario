import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './app.routes';
import { RouterModule, Routes } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports:      [ 
                  BrowserModule, 
                  FormsModule, 
                  HttpModule, 
                  InMemoryWebApiModule.forRoot(InMemoryDataService), 
                  JsonpModule, 
                  RouterModule.forRoot(appRoutes) 
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [  ]

})
export class AppModule { }