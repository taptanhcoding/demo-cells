import { DefaultOptionType } from 'antd/es/cascader';
import { ColumnsType } from 'antd/es/table';
import { JourneyTableType } from 'modules/Journey/journey.types';

export enum JourneyStatus {
  'active' = 'Đang hoạt động',
  'inactive' = 'Không hoạt động',
}

export const titleColumns: ColumnsType<JourneyTableType> = [
  {
    key: 'no',
    title: 'STT',
    width: 60,
  },
  {
    key: 'trip_id',
    title: 'Mã hành trình',
    width: '17.5%',
  },
  {
    key: 'name',
    title: 'Tên hành trình',
    width: '17.5%',
  },
  {
    key: 'start_station',
    title: 'Điểm bắt đầu',
    width: '17.5%',
  },
  {
    key: 'end_station',
    title: 'Điểm kết thúc',
    width: '17.5%',
  },
  {
    key: 'status',
    title: 'Trạng thái',
    width: '17.5%',
  },
  {
    key: 'operation',
    title: 'Thao tác',
    width: '8.5%',
  },
];

export const journeyStatusOptions: DefaultOptionType[] = Object.entries(JourneyStatus).map(
  ([value, key]) => ({
    label: key,
    value,
  }),
);

export const statusColor = {
  active: 'success',
  inactive: 'error',
};
