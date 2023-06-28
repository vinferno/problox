import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from '../../../../../../../shared/models/game.model';
import { loadGames } from '../../store/game.actions';
import { gamesSelector } from '../../store/game.selectors';

@Component({
  selector: 'app-users-games-list',
  templateUrl: './users-games-list.component.html',
  styleUrls: ['./users-games-list.component.scss']
})
export class UsersGamesListComponent implements OnInit {

  games$: Observable<Game[]>

  constructor( private store: Store ) {
    this.store.dispatch(loadGames())
    this.games$ = this.store.select(gamesSelector)
   }

  ngOnInit(): void {
  }

}
