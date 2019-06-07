import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { SablonaiRoutingModule } from './sablonai-routing.module';
import { SablonuListComponent } from './components/sablonu-list/sablonu-list.component';
import { SablonasComponent } from './components/sablonas/sablonas.component';

@NgModule({
  declarations: [SablonuListComponent, SablonasComponent],
  imports: [
    CommonModule,
    SablonaiRoutingModule,
    MatCardModule,
    HttpClientModule
  ]
})
export class SablonaiModule { }
