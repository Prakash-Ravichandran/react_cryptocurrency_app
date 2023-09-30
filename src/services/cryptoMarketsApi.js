import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "0f57fd6c95msh6e069d81fc9d94ep14a00ajsnc03143d28225",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const crytoMarketsApi = createApi({
  reducerPath: "crytoMarketsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrytoMarkets: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

export const { useGetCrytoMarketsQuery, useGetCryptoDetailsQuery } =
  crytoMarketsApi;
