import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ApiService } from './api.service.service';
import { PricesListComponent } from './prices-list/prices-list.component';
import { DetailsComponent } from './details/details.component';
import { StartComponent } from './start/start.component';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    PricesListComponent,
    DetailsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutesModule,
    NgxPaginationModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
