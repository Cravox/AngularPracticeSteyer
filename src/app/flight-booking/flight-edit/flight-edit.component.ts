import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {
  id = 0;
  showDetails = false;
  formGroup: FormGroup;


  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.formGroup = fb.group({
      id: [],
      from: [
        'Graz',
        [Validators.required, Validators.minLength(3)],
      ],
      to: ['Hamburg'],
      date: [],
      delayed: []
    });

    this.formGroup.statusChanges.subscribe(
      value => console.debug('whole form changed', value)
    );

    this.formGroup.controls['delayed'].statusChanges.subscribe(
      value => console.debug('delayed changed', value)
    );
  }

  save(): void {
    console.debug('form to save', this.formGroup.value);
    console.debug('id', this.formGroup.controls['id'].value);
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });

    this.route.queryParams.subscribe(p => {
      console.debug('queryParams', p);
    });

    this.route.fragment.subscribe(p => {
      console.debug('fragment', p);
    });
  }
}
