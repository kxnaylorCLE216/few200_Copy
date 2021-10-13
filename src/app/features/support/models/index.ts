
export interface SupportModel {
  supportPhone: string | null;
  status: string;
  currentlyOpen: boolean;
  supportContact: {
    name: string;
    emailAddress: string;
    phone: string | null;
  }
}
