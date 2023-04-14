import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts/' }),
  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `${id}`,
    }),
  }),
})

export const useGetPost = postApi.endpoints.getPostById.useQuery
