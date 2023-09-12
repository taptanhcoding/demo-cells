import { ReactNode } from "react";

export type RoleType = {
  _id?: string;
  code: string;
  name: string;
  description: string;
  subscriptionId: string;
  permission?: string[];
  type?: string;
};

export type RoleResponse = {
  dataSource: RoleType[];
  page: number;
  pageSize: number;
  totalItem: number;
};

export type RoleQueryParams = {
  page: number;
  pageSize: number;
};

export interface IChildRoute {
  path: string;
  element: JSX.Element;
  name: string;
  icon?: ReactNode;
}


export interface menuItem {
  heading?:string;
  link?: string;
  text?: string;
  icon?: string;
  children?: menuItem[]
}