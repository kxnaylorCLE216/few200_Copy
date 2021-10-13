import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/song.actions';
export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album: string | null;
  played: boolean;
}

export interface SongState extends EntityState<SongEntity> {

}


export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.songSaved, (s, a) => adapter.updateOne({
    id: a.temporaryId,
    changes: {
      id: a.payload.id
    }
  }, s)),
  on(actions.temporarySongCreated, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.loadSongs, (s, a) => adapter.removeAll(s)),
  on(actions.loadSongsSucceeded, (s, a) => adapter.setMany(a.payload, s)),
  on(actions.songSaveFailed, (s, a) => adapter.removeOne(a.payload.id, s))
);

export function reducer(state: SongState = initialState, action: Action): SongState {
  return reducerFunction(state, action);
}


