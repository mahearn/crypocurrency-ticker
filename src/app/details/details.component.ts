import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../api.service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  details = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.subscription = this.apiService.pricesSubject
      .subscribe(
        (response: any[]) => {
          this.details = response;
        },
        (error) => { console.log('error'); }
      );
      return this.details;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
