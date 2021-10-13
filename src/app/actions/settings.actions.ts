import { createAction, props } from '@ngrx/store';


/**
 * {
 *  type: '[settings] count goal changed',
 *  newGoal: 300
 * }
 */


// "Events" - usually no data, just saying something happened (applicationStarted, counterReset)
// "Command" -- I need SOMETHING to do something about this.


export const getSavedGoal = createAction(
  '[settings] get saved goal'
);

export const countGoalChanged = createAction(
  '[settings] count goal changed',
  props<{ payload: number }>()
)

// "Document" -- A representation of some data

export const countGoal = createAction(
  '[settings] count goal',
  props<{ payload: number }>()
);
