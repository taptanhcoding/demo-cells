export enum ElectricCarStatus {
  'useable' = 'Khả dụng',
  'on_duty' = 'Đang trực',
  'active' = 'Đang hoạt động',
  'parking' = 'Dừng đỗ',
  'wrong_trip' = 'Sai hành trình',
  'over_speed' = 'Quá tốc độ',
  'inactive' = 'Không hoạt động',
}

export enum ElectricCarType {
  'normal' = 'Xe thường',
  'vip' = 'Xe VIP',
  'assignment' = 'Xe công vụ',
}

export enum ElectricCarEngine {
  '1_phase' = '1 pha',
  '3_phase' = '3 pha',
}

export enum ElectricCarPower {
  'battery' = 'Pin',
  'lead_acid_battery' = 'Ắc quy',
}

export const ElectricCarMaxLength = {
  car_id: 10,
  license_plate: 12,
  tonnage: 5,
  maintenance_circle: 2,
  capacity: 10,
};

export enum TramMapStatus {
  'active' = 'Đang hoạt động',
  'on_duty' = 'Đang trực',
  'parking' = 'Dừng đỗ',
  'wrong_trip' = 'Sai hành trình',
  'over_speed' = 'Quá tốc độ',
  'inactive' = 'Không hoạt động',
}
