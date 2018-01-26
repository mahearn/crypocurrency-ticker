import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service.service';
import { PricesListComponent } from './prices-list/prices-list.component';
import { DetailsComponent } from './details/details.component';
import { StartComponent } from './start/start.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationService } from './pagination/pagination.service';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    PricesListComponent,
    DetailsComponent,
    StartComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutesModule
  ],
  providers: [ApiService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
