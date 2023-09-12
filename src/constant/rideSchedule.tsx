import { DefaultOptionType } from 'antd/es/cascader';

export const statusColor = {
  handover: 'success',
  pending: 'success',
  not_handover: 'blue',
};

export enum RideScheduleStatus {
  'handover' = 'Đã bàn giao',
  'not_handover' = 'Chưa bàn giao',
  'pending' = 'Đã bàn giao',
}

export const titleColumns = [
  {
    key: 'index',
    value: 'STT',
  },
  {
    key: 'created_at',
    value: 'Ngày áp dụng',
    sorter: (a: any, b: any) => a.created_at.localeCompare(b.created_at),
  },
  {
    key: 'type',
    value: 'Loại phương tiện',
  },
  {
    key: 'operation',
    value: 'Thao tác',
  },
];

export const rideScheduleStatusOptions: DefaultOptionType[] = Object.entries(
  RideScheduleStatus,
).map(([value, key]) => ({
  label: key,
  value,
}));
