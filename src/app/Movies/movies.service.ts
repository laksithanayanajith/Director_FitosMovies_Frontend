import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieDTO , movieCreationDTO, totalRatingDTO } from './movie.module';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = environment.apiURL + 'movies';
  private apiURL_director = environment.apiURL + 'directormovies';
  private apiURL_totalrating = environment.apiURL + 'ratings/total';

  getAllMovies(): Observable<movieDTO[]>{
    return this.httpClient.get<movieDTO[]>(this.apiURL);
  }

  getByID(id: number): Observable<movieDTO>{
    return this.httpClient.get<movieDTO>(`${this.apiURL}/${id}`);
  }

  getMovieByDirectorID(id: number): Observable<movieDTO[]>{
    return this.httpClient.get<movieDTO[]>(`${this.apiURL_director}/${id}`);
  }

  getTotalRatingByMovieID(id: number): Observable<totalRatingDTO>{
    return this.httpClient.get<totalRatingDTO>(`${this.apiURL_totalrating}/${id}`);
  }

  create(movieCreationDTO: movieCreationDTO): any{
    return this.httpClient.post(this.apiURL, movieCreationDTO);
  }

  edit(id: number, movieCreationDTO: movieCreationDTO): any{
    return this.httpClient.put(`${this.apiURL}/${id}`, movieCreationDTO);
  }

  delete(id: number): any{
    return this.httpClient.delete<movieDTO>(`${this.apiURL}/${id}`);
  }
}
