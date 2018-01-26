import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../api.service.service';

@Component({
  selector: 'app-prices-list',
  templateUrl: './prices-list.component.html',
  styleUrls: ['./prices-list.component.css']
})
export class PricesListComponent implements OnInit {

  prices = [];

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  onGetDetails(id: string): void {
    this.apiService.getDetails(id);
  }

  onGetPrices() {
    this.apiService.getPriceInfo()
      .subscribe(
        (response: any[]) => {
          this.prices = response;
        }
      );
  }

  ngOnInit() {
    this.onGetPrices();
  }

}
