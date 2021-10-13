import { createAction, props } from "@ngrx/store";
import { SongEntity } from "../reducers/songs.reducer";

export const loadSongs = createAction(
  '[playlists songs] load songs'
);

// Happy Path
export const loadSongsSucceeded = createAction(
  '[playlists songs] loading songs succeeded',
  props<{ payload: SongEntity[] }>()
);
// Sad Path
export const loadSongsFailed = createAction(
  '[playlists songs] loading the songs failed',
  props<{ payload: string }>()
);

export const songAdded = createAction(
  '[playlist songs] song created',
  props<{ payload: SongCreateData }>()
);


export interface SongCreateData {
  title: string;
  artist: string;
  album: string | null;
}


export const temporarySongCreated = createAction(
  '[playlist songs] temporary song created',
  props<{ payload: SongEntity, songCreate: SongCreateData }>()
);

export const songSaved = createAction(
  '[playlist songs] song saved',
  props<{ payload: SongEntity, temporaryId: string }>()
);

export const songSaveFailed = createAction(
  '[playlist songs] song save failed',
  props<{ payload: SongEntity, errorMessage: string }>()
);
