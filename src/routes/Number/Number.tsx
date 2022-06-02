import React, { useEffect, useRef, useState } from 'react'
import SelectC, { Option } from '../../components/SelectC/SelectC';
import TableC from '../../components/TableC/TableC';
import styles from "./styles.module.css";
import tableColumn from './table/NumberTable';
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';
export default function Number() {
  const navigate = useNavigate()
  const state = useAppSelector((state) => state.number)
  //Xu ly vi tri them thiet bi
  const ref = useRef<HTMLDivElement>(null)
  const addRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if(ref.current && addRef.current) {
      const domRect  = ref.current.getBoundingClientRect()
      addRef.current.style.top = `${domRect.y + ref.current.scrollTop }px`
      addRef.current.style.display = "flex"
    }
  },[])

  //Filter data
  const [DeviceType, setWorkingStateFilter] = useState<DeviceType>("Tất cả")
  const [ConnectStatusType, setConnectStatusType] = useState<ConnectStatusType>("Tất cả")

  const dataAfterFirstFilter = state.data.filter((item) => {
    if (DeviceType === "Tất cả") {
      return true
    } else return item.DeviceType === DeviceType
  })

  const dataAfterSecondFilter = dataAfterFirstFilter.filter((item) => {
    if (ConnectStatusType === "Tất cả") {
      return true
    } else return item.ConnectStatus === ConnectStatusType
  })

  return (
    <>
    <div className={styles.number} style={{paddingRight: "2rem"}}>
      <div>Danh sách thiết bị</div>
      <div>
        <div className='select'>
          <SelectC
            onChange={(value) => { setWorkingStateFilter((Wstate) => Wstate = value as DeviceType) }}
            label='Nguồn cấp'
            defaultValue="Tất cả"
            style={{ width: "14rem" }}>
            <Option value="Tất cả">Tất cả</Option>
            <Option value="Hoạt động">Kiosk</Option>
            <Option value="Ngưng hoạt động">Hệ thống</Option>
          </SelectC>
        </div>
        <div className='select'>
          <SelectC
            onChange={(value) => { setConnectStatusType((Cstate) => Cstate = value as ConnectStatusType) }}
            label='Trạng thái kết nối'
            defaultValue="Tất cả"
            style={{ width: "14rem"}}>
            <Option value="Tất cả">Tất cả</Option>
            <Option value="Đang chờ">Đang chờ</Option>
            <Option value="Đã sử dụng">Đã sử dụng</Option>
            <Option value="Bỏ qua">Bỏ qua</Option>
          </SelectC>
        </div>
      </div>
      <br />
      <div ref={ref}>
        <TableC
          columns={tableColumn}
          dataSource={dataAfterSecondFilter}
          pagination={{ total: 100, showSizeChanger: false }}
        />
      </div>
    </div>
    <div ref={addRef} className={styles.Add} onClick={()=> {navigate("NumberAdd")}}><AiFillPlusSquare/><span>Cấp số mới</span></div>
    </>
  )
}
type DeviceType = "Kiosk" | "Hệ thống" | "Tất cả"
type ConnectStatusType = "Đang chờ" | "Đã sử dụng" | "Tất cả" | "Bỏ qua"
