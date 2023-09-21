import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints

export const crytoMarketsApi = createApi({
  reducerPath: "crytoMarketsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getCrytoMarkets: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});
