import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const bicycleApi = createApi({
  reducerPath: 'bicycleApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8888'}),
  tagTypes: ['Bicycles'],
  endpoints: build => (
    {
      getBicycles: build.query({
        query: (body) => body.search === ''
          ? `/bicycles?category_like=${body.category}&_page=${body.page}&_limit=6`
          : `/bicycles?title_like=${body.search}&_limit=6`
      }),
      invalidatesTags: ['Bicycles'],
      getSingleBicycle: build.query({
        query: (id) => `/bicycles/${id}`
      }),
      getBicycleCategory: build.query({
        query: () => '/categories'
      }),
      getReviews: build.query({
        query: () => '/reviews',
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({id}) => ({type: 'Bicycles', id})), 'Bicycles']
            : ['Bicycles'],
      }),
      addReview: build.mutation({
        query: (body) => ({
          url: '/reviews',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Bicycles']
      }),
    }
  )
})
export const {
  useGetBicyclesQuery,
  useGetSingleBicycleQuery,
  useGetBicycleCategoryQuery,
  useGetReviewsQuery,
  useAddReviewMutation
} = bicycleApi