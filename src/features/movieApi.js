import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey } from './constant';





export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({


    movieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {
          api_key: apiKey
        }
      })
    }),





    getMovieByDetail: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {
          api_key: apiKey
        }
      })
    }),



    videoById: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {
          api_key: apiKey
        }
      })
    }),


  }) 
});


export const { useMovieByCategoryQuery, useVideoByIdQuery, useGetMovieByCategoryQuery } = movieApi;