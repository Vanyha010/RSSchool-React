import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PokemonsList from '../PokemonsList/PokemonsList';
import { PokemonCardData } from '../../types/types';
import Loader from '../Loader/Loader';

type PokemonSearchState = {
    pokemons: PokemonCardData[] | undefined[];
    isLoading: boolean;
};

export default class PokemonSearch extends React.Component {
    public state: PokemonSearchState = {
        pokemons: [],
        isLoading: false,
    };

    setPokemons = (pokemonsData: (PokemonCardData | undefined)[]) => {
        this.setState({ pokemons: pokemonsData });
    };

    setLoading = (loadingStatus: boolean) => {
        this.setState({ isLoading: loadingStatus });
    };

    render(): React.ReactNode {
        return (
            <>
                <SearchBar
                    setPokemons={this.setPokemons}
                    setLoading={this.setLoading}
                />
                {this.state.isLoading ? (
                    <Loader />
                ) : (
                    <PokemonsList pokemons={this.state.pokemons} />
                )}
            </>
        );
    }
}
