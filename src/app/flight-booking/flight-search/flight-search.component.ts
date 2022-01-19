import { Component, OnInit } from '@angular/core';
import { Flight } from '../../flight';
import { FlightService } from '../../flight.service';

type NumberBooleanDict = { [key: number]: boolean };

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
  // providers: [                                   // Lokaler Service
  //   {
  //     provide: FlightService,
  //     useClass: DummyFlightService
  //   }
  // ] 
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;
  basket: NumberBooleanDict = {                         // Dictionary
    3: true,
    5: true
  };
  date: string = (new Date()).toISOString();
  delayFilter = false;

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
  }

  search(): void {
    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.debug('Error', err);
      }
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
