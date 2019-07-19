import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  @Input() addToShow: any;
  onePet: any;
  edit: any;
  new_pet: any;
  id: String;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.new_pet = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""};
  }
  newPet(){
    let observable = this._httpService.postPetToServer(this.new_pet);
    observable.subscribe(data => {
      this.new_pet = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""};
      this._router.navigate(['/pets'])
    });
  }
  goHome(){
    return this._router.navigate(['/pets']);
  }
}
