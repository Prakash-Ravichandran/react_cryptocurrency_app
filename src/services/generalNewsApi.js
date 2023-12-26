import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl =
//   "https://newsapi.org/v2/everything?q=keyword&apiKey=37b2520c8b684c939371e2ecef9dad7e"; // newsapi

const apiKey = "44b0285191b70f1f89dd19885c2eb38e";

const category = "health";
const baseUrl =
  "https://gnews.io/api/v4/top-headlines?category=" +
  category +
  "&lang=en&country=us&max=10&apikey=" +
  apiKey;

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
