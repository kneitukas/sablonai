import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { SablonaiRoutingModule } from './sablonai-routing.module';
import { SablonuListComponent } from './components/sablonu-list/sablonu-list.component';
import { SablonasComponent } from './components/sablonas/sablonas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [SablonuListComponent, SablonasComponent, ConfirmationComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    SablonaiRoutingModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    MatStepperModule,
    MatChipsModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatAutocompleteModule

  ]
})
export class SablonaiModule { }
