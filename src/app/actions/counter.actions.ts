import { createAction } from "@ngrx/store";

// Event Action
export const countIncremented = createAction(
  '[counter] count incremented'
)

// Event Action
export const countDecremented = createAction(
  '[counter] count decremented'
)

export const countReset = createAction(
  '[counter] count reset'
)




