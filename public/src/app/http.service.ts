import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }
  // '/api/pets -> Retrieve all Pets -> GET
  getPets(){
    return this._http.get('/api/pets');
  }
  // '/api/pets/:id' -> Retrieve a Pet by ID  -> GET
  getOnePet(id: String){
    return this._http.get(`/api/pets/${id}`);
  }
  // '/api/pets' -> Create a Pet -> POST
  postPetToServer(data: any){
    return this._http.post('/api/pets', data);
  }
  // '/api/pets/:id' -> Update a Pet by ID -> PUT
  editOnePet(id: String, data: any){
    return this._http.put(`/api/pets/${id}`, data);
  }
  // '/api/pets/:id' -> Delete a Pet by ID -> DELETE
  deleteOnePet(id: String){
    return this._http.delete(`/api/pets/${id}`);
  }
}

