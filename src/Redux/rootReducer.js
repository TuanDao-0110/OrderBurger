import { combineReducers } from "redux";
import BaiTapOanhTuTi from "./OanhTuTiReducer";
const rootReducer = combineReducers({
  //store tổng của ứng dụng
  BaiTapOanhTuTi,
});

export default rootReducer;
