import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedProduct: any;
  selectedPage: any;
  products: any;
  title: 'Pet Shelter';
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){

  }
  homeToShow(){
    this.selectedPage = true;
  }
  // productsToShow(){
  //   this.selectedProduct = this.products;
  // }
}
