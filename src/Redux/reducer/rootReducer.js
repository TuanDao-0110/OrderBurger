import { combineReducers } from "redux";
import BaiTapOanhTuTi from "./OanhTuTiReducer";
import BookingTicket from "./BookingTicket";
import BaiTapBurger from "./BaiTapBurgerReducer";
const rootReducer = combineReducers({
  //store tổng của ứng dụng
  BaiTapOanhTuTi,
  BookingTicket,
  BaiTapBurger,
});

export default rootReducer;
