// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const product_dataApi = createApi({
  reducerPath: "product_dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/categories`,
  }),
  endpoints: (builder) => ({
    getproduct_dataByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproduct_dataByNameQuery } = product_dataApi;
