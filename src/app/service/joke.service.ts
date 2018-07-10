import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joke, JokeResponse} from './model';
import {map, shareReplay} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';

const API_ENDPOINT = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private cache$: Observable<Array<Joke>>;

  constructor(
    private http: HttpClient,
  ) { }

  get jokes() {
    if (!this.cache$) {
      this.cache$ = this.requestJokes().pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this.cache$;
  }


  private requestJokes() {
    return this.http.get<JokeResponse>(API_ENDPOINT).pipe(
      map(response => response.value)
    );
  }
}
