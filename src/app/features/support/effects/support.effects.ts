import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import * as actions from '../actions/support.actions';
import { SupportReport } from "../reducers/support.reducer";
import { environment } from '../../../../environments/environment'; // ONLY EVER IMPORT THIS ENVIRONMENT (not .prod.ts, not .qa.ts)
@Injectable()
export class SupportEffects {

  readonly supportUrl = environment.baseUrl + 'support';
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSupportReport),
      switchMap(() => this.http.get<SupportReport>(this.supportUrl) // TODO: This is evil don't do this.
        .pipe(
          map(payload => actions.loadSupportReportSucceeded({ payload }))
        )
      )
    )
    , { dispatch: true }
  )

  constructor(private actions$: Actions, private http: HttpClient) { }
}
