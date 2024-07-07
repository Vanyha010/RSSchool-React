import { Pokemon } from 'pokenode-ts';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PokemonsList from '../PokemonsList/PokemonsList';

type PokemonSearchState = {
    pokemons: Pokemon[];
};

export default class PokemonSearch extends React.Component {
    public state: PokemonSearchState = {
        pokemons: [],
    };

    setPokemons = (pokemonsData: Pokemon[]) => {
        this.setState({pokemons: pokemonsData})
    }

    render(): React.ReactNode {
        return(
            <>
                <SearchBar setPokemons={this.setPokemons}/>
                <PokemonsList pokemons={this.state.pokemons} />
            </>
        );
    }
}