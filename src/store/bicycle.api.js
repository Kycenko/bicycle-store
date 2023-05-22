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
			getSingleBicycle: build.query({
				query: (id) => `/bicycles/${id}`
			}),
			getBicycleCategory: build.query({
				query: () => '/categories'
			}),
			getComments: build.query({
				query: () => '/comments',
				providesTags: ['Bicycles']
			}),
			addComment: build.mutation({
				query: (body) => ({
					url: '/comments',
					method: 'POST',
					body,
				}),
			}),
		}
	)
})
export const {useGetBicyclesQuery, useGetSingleBicycleQuery, useGetBicycleCategoryQuery, useGetCommentsQuery, useAddCommentMutation} = bicycleApi