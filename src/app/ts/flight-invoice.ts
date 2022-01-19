import { Flight } from "../flight";

export class FlightInvoice<T extends Flight> { //wtf
    constructor(readonly subject: T, readonly price: number) {

    }

    toString(): string {
        const id = this.subject.id;
        return `${id}: ${this.price}`
    }
}