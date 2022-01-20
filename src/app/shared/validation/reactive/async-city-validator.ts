import { AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs/operators";
import { FlightService } from "src/app/flight.service";

export function asyncCityValidator(flightService: FlightService): AsyncValidatorFn {
    return (control) => {
        const error = { asyncCity: true };
        return flightService.find(control.value, '').pipe(
            map((flights) => flights.length > 0 ? null : error)
        );
    };
}