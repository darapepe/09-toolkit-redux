import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis/todosAPI'
import counterReducer from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemons: pokemonSlice.reducer,

        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})