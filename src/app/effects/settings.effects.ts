import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, } from "@ngrx/effects";
import { filter, map, tap } from 'rxjs/operators';
import * as actions from '../actions/settings.actions';
@Injectable()
export class SettingsEffects {

  // logThemAll$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(`Got an actions of type ${a.type}`)),

  //   )
  //   , { dispatch: false }
  // );

  // When applicationStarted -> look for the goal in local Storage -> (countGoal) | nothing.
  getSavedCountGoal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getSavedGoal),
      map(() => localStorage.getItem('counterGoal')), // '653' | null
      filter(storedValue => storedValue !== null),// => '653' | quit here.
      filter((val: any) => typeof (val) === 'string'), // "any" => string
      map(a => parseInt(a, 10)), // "42" => 42
      map(payload => actions.countGoal({ payload }))
    )
    , { dispatch: true }
  );

  saveCountGoal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.countGoalChanged), // only care this one... -> countGoalChanged Action
      map(a => a.payload),  // countGoalChanges -> number
      map(a => a.toString()), // number => string
      tap(goal => localStorage.setItem('counterGoal', goal))
    )

    , { dispatch: false })


  constructor(private actions$: Actions) { }
}
