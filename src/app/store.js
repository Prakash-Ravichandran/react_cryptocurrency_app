import { configureStore } from "@reduxjs/toolkit";
import { getDefaultNormalizer } from "@testing-library/react";
import { crytoMarketsApi } from "../services/cryptoMarketsApi";

import { cryptoNewsApi } from "../services/cryptoNewsApi";

export const store = configureStore({
  reducer: {
    [crytoMarketsApi.reducerPath]: crytoMarketsApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      crytoMarketsApi.middleware,
      cryptoNewsApi.middleware,
    ]),
});
