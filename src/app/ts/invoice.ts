export class Invoice<T> {
    constructor(readonly subject: T, readonly price: number) {

    }

    toString(): string {
        let id = '';
        // id = this.subject.id; //Fehler -- Compiler weiß nicht ob objekt 'id' besitzt
        return `${id}: ${this.price}`;
    }
}