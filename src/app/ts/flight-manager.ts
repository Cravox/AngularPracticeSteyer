import { Flight } from '../flight';

export class FlightManager {
    constructor(private cache: Flight[]) {
        if(!cache) throw Error('null or undefined is not allowed');         // falsy truthy, falsy = cache == null/undefined
        this.cache = cache;
    }

    public search(from: string, to: string): Flight[] {
        const result = Array() as Flight[];

        for(let f of this.cache) {
            if(f.from === from && f.to === to) {
                result.push(f);
            }
        }

        return result;
    }

    //Anonyme Methode
    public search2(from: string, to: string): Flight[] {
        const result: Flight[] = this.cache.filter(function (f: Flight) {
            return f.from === from && f.to === to;
        });
        return result;
    }

    //Lambda
    public search3(from: string, to: string): Flight[] {
        /*return this.cache.filter(f => {
            return f.from === from && f.to === to;
        });*/

        //krank
        return this.cache.filter(f => f.from === from && f.to === to);
    }
}