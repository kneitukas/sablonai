import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'


const routes: Route[] = [
  {path: '', redirectTo: 'sablonai', pathMatch: "full"},
  {path: 'sablonai', loadChildren: '@sablonai/sablonai#SablonaiModule'},
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
