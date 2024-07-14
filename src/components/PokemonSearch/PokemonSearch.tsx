import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PokemonsList from '../PokemonsList/PokemonsList';
import { PokemonCardData } from '../../types/types';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

export default function PokemonSearch() {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('page'));
    const [pageNumber, setPageNumber] = useState(1);

    const [pokemons, setPokemons] = useState<(PokemonCardData | undefined)[]>(
        [],
    );
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (searchParams.get('page')) {
            setPageNumber(parseFloat(searchParams.get('page')!));
        }
    }, []);

    useEffect(() => {
        if (pokemons.length === 1) {
            setPageNumber(1);
        } else if (!searchParams.get('page')) {
            const params = {
                page: '1',
            };
            setSearchParams(params);
        }
    }, [pokemons]);

    useEffect(() => {
        const params = {
            page: pageNumber.toString(),
        };
        setSearchParams(params);
    }, [pageNumber]);

    return (
        <>
            <SearchBar
                setPokemons={setPokemons}
                setIsLoading={setIsLoading}
                pageNumber={pageNumber}
            />
            {isLoading ? <Loader /> : <PokemonsList pokemons={pokemons} />}
            <Pagination
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                pokemons={pokemons}
            />
        </>
    );
}
