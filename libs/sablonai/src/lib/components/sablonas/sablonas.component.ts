import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormControlService } from '../../form-control.service';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-sablonas',
  templateUrl: './sablonas.component.html',
  styleUrls: ['./sablonas.component.scss']
})
export class SablonasComponent implements OnInit {
  form: FormGroup;
  @Output() submited = new EventEmitter;
  @Input() fields;
  chips = ['Nerijus Jankauskas', 'Kestutis Bruzas', 'Tomas Kneitas', 'Andrius Sakalauskas']

  constructor(private fcs: FormControlService, dateAdapter: DateAdapter<any>) {
    dateAdapter.setLocale('lt')
  }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
  }

  fill(value: any) {
   const pers = this.form.get('confirmingPerson');
   (pers as FormArray).push(new FormControl(value));
  }

  onSubmit() {
    console.log(this.form.value);
    if(this.form.valid) {
      this.submited.emit(this.form.value);
    }
  }
}
