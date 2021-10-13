
export interface SupportModel {
  supportPhone: string;
  status: string;
  currentlyOpen: boolean;
  supportContact: {
    name: string;
    emailAddress: string;
    phone: string;
  }
}
