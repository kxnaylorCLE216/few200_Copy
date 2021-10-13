import { ActionReducerMap } from "@ngrx/store";
import * as fromSupportReport from './support.reducer';

export const featureName = 'supportFeature';

export interface SupportState {
  report: fromSupportReport.SupportReportState
}

export const reducers: ActionReducerMap<SupportState> = {
  report: fromSupportReport.reducer
}
