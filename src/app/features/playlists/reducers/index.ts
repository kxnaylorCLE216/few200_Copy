import { ActionReducerMap } from "@ngrx/store";

import * as fromSongs from './songs.reducer';

export const featureName = "playlistsFeature";

export interface PlaylistsState {
  songs: fromSongs.SongState
}

export const reducers: ActionReducerMap<PlaylistsState> = {
  songs: fromSongs.reducer
}
