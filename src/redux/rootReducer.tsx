import { combineReducers } from "redux";
import deviceReducer from "../routes/Device/reducer/deviceReducer";
import loginReducer from "../routes/Login/reducer/loginReducer";
import serviceReducer from "../routes/Services/reducer/serviceReducer";
import numberReducer from "../routes/Number/reducer/NumberReducer";

const rootReducer = combineReducers({
  login: loginReducer.reducer,
  device: deviceReducer.reducer,
  service: serviceReducer.reducer,
  number:numberReducer.reducer
})
export default rootReducer