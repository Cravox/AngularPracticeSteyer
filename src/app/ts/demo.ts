import { Flight } from '../flight';
import { FlightManager } from './flight-manager';
import { ScheduledFlight } from './scheduled-flight';
import { CharterFlight } from './charter-flight';
import { Person, Passenger, Pilot } from './person';
import { CompanyAddress } from './company-address';
import { FlightInvoice } from './flight-invoice';
import { timeout } from 'rxjs';
import { FlightSearchComponent } from '../flight-booking/flight-search/flight-search.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
//---------------------Let / Var -------------------------------------------
/*
function demo(a: number, b: number): number {
    //y existiert ab hier

    if(a > b) {
        let x = -1;
        // x existiert ab hier und nur in diesem Block
        return x;
    } else {
        var y = 1;
        return y;
    }
}
*/
//----------------------Objekte/Eigenschaften-------------------------------
/*
const flight: Flight = {
    id: 1,
    from: 'Graz',
    to: 'Hamburg',
    date: '2018-12-24T17:00:00.0001:00'
}

flight.from = 'GRZ';
flight.to = 'HAM';

console.debug('from', flight.from);
console.debug('flight', flight);

const id = 2;
const from = 'GREECE';
const to = 'france';
const date = '2018-12-24T17:00:00.0001:00'
const flight2: Flight = { id, from, to, date }

console.debug('from', flight2.from);
console.debug('flight2', flight2);
*/
//-------------------------------------Array------------------------------------------------
/*

let arr1: boolean[] = [];
let arr2: boolean[] = new Array();
let arr3: boolean[] = Array();

let arr4: Array<boolean> = [];
let arr5: Array<boolean> = new Array();
let arr6: Array<boolean> = Array();

let arr7 = [] as boolean[];
let arr8 = new Array() as Array<boolean>;
let arr9 = Array() as boolean[];

let arr10 = <boolean[]> [];
let arr11 = <Array<boolean>> new Array();
let arr12 = <boolean[]> Array();

let arr13 = new Array<boolean>();
let arr14 = Array<boolean>();

let flights: Flight[] = [{
        id: 17,
        from: 'Graz',
        to: 'Hamburg',
        date: '2022-02-27T17:00+01:00'
    },{
        id: 18,
        from: 'Graz',
        to: 'Hamburg',
        date: '2022-02-27T17:00+01:00'
    },{
        id: 19,
        from: 'Graz',
        to: 'Mallorca',
        date: '2022-02-27T17:00+01:00'
    },{
        id: 20,
        from: 'Graz',
        to: 'Hamburg',
        date: '2022-02-27T17:00+01:00'
    },
];

let fm = new FlightManager(flights);
let result1 = fm.search('Graz', 'Hamburg');

for(let f of result1) {
    console.debug('flight', f);
}

function showFlight(flight: Flight): void {
    console.debug('---- Flight ----');
    console.debug('id:', flight.id);
    console.debug('from:', flight.from);
    console.debug('to:', flight.to);
    console.debug('date:', flight.date);
}

showFlight(flights[0]); 
*/
//------------------------------Austauschen von Objekten--------------------------------------------------------------------
/*
let oneMoreFlight: Flight = new ScheduledFlight();
oneMoreFlight.distance = 1000;

if(oneMoreFlight.calcPrice) {
    console.debug('Preis,', oneMoreFlight.calcPrice());
}

oneMoreFlight = new CharterFlight();

oneMoreFlight.distance = 1000;

if(oneMoreFlight.calcPrice) {
    console.debug('Preis', oneMoreFlight.calcPrice());
}
*/
//----------------------------------Polymorphie------------------------------------------------------------------
/*
const scheduledFlight: Flight = new ScheduledFlight();
scheduledFlight.distance = 1000;

const charterFlight: Flight = new CharterFlight();
charterFlight.distance = 1000;

const myFlights: Flight[] = [scheduledFlight, charterFlight];

for(const f of myFlights) {
    if(f.calcPrice){
        console.debug('Preis', f.calcPrice());
    }
}
*/
//-----------------------------Polymorphie-----------------------------------------------------------------
/*
const person1: Person = new Passenger();
person1.firstName = 'Max';
person1.lastName = 'Muster';

const person2: Person = new Pilot();
person2.firstName = 'Jens';
person2.lastName = 'Wolkenmeyer';

const isPerson = person1 instanceof Person; // true
const isPassenger = person1 instanceof Passenger; // true
const isPilot = person1 instanceof Pilot; // false

console.debug('isPerson', isPerson);
console.debug('isPassenger', isPassenger);
console.debug('isPilot', isPilot);
*/
//---------------------------Type Assertion(Type Casting)-------------------------------------
/*
const person1: Person = new Passenger(); // Passenger Objekt vom Typ Person?
person1.firstName = 'Max';
person1.lastName = 'Lachs';
// let status = person1.passengerStatus // FEHLER

const person1AsPassenger = person1 as Passenger; // Type Assertion
let person1AsPassenger2 = <Passenger>person1; // Alternative

let status = person1AsPassenger.passengerStatus;
*/
//--------------------CompanyAddress-(Abstrakte Klassen)------------------------------
/*
const a1 = new CompanyAddress(1);
a1.id = 1;
a1.city = 'Graz';
a1.street = 'Hier';
a1.zipCode = '8010';
a1.companyName = 'Steh & Schau GmbH';

console.debug('a1 as csv', a1.toCSV());
console.debug('a1 as full address', a1.fullAddress());
*/
//---------------ScheduledFlight instanziieren-----------------------------------------
/*
const nextFlight = new ScheduledFlight();
nextFlight.date = '2018-12-24';
console.debug('unix-date', nextFlight.unixDate);
nextFlight.unixDate = 1000;
console.debug('unix-date', nextFlight.date);
*/
//--------------Generische Klasse und Methoden------------------------------------------------------
/*
const charterFlightToCharge = new CharterFlight();
charterFlightToCharge.from = 'Graz';
charterFlightToCharge.to = 'Hamburg';
charterFlightToCharge.distance = 1000;

const price = charterFlightToCharge.calcPrice();
const charterInvoice = new FlightInvoice<CharterFlight>(charterFlightToCharge, price);

console.debug('charterInvoice', charterInvoice.toString());

function min<T>(a: T, b: T): T {
    if(a < b) {
        return a;
    }
    return b;
}

const r1 = min<number>(1,2); // 1
const r2 = min(1,2); // 1
const r3 = min('a', 'b'); // a
*/
//---------------------Exception werfen und fangen------------------------------------------------
/*
function div(a: number, b: number): number {
    if(b === 0) {
        throw new Error('division by 0 is not allowed');
    }
    return a / b;
}

try {                                           // wenn try-block fehlschlägt wird catch-block ausgeführt
    let result1 = div(10,3);
    console.debug('result1', result1);

    let result2 = div(10,0);
    console.debug('result2', result2);
} catch(error) {                                // wenn exception auftritt
    console.error('Fehler',error);
} finally {                                     // wird immer ausgeführt
    console.debug('finally');
}
*/
//-------------------Spread Operator----------------------------------------------------------------
/*
const flight: Flight = {
    id: 1,
    from: 'Graz',
    to: 'Hamburg',
    date: '2018-12-24T17:00:00.0001:00'
}

const flightClone1 = { ...flight };  // klont flight objekt
const flightClone2 = { ...flight, id: 2 }; // klont und setzt id auf 2

const ary = [1, 2, 3, 4];
const aryClone1 = [...ary];
const aryClone2 = [0, ...ary]; // 01234
const aryClone3 = [...ary, 5]; // 12345

console.debug(aryClone2.toString());
console.debug(aryClone3.toString());

const obj = {
    id: 1,
    // untergeordnetes Objekt muss extra geklont werden: 
    more: {
        count: 10
    }
};

const objClone = {...obj, more: {...obj.more}};
*/


