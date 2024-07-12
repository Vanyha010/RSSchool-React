import { ChangeEvent, useEffect, useState } from 'react';
import { getPokemonByName, getPokemonList } from '../../api/apiRequests';
import { PokemonCardData } from '../../types/types';
import './searchBar.css';
import ErrorButton from '../ErrorButton/ErrorButton';

type SearchBarProps = {
    setPokemons: (pokemonData: (PokemonCardData | undefined)[]) => void;
    setIsLoading: (loadingStatus: boolean) => void;
};

export default function SearchBar(props: SearchBarProps) {
    const { setPokemons, setIsLoading } = props;

    const [inputValue, setInputValue] = useState(
        localStorage.getItem('inputValue') || '',
    );

    const saveInputValue = (value: string) => {
        localStorage.setItem('inputValue', value);
    };

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const lowerCase = event.target.value.toLocaleLowerCase();

        if (lowerCase) setInputValue(lowerCase);
        else setInputValue('');
    };

    const submitSearch = async () => {
        saveInputValue(inputValue);
        await loadData();
    };

    const loadData = async () => {
        setIsLoading(true);
        if (inputValue) {
            try {
                const pokemonData = await getPokemonByName(inputValue);
                setPokemons([pokemonData]);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        } else {
            try {
                const pokemonsData = await getPokemonList();
                setPokemons(pokemonsData);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        loadData();
    });

    return (
        <header className="header">
            <input
                type="text"
                value={inputValue}
                onChange={handleInput}
                className="header-input"
            />
            <button onClick={submitSearch}>Search</button>
            <ErrorButton />
        </header>
    );
}
