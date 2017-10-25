import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {JsonpModule} from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';



const routes: Routes = [// basic routes{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'search', component: SearchHistoryComponent },

//n nested routes
//{//path: 'products',//component: ProductsComponent,
//children: childRoutes//}

];


@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    JsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

//constructor(private router: Router) {  };


}
