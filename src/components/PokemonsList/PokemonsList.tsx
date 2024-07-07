import { Pokemon } from "pokenode-ts";
import React from "react";
import PokemoItem from "../PokemonItem/PokemonItem";

type PropsType = {
    pokemons: Pokemon[];
};

export default class PokemonsList extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div>
                {this.props.pokemons.map((item) => (
                    <PokemoItem pokemonData={item} key={item.id} />
                ))}
            </div>
        )
    }
}