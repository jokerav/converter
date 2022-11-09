import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
    }),
    tagTypes: ['data'],
    endpoints: builder=>({
        getData: builder.query({
            query:() => ({
                url: '',
                method: "GET",
            }),
            providesTags: ['data'],
        }),
    })
});
export const {useGetDataQuery} = dataApi;