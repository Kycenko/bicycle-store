import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const bicycleApi = createApi({
	reducerPath: 'bicycleApi',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8888'}),
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
			})
		}
	)
})
export const {useGetBicyclesQuery, useGetSingleBicycleQuery, useGetBicycleCategoryQuery} = bicycleApi