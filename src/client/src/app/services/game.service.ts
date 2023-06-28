import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Game } from '../../../../shared/models/game.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
   routeString = 'games/'
  constructor(private api: ApiService) {}

    getGames(){
      return this.api.get<{data: Game[]}>(this.routeString)
    };

    addGame(game: Game){
      return this.api.post<{data:Game}>(`${this.routeString}create-game`, game).pipe(map((res) => res.data))
    };
}
