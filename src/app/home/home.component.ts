import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Flight } from '../flight';
import { simpleInterval, simpleObervable } from '../shared/observable-factories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get<Flight>('http://www.angular.at/api/flight/3')
    .pipe(
      map((flight: Flight) => {
        return new Date(flight.date);
      })
    )
    .subscribe({
      next: (value: any) => console.log('date', value),
      error: (err: any) => console.error('error', err),
      complete: () => console.log('complete')
    });

    const simple$ = simpleObervable();
    simple$.subscribe({
      next: value => console.log('next', value),
      error: err => console.error('error', err),
      complete: () => console.log('complete')
    });

    const interval$ = simpleInterval();
    const sub = interval$.subscribe({
      next: value => console.log('next', value),
      error: err => console.error('error', err),
      complete: () => console.log('complete!')
    });

    setTimeout(() => sub.unsubscribe(), 2500);
  }

  ngOnInit(): void {

  }



}
