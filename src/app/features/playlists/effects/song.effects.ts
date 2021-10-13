import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { environment } from '../../../../environments/environment';
import * as actions from '../actions/song.actions';
import { SongEntity } from "../reducers/songs.reducer";

@Injectable()
export class SongEffects {

  readonly songsUrl = environment.baseUrl + 'songs';

  // loadSongs -> (loadSongsSucceeded | loadSongsFailed)
  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSongs),
      switchMap(() => this.http.get<{ data: SongEntity[] }>(this.songsUrl)
        .pipe(
          map(response => response.data),
          map(payload => actions.loadSongsSucceeded({ payload }))
        )
      )
    )

    , { dispatch: true }
  )

  constructor(private actions$: Actions, private http: HttpClient) { }
}
