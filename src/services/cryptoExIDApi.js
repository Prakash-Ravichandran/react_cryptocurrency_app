import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.coinbase.com/v2/currencies";

const createRequest = (url) => ({ url });

export const cryptoExIDApi = createApi({
  reducerPath: "cryptoExIDApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getcryptoExIDApi: builder.query({
      query: () => createRequest(``),
    }),
  }),
});

export const { useGetcryptoExIDApiQuery } = cryptoExIDApi;
