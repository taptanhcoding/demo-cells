/* eslint-disable @typescript-eslint/naming-convention */
import { DefaultOptionType } from 'antd/es/select';

export enum INCIDENT_STATUS {
  'waiting' = 'Chờ xử lý',
  'processing' = 'Đang xử lý',
  'done' = 'Đã xử lý',
  'reject' = 'Đã từ chối',
}

export enum VEHICLE_TYPES {
  'electric_car' = 'Xe điện',
  'boat' = 'Tàu thuyền',
}

export enum VEHICLE_PARTS {
  'windshield' = 'Kính chắn gió',
  'rearview_mirror' = 'Gương chiếu hậu',
  'battery' = 'Bình acquy',
  'engine' = 'Động cơ',
  'chair' = 'Ghế',
  'card' = 'Thẻ xe',
  'radio' = 'Đầu đài',
  'horn_light' = 'Đèn còi',
  'body' = 'Thân cỏ',
  'other' = 'Khác',
}

export const VehiclePartOptions: DefaultOptionType[] = Object.entries(VEHICLE_PARTS).map(
  ([value, key]) => ({
    label: key,
    value,
  }),
);

export const IncidentStatusOptions: DefaultOptionType[] = Object.entries(INCIDENT_STATUS).map(
  ([value, key]) => ({
    label: key,
    value,
  }),
);

export const VehicleTypeOptions: DefaultOptionType[] = Object.entries(VEHICLE_TYPES).map(
  ([value, key]) => ({
    label: key,
    value,
  }),
);
