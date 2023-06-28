import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { MerchService } from 'src/app/services/merch.service';
import { createMerch, createMerchFailure, createMerchSuccess, loadMerchs, loadMerchsFailure, loadMerchsSuccess } from '../../actions/merch/merch.actions';



@Injectable()
export class MerchEffects {

  createMerch$ = createEffect(() => 
  this.actions$
  .pipe(
    ofType(createMerch),
    mergeMap((action) => this.merchService.createMerch(action.data).pipe(
      map(data => createMerchSuccess({data})),
      catchError(err => of(createMerchFailure(err)))
    ))
  )
  )

  loadMerch$ = createEffect(() => 
      this.actions$
      .pipe(
        ofType(loadMerchs),
        mergeMap((action) => this.merchService.getMerch()
        .pipe(
          map(data => loadMerchsSuccess({data})),
          catchError(err => of(loadMerchsFailure(err)))
        ))
      )
  )



  constructor(private actions$: Actions,
    private merchService: MerchService
    ) 
  { }

}
