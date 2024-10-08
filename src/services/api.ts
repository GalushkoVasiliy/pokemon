import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonsApi = createApi({
    reducerPath: 'getPokemons',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
      getPokemons: builder.query({
        query: () => 'ability/?offset=20&limit=20',
      }),
      getPokemonByName: builder.query({
        query: (name) => `pokemon/${name}`,
      }),
    }),
  });

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonsApi;
