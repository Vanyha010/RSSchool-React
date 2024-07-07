import React, { ChangeEvent } from 'react';
import { getPokemonByName, getPokemonList } from '../../api/apiRequests';
import { PokemonCardData } from '../../types/types';
import './searchBar.css';
import ErrorButton from '../ErrorButton/ErrorButton';

type SearchBarProps = {
    setPokemons: (pokemonData: (PokemonCardData | undefined)[]) => void;
};

export default class SearchBar extends React.Component<SearchBarProps> {
    constructor(props: SearchBarProps) {
        super(props);
    }

    public state = {
        inputValue: localStorage.getItem('inputValue') || '',
    };

    setInputValue = (value: string) => {
        localStorage.setItem('inputValue', value);
    };

    inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const lowerCase = event.target.value.toLocaleLowerCase();

        if (lowerCase) this.setState({ inputValue: lowerCase });
        else this.setState({ inputValue: '' });
    };

    submitSearch = async () => {
        this.setInputValue(this.state.inputValue);
        await this.loadData();
    };

    loadData = async () => {
        if (this.state.inputValue) {
            try {
                const pokemonData = await getPokemonByName(
                    this.state.inputValue,
                );
                console.log(pokemonData);
                this.props.setPokemons([pokemonData]);
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                const pokemonsData = await getPokemonList();
                console.log(pokemonsData);
                this.props.setPokemons(pokemonsData);
            } catch (e) {
                console.log(e);
            }
        }
    };

    componentDidMount(): void {
        this.loadData();
    }

    render(): React.ReactNode {
        return (
            <header className="header">
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.inputHandler}
                    className="header-input"
                />
                <button onClick={this.submitSearch}>Search</button>
                <ErrorButton />
            </header>
        );
    }
}
