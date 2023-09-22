import { configureStore } from "@reduxjs/toolkit";
import { crytoMarketsApi } from "../services/cryptoMarketsApi";

export const store = configureStore({
  reducer: {
    [crytoMarketsApi.reducerPath]: crytoMarketsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crytoMarketsApi.middleware),
});
