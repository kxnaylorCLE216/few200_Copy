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
