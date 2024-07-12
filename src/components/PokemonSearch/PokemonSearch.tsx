import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PokemonsList from '../PokemonsList/PokemonsList';
import { PokemonCardData } from '../../types/types';
import Loader from '../Loader/Loader';

export default function PokemonSearch() {
    const [pokemons, setPokemons] = useState<(PokemonCardData | undefined)[]>(
        [],
    );
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <SearchBar setPokemons={setPokemons} setIsLoading={setIsLoading} />
            {isLoading ? <Loader /> : <PokemonsList pokemons={pokemons} />}
        </>
    );
}
