import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./../styles.module.css";
const style = {
  IconRed: {
    backgroundColor: "red",
    borderRadius: "50%",
    minWidth: "0.5rem",
    height: "0.5rem",
    marginRight: "0.2rem"
  },
  IconGray: {
    backgroundColor: "gray",
    borderRadius: "50%",
    minWidth: "0.5rem",
    height: "0.5rem",
    marginRight: "0.2rem"
  },
  IconGreen: {
    backgroundColor: "green",
    borderRadius: "50%",
    minWidth: "0.5rem",
    height: "0.5rem",
    marginRight: "0.2rem"
  },
  Ellipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  Click: {
    color: "#1890ff",
    textDecoration: "underline",
    cursor: "pointer"
  }
}
const handleClick = (e: React.MouseEvent) => {
  const target: Element = e.target as Element
  const currenTarget: Element = e.currentTarget
  const globalClick = () => {
    currenTarget.children[0].classList.toggle(`${styles.More}`)
    if (!currenTarget.children[0].classList.contains(`${styles.More}`)) {
      window.removeEventListener("click", globalClick)
    }
  }
  if (target === currenTarget.children[1] && !currenTarget.children[0].classList.contains(`${styles.More}`)) {
    window.addEventListener("click", globalClick)
  }
}
const tableColumn = [
  {
    title: 'STT',
    dataIndex: 'STT',
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'UserName',
  },
  {
    title: 'Tên dịch vụ',
    dataIndex: 'ServiceUsed',
  },
  {
    title: 'Thời gian cấp',
    dataIndex: 'GTime',
  },
  {
    title: 'Hạn sử dụng',
    dataIndex: 'expiry',
  },
  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'ConnectStatus',
    render: (state: "Đang chờ" | "Bỏ qua" | "Đã sử dụng") => {
      if (state === "Bỏ qua") {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={style.IconRed}></span><span>{state}</span></div>
      }else if(state ==="Đã sử dụng"){
        return <div style={{ display: "flex", alignItems: "center" }}><span style={style.IconGray}></span><span>{state}</span></div>
      } 
      else {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={style.IconGreen}></span><span>{state}</span></div>
      }
    }
  },
  {
    title: 'Nguồn cấp',
    dataIndex: 'DeviceType',
  },
  {
    title: '',
    dataIndex: 'Detail',
    render: (text: string, {ProductID}:any) => {
      return <Link to={`NumberDetail/${ProductID}`} style={{ textDecoration: "underline" }}>{text}</Link>
    } 
  },

]
export default tableColumn
