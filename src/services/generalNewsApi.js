import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "44b0285191b70f1f89dd19885c2eb38e";
const baseUrl = "https://gnews.io/api/v4/top-headlines";

const createRequest = (url) => ({ url });

export const generalNewsApi = createApi({
  reducerPath: "generalNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getgeneralNewsApi: builder.query({
      query: ({ newsCategory, symbol_lang }) =>
        createRequest(
          `?category=${newsCategory}&lang=en&country=${`us`}&max=12&apikey=${apiKey}`
        ),
    }),
  }),
});

export const { useGetgeneralNewsApiQuery } = generalNewsApi;
