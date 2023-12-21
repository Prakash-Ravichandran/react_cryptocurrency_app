import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=37b2520c8b684c939371e2ecef9dad7e";

const createRequest = (url) => ({ url });

export const generalNewsApi = createApi({
  reducerPath: "generalNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getgeneralNewsApi: builder.query({
      query: () => createRequest(``),
    }),
  }),
});

export const { useGetgeneralNewsApiQuery } = generalNewsApi;
