import { configureStore } from "@reduxjs/toolkit";
import { crytoMarketsApi } from "../services/cryptoMarketsApi";

import { cryptoNewsApi } from "../services/cryptoNewsApi";

import { cryptoExchangesApi } from "../services/cryptoExchangesApi";
import { cryptoExIDApi } from "../services/cryptoExIDApi";
import { generalNewsApi } from "../services/generalNewsApi";

export const store = configureStore({
  reducer: {
    [crytoMarketsApi.reducerPath]: crytoMarketsApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoExchangesApi.reducerPath]: cryptoExchangesApi.reducer,
    [cryptoExIDApi.reducerPath]: cryptoExIDApi.reducer,
    [generalNewsApi.reducerPath]: generalNewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      crytoMarketsApi.middleware,
      cryptoNewsApi.middleware,
      cryptoExchangesApi.middleware,
      cryptoExIDApi.middleware,
      generalNewsApi.middleware,
    ]),
});
