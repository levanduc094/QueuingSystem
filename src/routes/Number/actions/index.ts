import { createAsyncThunk } from "@reduxjs/toolkit"
import NumberReducer, { numberType } from "../reducer/NumberReducer"

const getNumber = createAsyncThunk("device/getAll", async () => {
  //fake get data from server
  const promise:Promise<Array<numberType>> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve((NumberReducer.getInitialState().data)),1000)
  })
  return await promise
})

const addNumber = createAsyncThunk("number/add", async (formdata: any) => {
  //fake ...
  const promise:Promise<numberType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})

export {getNumber,addNumber}