import React, { ChangeEvent } from 'react';
import { getPokemonByName, getPokemonList } from '../../api/apiRequests';
import { PokemonCardData } from '../../types/types';

type SearchBarProps = {
    setPokemons: (pokemonData: (PokemonCardData | undefined)[]) => void;
};

export default class SearchBar extends React.Component<SearchBarProps> {
    constructor(props: SearchBarProps) {
        super(props);
    }

    public state = {
        inputValue: '',
    };

    inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const lowerCase = event.target.value.toLocaleLowerCase();

        if (lowerCase) this.setState({ inputValue: lowerCase });
        else this.setState({ inputValue: '' });
    };

    submitSearch = async () => {
        // const api = new PokemonClient();
        if (this.state.inputValue) {
            try {
                const pokemonData = await getPokemonByName(
                    this.state.inputValue,
                );
                console.log(pokemonData);
                if (pokemonData) {
                    this.props.setPokemons([pokemonData]);
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                const pokemonsData = await getPokemonList();
                console.log(pokemonsData);
                if (pokemonsData) {
                    this.props.setPokemons(pokemonsData);
                }
            } catch (e) {
                console.log(e);
            }
        }
    };

    render(): React.ReactNode {
        return (
            <header>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.inputHandler}
                />
                <button onClick={this.submitSearch}>Search</button>
            </header>
        );
    }
}
