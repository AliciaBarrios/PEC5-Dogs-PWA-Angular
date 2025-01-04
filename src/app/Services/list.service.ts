import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '../Models/dog.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'https://api.thedogapi.com/v1/breeds';
  constructor(private http: HttpClient) { }

  getAllDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl + "?limit=20");
  }

  getDogById(id: string): Observable<Dog> {
    return this.http.get<Dog>(this.apiUrl + "/"+id);
  }
}
