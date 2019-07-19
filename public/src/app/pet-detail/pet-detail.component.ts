import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  @Input() petsToShow: any; // 
  pet: any;
  onePet: String;
  selectedPet: any;
  id: String;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) {
      this.pet = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""};
      this.id = "";
     }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      // console.log(params['id'])
    })
    this.showPet(this.id);
  }
  showPet(id: String) {
    let observable = this._httpService.getOnePet(this.id);
    observable.subscribe(data => {
      this.pet = data;
    });
  }
  deletePet(id: string){
    let observable = this._httpService.deleteOnePet(this.id);
    observable.subscribe(data => {
      // this.getOnePet()
      this._router.navigate(['/pets'])
    });
  }
}
