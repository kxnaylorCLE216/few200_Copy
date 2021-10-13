import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/support.actions';


export interface SupportReport {
  supportPhone: string | null;
  status: string;
  currentlyOpen: boolean;
  supportContact: {
    name: string;
    emailAddress: string;
    phone: string | null;
  }
}

export interface SupportReportState {
  supportInfo: SupportReport | null,
  isLoaded: boolean
}


const initialState: SupportReportState = {
  supportInfo: null,
  isLoaded: false
}


const reducerFunction = createReducer(
  initialState,
  on(actions.loadSupportReport, (s, a) => ({ ...s, supportInfo: null, isLoaded: false })),
  on(actions.loadSupportReportSucceeded, (s, a) => ({ ...s, supportInfo: a.payload, isLoaded: true }))
)

export function reducer(state: SupportReportState = initialState, action: Action): SupportReportState {
  return reducerFunction(state, action);
}


