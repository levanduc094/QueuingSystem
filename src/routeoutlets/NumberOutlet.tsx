import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../redux/hook'
import { getNumber } from '../routes/Number/actions'

export default function NumberOutlet() {
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(getNumber())
    },[])
    return (
      <Outlet />
    )
}