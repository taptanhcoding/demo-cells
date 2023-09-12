export interface AppDetail {
    _id: string;
  name: string;
  access_link?: string;
  description?: string;
  avatar?: string;
  duration:object[];
  trial_days: number;
  feature: object[];
  createdBy: object;
  modifiedBy:object;
  isActive: boolean;
  isDeleted: boolean,
  combo?: any
}
