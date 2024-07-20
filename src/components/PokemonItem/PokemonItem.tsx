import { useContext } from 'react';
import { capitalize, cleanDescription } from '../../service/service';
import { PokemonItemProps } from '../../types/types';
import './pokemonItem.scss';
import { ThemeContext } from '../../context/context';

export default function PokemonItem(props: PokemonItemProps) {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`pokemon ${theme === 'light' ? 'pokemon-light' : 'pokemon-dark'}`}
            onClick={props.onPress}
        >
            <h3 className="pokemon__title">
                {capitalize(props.pokemonData.name)}
            </h3>
            <img
                src={
                    props.pokemonData.imgUrl
                        ? props.pokemonData.imgUrl
                        : 'https://placehold.jp/3d4070/ffffff/150x150.png?text=No%20image'
                }
                alt="Image"
            />
            <p className="pokemon__text">
                {cleanDescription(props.pokemonData.description)}
            </p>
        </div>
    );
}
