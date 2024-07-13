import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/UserSlice";
import cartReducer from "./Cart/CartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
