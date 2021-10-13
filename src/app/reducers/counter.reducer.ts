import { Action, on, createReducer } from "@ngrx/store";
import * as actions from '../actions/counter.actions';

// Describe it for TypeScript
export interface CounterState {
  current: number;
  by: number;
}

// What the "state" of this will be when the application starts
const initialState: CounterState = {
  current: 0,
  by: 1
}


const reducerFunction = createReducer(
  initialState,
  on(actions.countReset, (s) => ({ ...s, current: 0 })),
  on(actions.countIncremented, (s) => ({ ...s, current: s.current + s.by })),
  on(actions.countDecremented, (s) => ({ ...s, current: s.current - s.by }))
)

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return reducerFunction(state, action);
}

