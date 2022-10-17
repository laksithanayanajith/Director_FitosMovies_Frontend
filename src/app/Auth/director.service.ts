import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { directorDTO } from './director.module';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = environment.apiURL + 'directors';

  getAllDirectors(): Observable<directorDTO[]>{
    return this.httpClient.get<directorDTO[]>(this.apiURL);
  }

  getByID(id: number): Observable<directorDTO>{
    return this.httpClient.get<directorDTO>(`${this.apiURL}/${id}`);
  }

}
