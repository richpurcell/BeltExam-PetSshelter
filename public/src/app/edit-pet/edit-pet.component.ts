import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  @Input() petsToShow: any;
  onePet: any;
  edit: any;
  id: String;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    this.edit = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""};
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.showPet(this.id);
  }

  goHome(){
    return this._router.navigate(['/pets']);
  }
  editPet(id: String){
    let observable = this._httpService.editOnePet(id, this.edit);
    observable.subscribe(data => {
      this.edit = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""};
      this._router.navigate(['/pets']);
    });
  }
  // deletePet(id: string){
  //   console.log("Clicked deletePet() button:", id)
  //   let observable = this._httpService.deleteOnePet(id);
  //   observable.subscribe(data => {
  //   this._router.navigate(['/pets'])
  //   });
  // }
  showPet(id: String) {
    this.onePet = id;
    let observable = this._httpService.getOnePet(this.id);
    observable.subscribe(data => {
      this.edit = data;
    });
  }
}
