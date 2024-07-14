import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PokemonsList from '../PokemonsList/PokemonsList';
import { PokemonCardData } from '../../types/types';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

export default function PokemonSearch() {
    const [pageNumber, setPageNumber] = useState(1);

    const [pokemons, setPokemons] = useState<(PokemonCardData | undefined)[]>(
        [],
    );
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <SearchBar setPokemons={setPokemons} setIsLoading={setIsLoading} />
            {isLoading ? <Loader /> : <PokemonsList pokemons={pokemons} />}
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </>
    );
}
