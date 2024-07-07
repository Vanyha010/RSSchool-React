import React from 'react';
import { capitalize, cleanDescription } from '../../service/service';
import { PokemonCardData } from '../../types/types';
import './pokemonItem.css';

type PropsType = {
    pokemonData: PokemonCardData;
};

export default class PokemoItem extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="pokemon">
                <h3 className="pokemon__title">
                    {capitalize(this.props.pokemonData.name)}
                </h3>
                <img
                    src={
                        this.props.pokemonData.imgUrl
                            ? this.props.pokemonData.imgUrl
                            : 'https://placehold.jp/3d4070/ffffff/150x150.png?text=No%20image'
                    }
                    alt="Image"
                />
                <p className="pokemon__text">
                    {cleanDescription(this.props.pokemonData.description)}
                </p>
            </div>
        );
    }
}
