import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SablonuListComponent } from './components/sablonu-list/sablonu-list.component';
import { SablonasComponent } from './components/sablonas/sablonas.component';

const routes: Routes = [
  {path: '', component: SablonuListComponent, children: [
    {path: ':id', component: SablonasComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SablonaiRoutingModule { }
