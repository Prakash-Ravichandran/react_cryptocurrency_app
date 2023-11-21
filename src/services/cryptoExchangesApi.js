import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "https://api.coinpaprika.com/v1/exchanges";
const baseUrl = "https://api.coinbase.com/v2/exchange-rates";
// const baseUrlCoinlore = "https://api.coinlore.net/api/tickers/";

const createRequest = (url) => ({ url });

export const cryptoExchangesApi = createApi({
  reducerPath: "cryptoExchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: ({ currencyName }) => createRequest(`?currency=${currencyName}`),
    }),
  }),
});

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;
