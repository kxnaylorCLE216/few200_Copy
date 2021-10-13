import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { environment } from '../../../../environments/environment';
import * as actions from '../actions/song.actions';
import { SongEntity } from "../reducers/songs.reducer";
import { of } from 'rxjs';
@Injectable()
export class SongEffects {

  readonly songsUrl = environment.baseUrl + 'songs';
  tempId = 1;

  // make a temporary a real song!

  saveSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.temporarySongCreated),
      switchMap(originalSong => this.http.post<SongEntity>(this.songsUrl, originalSong.songCreate)
        .pipe(
          map(payload => actions.songSaved({ payload, temporaryId: originalSong.payload.id })),
          catchError(err => of(actions.songSaveFailed({ payload: originalSong.payload, errorMessage: 'That Song Is Horrible' })))
        )
      )
    )
  )


  // when a song is added, make up some crap so you can get it in the state
  temporarySongAdded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.songAdded),
      map(a => a.payload),
      map(payload => actions.temporarySongCreated({
        payload: {
          ...payload,
          id: 'TEMP' + (this.tempId++).toString(),
          played: false
        }, songCreate: payload
      }))
    )
  )


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
