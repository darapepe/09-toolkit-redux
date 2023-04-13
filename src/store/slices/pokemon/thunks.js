import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemon());

        // TODO: realizar peticio http
        // const respt = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await respt.json();

        const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        //console.log(resp);

        dispatch(setPokemons({ pokemons: resp.data.results, page: page + 1 }));
    }
}