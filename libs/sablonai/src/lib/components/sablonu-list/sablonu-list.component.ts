import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-sablonu-list',
  templateUrl: './sablonu-list.component.html',
  styleUrls: ['./sablonu-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SablonuListComponent implements OnInit {
  selected;
  submitedForm;
  list: Observable<any>;
  state = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.list = this.http.get('http://localhost:3000/sablonai/')
  }


  clicked(item, stepper: MatStepper) {
    this.selected = item.fields;
    console.log(this.selected)
    stepper.next()
  }

  handleSubmit(ev, stepper) {
    this.submitedForm = ev;
    stepper.next();
  }

}
