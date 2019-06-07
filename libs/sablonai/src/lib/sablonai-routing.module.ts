import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SablonuListComponent } from './components/sablonu-list/sablonu-list.component';

const routes: Routes = [
  {path: '', component: SablonuListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SablonaiRoutingModule { }
