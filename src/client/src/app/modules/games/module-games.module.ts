import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddGameComponent } from './components/add-game/add-game.component';
import { RoutingModule } from './routing.module';
import * as fromGame from 'src/app/modules/games/store/game.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GameEffects } from 'src/app/modules/games/store/game.effects';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { material } from 'src/app/material/material.module';
import { UsersGamesListComponent } from './components/users-games-list/users-games-list.component';
import { UserGameDetailsComponent } from './components/user-game-details/user-game-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddGameComponent,
    UsersGamesListComponent,
    UserGameDetailsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    EffectsModule.forFeature([GameEffects]),
    StoreModule.forFeature(fromGame.gameFeatureKey, fromGame.reducer),
    CurrencyMaskModule,
    material,
    RouterModule,
  ]
})
export class GamesModule { }
