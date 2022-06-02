import { createSlice } from "@reduxjs/toolkit"
import { addNumber, getNumber } from "../actions"

const tableData:Array<numberType> = [
  {
    key: 1,
    STT: 2010001,
    DeviceName: "Kiosk",
    GTime: "14:35 - 07/11/2021",
    ConnectStatus: "Đang chờ",
    ServiceUsed: "Khám tim mạch",
    Detail: "Chi tiết",
    expiry: "14:35 - 12/11/2021",
    ProductID: 12313,
    DeviceType: "Kiosk",
    Password: "CMS",
    UserName: "Lê Huỳnh Ái Vân"
  },
  {
    key: 2,
    STT: 2010002,
    DeviceName: "Kiosk",
    GTime: "14:35 - 07/11/2021",
    ConnectStatus: "Đã sử dụng",
    ServiceUsed: "Khám sản-Phụ khoa",
    Detail: "Chi tiết",
    expiry: "14:35 - 12/11/2021",
    ProductID: 127675,
    DeviceType: "Kiosk",
    Password: "CMS",
    UserName: "Huỳnh Ái Vân"
  },
  {
    key: 3,
    STT: 2010003,
    DeviceName: "Kiosk",
    GTime: "14:35 - 07/11/2021",
    ConnectStatus: "Bỏ qua",
    ServiceUsed: "Khám răng hàm mặt",
    Detail: "Chi tiết",
    expiry: "14:35 - 12/11/2021",
    ProductID: 1876575,
    DeviceType: "Hệ thống",
    Password: "CMS",
    UserName: "Lê Ái Vân"
  },
  {
    key: 4,
    STT: 2010004,
    DeviceName: "Kiosk",
    GTime: "14:35 - 07/11/2021",
    ConnectStatus: "Đang chờ",
    ServiceUsed: "Khám tai mũi họng",
    Detail: "Chi tiết",
    expiry: "14:35 - 12/11/2021",
    ProductID: 87455,
    DeviceType: "Hệ thống",
    Password: "CMS",
    UserName: "Nguyễn Ái Vân"
  },
  {
    key: 5,
    STT: 2010005,
    DeviceName: "Kiosk",
    GTime: "14:35 - 07/11/2021",
    ConnectStatus: "Đã sử dụng",
    ServiceUsed: "Khám hô hấp",
    Detail: "Chi tiết",
    expiry: "14:35 - 12/11/2021",
    ProductID: 1675775,
    DeviceType: "Kiosk",
    Password: "CMS",
    UserName: "Trần Thị Ái Vân"
  },
]
const initialState:stateType = {
  isLoading: false,
  error: "",
  data: tableData
}
const numberReducer = createSlice({
  name: "device",
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
    .addCase(getNumber.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    })
    .addCase(getNumber.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    })
    .addCase(getNumber.rejected, (state) => {
      state.isLoading = true;
      state.error = "Error"
    })
    .addCase(addNumber.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
    })
  }
})
export default numberReducer
export type {numberType}
type stateType = {
  isLoading: boolean
  error: string,
  data: Array<numberType>
}
type numberType = {
  key: number,
  STT: number,
  DeviceName: string,
  GTime: String,
  ConnectStatus:"Đang chờ" | "Đã sử dụng" | "Bỏ qua",
  ServiceUsed: string,
  Detail: string,
  expiry: string,
  ProductID: number,
  UserName: string,
  DeviceType: "Kiosk" | "Hệ thống",
  Password: string
}