import { DefaultOptionType } from 'antd/es/select';

export enum MaintenanceStatus {
  'waiting' = 'Chờ xử lý',
  'processing' = 'Đang xử lý',
  'done' = 'Đã xử lý',
}

export enum BoatType {
  'normal' = 'Tàu thường',
  'vip' = 'Tàu VIP',
  'special' = 'Tàu Đặc Biệt',
}

export enum BoatEngine {
  '10cv' = '10cv',
  '35cv' = '35cv',
  '49cv' = '49cv',
}

export const titleColumns = [
  {
    key: 'index',
    value: 'STT',
  },
  {
    key: 'id',
    value: 'Mã ID',
  },
  {
    key: 'incident_id',
    value: 'Mã sự cố',
  },
  {
    key: 'vehicle_type',
    value: 'Loại phương tiện',
  },
  {
    key: 'license_plate',
    value: 'Số hiệu',
  },
  {
    key: 'reception_staff',
    value: 'Cán bộ tiếp nhận',
  },
  {
    key: 'begin_date',
    value: 'Thời gian khởi tạo',
  },
  {
    key: 'maintenance_reason',
    value: 'Lý do bảo dưỡng',
  },
  {
    key: 'maintenance_next_time',
    value: ' bảo dưỡng tiếp theo',
  },
  {
    key: 'status',
    value: 'Trạng thái',
  },
  {
    key: 'operation',
    value: 'Thao tác',
  },
];

export const vehicleOptions: DefaultOptionType[] = Object.entries(BoatType).map(([value, key]) => ({
  label: key,
  value,
}));

export const maintenanceStatusOptions: DefaultOptionType[] = Object.entries(MaintenanceStatus).map(
  ([value, key]) => ({
    label: key,
    value,
  }),
);

export const engineOptions: DefaultOptionType[] = Object.entries(BoatEngine).map(
  ([value, key]) => ({
    label: key,
    value,
  }),
);

export const statusColor = {
  done: 'success',
  waiting: 'error',
  processing: 'warning',
};
