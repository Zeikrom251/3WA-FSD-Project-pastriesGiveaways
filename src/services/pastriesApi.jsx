import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const pastriesApi = createApi({
  reducerPath: "pastriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/game" }),
  endpoints: (builder) => ({
    getPastries: builder.query({
      query: () => "/pastries",
    }),
    addPastry: builder.mutation({
      query: (newPastry) => ({
        url: "/pastrie",
        method: "POST",
        body: newPastry,
      }),
    }),
    deletePastry: builder.mutation({
      query: (id) => ({
        url: `/pastrie/${id}`,
        method: "DELETE",
      }),
    }),
    updatePastry: builder.mutation({
      query: (updatePastry) => ({
        url: `/pastrie/${updatePastry.id}`,
        method: "PUT",
        body: updatePastry,
      }),
    }),
  }),
})

export const {
  useGetPastriesQuery,
  useAddPastryMutation,
  useDeletePastryMutation,
  useUpdatePastryMutation,
} = pastriesApi
