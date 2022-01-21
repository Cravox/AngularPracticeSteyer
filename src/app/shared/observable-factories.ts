
import { Observable } from "rxjs";

export function simpleObervable(): Observable<number> {
    return new Observable<number>(observer => {

        observer.next(4711);
        observer.next(815);
        observer.complete();

        return () => {
            console.log(`teardown!`);
        };
    });
}

export function simpleInterval(): Observable<number> {
    return new Observable<number>(observer => {
        
    let counter: number = 0;
    
    const handle = setInterval(() => {
        observer.next(counter);

        counter++;

        if(counter >= 3) {
            observer.complete();
        }
    }, 100);
    return () => {
        clearInterval(handle);
        console.log(`teardown`);
    };
    });
    
}