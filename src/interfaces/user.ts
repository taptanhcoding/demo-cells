export interface IUser {
  name: string;
  phone: string;
}

export interface EmployeeDetail {
  _id: string;
  name?: string;
  email: string;
  phone?: string;
  logo?: string;
  avatar?: string;
  isActive: boolean;
  role: {
    id: string;
    name: string;
  };
  settings: string[];
}

export interface RuleType {
  _id: string;
  name:string;
  code: string;
  description: string;
  permission: string[]
  type: string;
}
