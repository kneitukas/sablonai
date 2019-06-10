import { Injectable } from "@angular/core";
import { FormControl, Validators, FormGroup, FormArray} from '@angular/forms'

@Injectable({providedIn:'root'})
export class FormControlService {

  constructor() {}

  toFormGroup (fields) {
    const group: any = {};

    fields.forEach(field => {
      if (field.controlType === 'date') {
        group[field.key] = field.required ? new FormControl(new Date(field.value) || '', Validators.required)
        : new FormControl(new Date(field.value) || '');
      }
      else if(field.controlType === 'chip') {
        group[field.key] = field.required ? new FormArray([new FormControl(field.value || '')], Validators.required)
        : new FormArray([new FormControl(field.value || '')]);
      }
      else {
        group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
      }

    });
    console.log(group)
    return new FormGroup(group);
  }
}
