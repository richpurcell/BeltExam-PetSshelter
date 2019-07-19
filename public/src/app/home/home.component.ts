import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() homeToShow: any;
  pets: any;
  onePet: String;
  edit: any;
  selectedPet: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.getPetsFromService()
  }
  getPetsFromService(){ 
    let observable = this._httpService.getPets();
    observable.subscribe(data => { 
      this.pets = data;
    });
  }
  // getPet(id: String){ 
  //   let observable = this._httpService.getOnePet(id);
  //   observable.subscribe(data => { 
  //     this.pet = data;
  //   });
  // }

  petToShow(id: any){
    this.selectedPet = this.pets;
  }
}
