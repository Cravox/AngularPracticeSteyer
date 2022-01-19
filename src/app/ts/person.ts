export class Person {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';

    fullname(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

export class Passenger extends Person {
    passengerStatus: string = '';
}

export class Pilot extends Person {
    licenseNumber: string = '';
}