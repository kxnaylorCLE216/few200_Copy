import { createAction, props } from "@ngrx/store";
import { SupportReport } from "../reducers/support.reducer";


export const loadSupportReport = createAction(
  '[support] load support report'
);

// Success
export const loadSupportReportSucceeded = createAction(
  '[support] load support report succeeded',
  props<{ payload: SupportReport }>()
);
// Failure
