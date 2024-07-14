import { NamedAPIResourceList, Pokemon, PokemonClient } from 'pokenode-ts';
import { PokemonCardData } from '../types/types';

const api = new PokemonClient();

export async function getPokemonByName(
    name: string,
): Promise<PokemonCardData | undefined> {
    const response = await api
        .getPokemonByName(name)
        .then((data) => data)
        .catch((error) => console.log(error));

    if (!response) return;

    const result = await api
        .getPokemonSpeciesByName(response.name)
        .then((data) => data)
        .catch((error) => console.log(error));

    if (!result) return;

    const descr = result.flavor_text_entries.filter(
        (entry) => entry.language.name === 'en',
    );

    return {
        name: response.name,
        key: response.id,
        imgUrl: response.sprites.front_default,
        description: descr[0].flavor_text,
    };
}

export async function getPokemonList(
    offset: number = 0,
    limit: number = 10,
): Promise<(PokemonCardData | undefined)[]> {
    const response: NamedAPIResourceList | void = await api
        .listPokemons(offset, limit)
        .then((data) => data)
        .catch(() => console.log('sdfsdf'));

    const promises: Promise<PokemonCardData | undefined>[] = [];

    if (!response) return [];

    for (const pokemon of response.results) {
        const promise = getPokemonByName(pokemon.name);
        promises.push(promise);
    }

    return Promise.all(promises);
}

export default async function getPokemonById(
    id: number,
): Promise<Pokemon | undefined> {
    const result = await api
        .getPokemonById(id)
        .then((data) => data)
        .catch((error) => console.log(error));
    if (!result) return;
    return result;
}
