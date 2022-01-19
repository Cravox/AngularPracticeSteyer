import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {

  transform(delayed: boolean | undefined): string {
    if(delayed) {
      return 'darkred';
    } else {
      return 'darkgreen';
    }
  }

}
