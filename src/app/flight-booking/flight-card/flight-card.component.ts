import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Flight } from '../../flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit, OnChanges{
  @Input() item: Flight | null = null;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    console.debug('constructor', this.item);
  }

  ngOnInit(): void {
    this.selectedChange.next(true);
    console.debug('ngOnInit', this.item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges', this.item);

    if(changes['item']) {
      console.debug('ngOnChanges: item');
    }
    if(changes['selected']) {
      console.debug('ngOnChanges: seleced');
    }
  }

  select() {
    this.selected = true;
    this.selectedChange.emit(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(false);
  }
}
