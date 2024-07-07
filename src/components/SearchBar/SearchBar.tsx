import { Pokemon, PokemonClient } from 'pokenode-ts';
import React, { ChangeEvent } from 'react';
import { getPokemonList } from '../../api/apiRequests';

type SearchBarProps = {
    setPokemons: (pokemonData: Pokemon[]) => void;
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
        const api = new PokemonClient();
        if (this.state.inputValue) {
            try {
                const pokemonData = await api.getPokemonByName(this.state.inputValue);
                console.log(pokemonData);
                this.props.setPokemons([pokemonData]);
            } catch(e) {
                console.log(e);
            }
        } else {
            try {
                const pokemonsData = await getPokemonList();
                console.log(pokemonsData);
                this.props.setPokemons(pokemonsData);
            } catch(e) {
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
