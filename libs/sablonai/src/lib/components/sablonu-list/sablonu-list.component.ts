import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sablonu-list',
  templateUrl: './sablonu-list.component.html',
  styleUrls: ['./sablonu-list.component.scss']
})
export class SablonuListComponent implements OnInit {

  list: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.list = this.http.get('http://localhost:3000/sablonai/')
  }

  printDetails (details) {
    console.log(details)
  }

}
