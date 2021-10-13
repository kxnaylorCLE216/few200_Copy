import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import * as actions from '../actions/support.actions';
import { SupportReport } from "../reducers/support.reducer";
@Injectable()
export class SupportEffects {

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSupportReport),
      switchMap(() => this.http.get<SupportReport>('http://localhost:5000/support') // TODO: This is evil don't do this.
        .pipe(
          map(payload => actions.loadSupportReportSucceeded({ payload }))
        )
      )
    )
    , { dispatch: true }
  )

  constructor(private actions$: Actions, private http: HttpClient) { }
}
