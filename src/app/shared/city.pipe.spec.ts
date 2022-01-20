import { DefaultFlightService } from '../default-flight.service';
import { FlightService } from '../flight.service';
import { CityPipe } from './city.pipe';
import { CityService } from './city.service';

describe('CityPipe', () => {
  it('create an instance', () => {
    const pipe = new CityPipe(new CityService());
    expect(pipe).toBeTruthy();
  });
});
