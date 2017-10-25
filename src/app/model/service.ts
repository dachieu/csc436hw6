import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { URLSearchParams } from '@angular/http';
import {Jsonp} from '@angular/http';

 

@Injectable()
export class Service {
 constructor(private jsonp: Jsonp) {
  }
  
  search (term: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp.get('https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .toPromise()
                .then((request) => request.json()[1]);
  }
}
