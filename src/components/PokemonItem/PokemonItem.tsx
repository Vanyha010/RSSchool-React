import { Pokemon } from "pokenode-ts";
import React from "react";

type PropsType = {
    pokemonData: Pokemon;
};

export default class PokemoItem extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div>
                <h3>{this.props.pokemonData.name}</h3>
                <img src={this.props.pokemonData.sprites.front_default!} alt="Photo" />
            </div>
        )
    }
}