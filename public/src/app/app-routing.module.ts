import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';



const routes: Routes = [
  {path: 'pets', component: HomeComponent},
  {path: 'pets/new', component: AddPetComponent},
  {path: 'pets/:id', component: PetDetailComponent},
  {path: 'pets/:id/edit', component: EditPetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
