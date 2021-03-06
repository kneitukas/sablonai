import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Route[] = [
  {path: '', redirectTo: 'sablonai'},
  {path: 'sablonai', loadChildren: '@sablonai/sablonai#sablonai.module'},
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
