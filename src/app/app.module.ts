import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import {JokeService} from './service/joke.service';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JokelistComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
  ],
  providers: [
    JokeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
