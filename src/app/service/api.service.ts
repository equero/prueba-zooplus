import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pet } from '../model/pet';
import PetBreed from '../model/petBreed';
import PetType from '../model/petType';
import { environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = `${environment.api.baseUrl}:${environment.api.port}`;
  private petUrl = `${this.apiUrl}/${environment.api.petResource}`;
  private petTypeUrl = `${this.apiUrl}/${environment.api.petTypesResource}`;
  private breedUrl = `${this.apiUrl}/${environment.api.breedResource}`;

  constructor(private http: HttpClient) { }
  
  private httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.petUrl}`)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  createPets(newPets: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.petUrl}`, newPets, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  getPetTypes(): Observable<PetType> {
    return this.http.get<PetType>(`${this.petTypeUrl}`)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  getBreed(petType: string): Observable<PetBreed> {
    return this.http.get<PetBreed>(`${this.breedUrl}/${petType}`)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  httpError(error: any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

}
