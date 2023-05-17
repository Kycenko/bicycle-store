import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const bicycleApi = createApi({
	reducerPath: 'bicycleApi',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8888'}),
	endpoints: build => (
		{
			getBicycles: build.query({
				query: () => '/bicycles'
			}),
			getSingleBicycle: build.query({
				query: (id) => `/bicycles${id}`
			})
		}
	)
})
export const {useGetBicyclesQuery, useGetSingleBicycleQuery} = bicycleApi