import { Component, OnInit } from '@angular/core';
import {Service} from '../model/service';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {JsonpModule} from '@angular/http';



@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  items: Array<string>;

  constructor() { }



  ngOnInit() {
  }

  goBack(){
    //let link = ['/persons'];
    //this.router.navigate(link);
    window.history.back();

  }




}
