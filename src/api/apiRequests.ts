import { NamedAPIResourceList, Pokemon, PokemonClient } from "pokenode-ts";

const api = new PokemonClient();

export async function getPokemonList(): Promise<(Pokemon)[]> {
    const response: NamedAPIResourceList | void = await api
        .listPokemons()
        .then((data) => data)
        .catch((error) => console.log(error));

    const promises: Promise<Pokemon>[] = [];

    if (!response) return [];

    for (const pokemon of response.results) {
        const promise = api.getPokemonByName(pokemon.name);
        promises.push(promise);
    }

    return Promise.all(promises);
}

