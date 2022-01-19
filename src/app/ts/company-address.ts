import { AbstractAddress } from "./address";

export class CompanyAddress extends AbstractAddress {
    companyName: string = '';

    toCSV(): string {
        return `${this.id};${this.companyName};${this.street};${this.zipCode};${this.city}`;
    }
    
}