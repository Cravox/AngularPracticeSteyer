import { Flight } from "../flight";

export class CharterFlight implements Flight {
    id: number = 0;
    from: string = '';
    to: string = '';
    date: string = '';
    delayed: boolean = false;

    distance: number = 0;

    calcPrice(): number {
        return (this.distance / 2);
    }
    
}