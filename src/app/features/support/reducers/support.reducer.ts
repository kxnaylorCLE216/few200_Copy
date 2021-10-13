import { Action, createReducer } from "@ngrx/store";


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
  initialState
)

export function reducer(state: SupportReportState = initialState, action: Action): SupportReportState {
  return reducerFunction(state, action);
}
