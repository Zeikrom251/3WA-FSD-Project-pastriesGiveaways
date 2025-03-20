import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getUsers: builder.query({
      query: () => `/users`,
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
    }),
  }),
})

export const { useLoginMutation, useGetUsersQuery, useLogoutMutation } =
  usersApi
export default usersApi
