import { Flight } from "../flight";

export class ScheduledFlight implements Flight {
    id: number = 0;
    from: string = '';
    to: string = '';
    date: string = '';
    delayed: boolean = false;

    distance: number = 0;

    get unixDate(): number {
        return new Date(this.date).getTime();
    }

    set unixDate(time: number) {
        const date = new Date(time);
        this.date = date.toISOString();
    }

    calcPrice(): number {
        return (this.distance / 3);
    }
    
}