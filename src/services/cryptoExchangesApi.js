import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoNewsHeaders = {
//   "X-BingApis-SDK": "true",
//   "X-RapidAPI-Key": "0f57fd6c95msh6e069d81fc9d94ep14a00ajsnc03143d28225",
//   "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
// };

const baseUrl = "https://api.coinpaprika.com/v1/exchanges";

const createRequest = (url) => ({ url });

export const cryptoExchangesApi = createApi({
  reducerPath: "cryptoExchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: ({ exchanges_id }) => createRequest(`/binance`),
    }),
  }),
});

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;

//  'https://api.coinpaprika.com/v1/exchanges'
