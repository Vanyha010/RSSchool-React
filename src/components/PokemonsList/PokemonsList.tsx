import PokemoItem from '../PokemonItem/PokemonItem';
import { PokemonCardData } from '../../types/types';
import './pokemonList.css';

type PropsType = {
    pokemons: (PokemonCardData | undefined)[];
};

export default function PokemonsList(props: PropsType) {
    if (props.pokemons.length === 1 && !props.pokemons[0]) {
        return <p>Pokemon is not found</p>;
    }

    return (
        <div className="pokemon-list">
            {props.pokemons.map((item) => {
                if (item) {
                    return <PokemoItem pokemonData={item} key={item.key} />;
                }
            })}
        </div>
    );
}
