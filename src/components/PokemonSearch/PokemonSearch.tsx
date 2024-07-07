import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PokemonsList from '../PokemonsList/PokemonsList';
import { PokemonCardData } from '../../types/types';

type PokemonSearchState = {
    pokemons: PokemonCardData[] | undefined[];
};

export default class PokemonSearch extends React.Component {
    public state: PokemonSearchState = {
        pokemons: [],
    };

    setPokemons = (pokemonsData: (PokemonCardData | undefined)[]) => {
        this.setState({ pokemons: pokemonsData });
    };

    render(): React.ReactNode {
        return (
            <>
                <SearchBar setPokemons={this.setPokemons} />
                <PokemonsList pokemons={this.state.pokemons} />
            </>
        );
    }
}
