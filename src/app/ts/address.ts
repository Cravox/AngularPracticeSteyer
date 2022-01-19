export abstract class AbstractAddress {
    id: number = 0;
    street: string = '';
    zipCode: string = '';
    city: string = '';

    constructor(id: number) {
        this.id = id;
    }

    fullAddress(): string {
        return this.street + ", " + this.zipCode + ", " + this.city;
    }

    abstract toCSV(): string; // Abstrakte Methoden: Nur Signatur keine Implementierung
}