import { capitalize, cleanDescription } from '../../service/service';
import { PokemonCardData } from '../../types/types';
import './pokemonItem.css';

type PropsType = {
    pokemonData: PokemonCardData;
};

export default function PokemonItem(props: PropsType) {
    return (
        <div className="pokemon">
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
