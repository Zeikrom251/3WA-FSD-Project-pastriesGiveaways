import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const pastriesApi = createApi({
  reducerPath: "pastriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getPastries: builder.query({
      query: () => "/game/pastries",
    }),
    addPastry: builder.mutation({
      query: (newPastry) => ({
        url: "/api/pastrie",
        method: "POST",
        body: newPastry,
      }),
    }),
    deletePastry: builder.mutation({
      query: (id) => ({
        url: `/api/pastrie/${id}`,
        method: "DELETE",
      }),
    }),
    updatePastry: builder.mutation({
      query: (updatePastry) => ({
        url: `/api/pastrie/${updatePastry.id}`,
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
