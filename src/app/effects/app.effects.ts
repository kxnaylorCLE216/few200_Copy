import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import * as appActions from '../actions/app.actions';
import * as settingsActions from '../actions/settings.actions';

@Injectable()
export class AppEffects {

  // what does the APP think should happen when the application is started?

  loadGoal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => settingsActions.getSavedGoal())
    )

  )

  constructor(private actions$: Actions) { }
}
