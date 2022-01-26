import { Tang_Giam } from "../../BaiTapBurger/Type/BurgerType";
let tinhSum = () => {
  return this.stateMenu.danhSachBurger[0].amount;
};
const stateMenu = {
  danhSachBurger: [
    { name: "salad", amount: 1, price: 1000 },
    { name: "cheese", amount: 1, price: 2000 },
    { name: "breef", amount: 1, price: 3000 },
  ],
  sum: 0,
};

const BaiTapBurger = (state = stateMenu, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case Tang_Giam: {
      let tempDanhSachBurger = state;
      // eslint-disable-next-line array-callback-return
      tempDanhSachBurger.danhSachBurger.map((item, index) => {
        if (item.name === action.name) {
          if (action.pick === "add") {
            console.log("add");
            return (item.amount = item.amount + 1);
          } else if (action.pick === "remove") {
            if (item.amount !== 0) {
              return (item.amount = item.amount - 1);
            } else {
              alert(`${item.name} notthig on your Burger`);
            }
          }
        }
      });
      let total = 0;
      tempDanhSachBurger.danhSachBurger.map((item) => {
        total += item.amount * item.price;
      });
      console.log("total", total);
      state.sum = total.toLocaleString();
      state.danhSachBurger = [...tempDanhSachBurger.danhSachBurger];
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default BaiTapBurger;
