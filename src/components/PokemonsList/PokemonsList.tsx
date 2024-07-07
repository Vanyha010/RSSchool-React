import React from 'react';
import PokemoItem from '../PokemonItem/PokemonItem';
import { PokemonCardData } from '../../types/types';
import './pokemonList.css';

type PropsType = {
    pokemons: (PokemonCardData | undefined)[];
};

export default class PokemonsList extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="pokemon-list">
                {this.props.pokemons.map((item) => {
                    if (item) {
                        return <PokemoItem pokemonData={item} key={item.key} />;
                    }
                })}
            </div>
        );
    }
}