//---------------Nullwerte prüfen--------------------------------------------------------------------
// let fm = FlightManager(null); fehler

//---------------Union Types-------------------------------------------------------------------------
//let stringOrNumber: string | number;


//-------------Callbacks / Asynchrone Operationen---------------------------------------------------
/*
setTimeout(() => {
    console.log("Timeout!");
}, 1000);

console.log("Start!");

// Pyramid of Doom
setTimeout(() => {
    console.log("Phase 1");
    setTimeout(() => {
        console.log("Phase 2");
        setTimeout(() => {
            console.log("Phase 3");
            setTimeout(() => {
                console.log("Phase 4)");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
*/
//---------------Promises------------------------------------------------------------------------------
/*
function timeout(time: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if(time < 0) {
            reject(`Don't be that negative!`);
            return;
        }

        setTimeout(() => {
            resolve(time);
        }, time);
    });
}

timeout(1000)
    .then(result => console.debug('Timeout!', result))
    .catch(error => console.debug('error', error));

timeout(1000)
    .then(result => {
        console.debug('Phase 1', result);
        return timeout(1000);
    })
    .then(result => {
        console.debug('Phase 2', result);
        return timeout(1000);
    })
    .then(result => {
        console.debug('Phase 3', result);
        return timeout(1000);
    })
    .then(result => {
        console.debug('Phase 4', result);
        return timeout(1000);
    })
    .catch(error => console.error('error', error));
*/
//-------------------async and await-------------------------------------------------------
/*
async function timeout2(time: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if(time < 0) {
            // Send error
            reject(`Don't be that negative!`);
            return;
        }

        setTimeout(() => {
            resolve(time);
        }, time);
    })
}

async function caller() {
    let result;

    try {
        result = await timeout2(1000);
        console.log('Phase 1', result);

        result = await timeout2(1000);
        console.log('Phase 2', result);

        result = await timeout2(1000);
        console.log('Phase 3', result);

        result = await timeout2(1000);
        console.log('Phase 4', result);
    }
    catch (error) {
        console.error('error', error);
    }
}

caller();
*/