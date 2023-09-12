const message = {
  ERROR_NOT_BLANK: `Trường thông tin không được để trống`,
  NOT_MORE_THEN: (number: number) => `Trường thông tin không quá ${number} ký tự`,
  CREATE_SUCCESSFULLY: (field: string) => `Thêm mới ${field} thành công`,
  UPDATE_SUCCESSFULLY: (field: string) => `Cập nhật thông tin ${field} thành công`,
  DELETE_SUCCESSFULLY: (field: string) => `Xóa ${field} thành công `,
  FORMAT_FILE: 'Ảnh sai định dạng (JPEG, PNG, JPG, JPE, HEIC). Vui lòng chọn ảnh khác',
  MAX_NUMBER_IMG: (quantity: number) => `Chỉ cho phép tải tối đa ${quantity} ảnh minh họa`,
  CAPACITY: 'Ảnh vượt quá dung lượng cho phép (2MB). Vui lòng chọn ảnh khác',
  EMPTY_DATA: 'Không có dữ liệu để hiển thị',
  MAINTENANCE_STATUS_CONFIRM_1: 'Bạn có chắc chắn muốn đổi trạng thái bản ghi này không?',
  MAINTENANCE_STATUS_CONFIRM_2:
    'Để đổi trạng thái bản ghi này sang “Đã xử lý”, vui lòng tải lên ảnh tình trạng phương tiện sau khi đã hoàn thành bảo trì bảo dưỡng. Bạn có muốn tiếp tục?',
  MAINTENANCE_STATUS_CONFIRM_3:
    'Để đổi trạng thái bản ghi này sang “Đang xử lý”, vui lòng cập nhật tên cán bộ tiếp nhận. Bạn có muốn tiếp tục?',
  MAINTENANCE_STATUS_CONFIRM_4:
    'Để đổi trạng thái bản ghi này sang “Đã xử lý”, vui lòng cập nhật tên cán bộ tiếp nhận và ảnh tình trạng xe sau khi đã hoàn thành bảo trì bảo dưỡng. Bạn có muốn tiếp tục?',
};

export default message;
