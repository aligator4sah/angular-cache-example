import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Joke} from '../service/model';
import {JokeService} from '../service/joke.service';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {
  joke$: Observable<Array<Joke>>;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.joke$ = this.jokeService.jokes;
  }

}
