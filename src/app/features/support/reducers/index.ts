import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { SupportModel } from "../models";
import * as fromSupportReport from './support.reducer';

export const featureName = 'supportFeature';

export interface SupportState {
  report: fromSupportReport.SupportReportState
}

export const reducers: ActionReducerMap<SupportState> = {
  report: fromSupportReport.reducer
}


// 1. Feature Selector
const selectFeature = createFeatureSelector<SupportState>(featureName);
// 2. Selector Per Branch
const selectReportBranch = createSelector(
  selectFeature,
  b => b.report
);
// 3. Any "Helpers" (optional)
const selectReport = createSelector(
  selectReportBranch,
  b => b.supportInfo
)
// 4. What the component needs

// TODO: that returns a models.SupportModel
// TODO: that tells us if the data is loaded or not.
export const selectReportLoaded = createSelector(
  selectReportBranch,
  b => b.isLoaded
)


export const selectReportModel = createSelector(
  selectReport,
  report => {
    return {
      currentlyOpen: report?.currentlyOpen || false,
      status: report?.status || false,
      supportContact: report?.supportContact,
      supportPhone: report?.supportPhone || 'Not Taking Calls'
    } as SupportModel
  }
)
