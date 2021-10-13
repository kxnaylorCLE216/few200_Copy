import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { from } from "rxjs";
import { SongListItemModel } from '../models'
import * as fromSongs from './songs.reducer';

export const featureName = "playlistsFeature";

export interface PlaylistsState {
  songs: fromSongs.SongState
}

export const reducers: ActionReducerMap<PlaylistsState> = {
  songs: fromSongs.reducer
}

// 1 - Feature Selector
const selectFeature = createFeatureSelector<PlaylistsState>(featureName);
// 2 - Selector per branch
const selectSongsBranch = createSelector(
  selectFeature,
  f => f.songs
)
// 3 - Helpers // MDN object destructuring
const { selectAll: selectSongEntityArray } = fromSongs.adapter.getSelectors(selectSongsBranch);

// 4 - What the components need

// TODO: SongListItemModel[]
export const selectSongListItemModel = createSelector(
  selectSongEntityArray,
  (songs) => songs.map(song => {
    return {
      ...song,
      album: song.album || 'No Album Specified',
      isTemporary: song.id.startsWith('TEMP')

    } as SongListItemModel
  })
)
