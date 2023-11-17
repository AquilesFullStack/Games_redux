import { configureStore } from "@reduxjs/toolkit";

import carrinhoReducer from "./reducers/Carrinho";

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})
