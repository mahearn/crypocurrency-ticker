import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  pricesSubject = new Subject();
  prices: Array<Object>;
  details: Array<Object>;

  getPriceInfo() {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/?convert=AUD')
      .map(
        (response: Response) => {
          this.prices = response.json();
          return this.prices;
        }
      );

  }

  getDetails(id: string) {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/' + id + '/?convert=AUD')
      .map(
        (response: Response) => {
          // this.prices = response.json();
          this.details = response.json();
        }
      )
      .subscribe(
        (response: any) => {
          // console.log(this.details);
          this.pricesSubject.next(this.details);
        },
        (error) => {
          alert('Unable to get prices');
        }
      );
  }

}
