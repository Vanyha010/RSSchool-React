import PokemoItem from '../PokemonItem/PokemonItem';
import { PokemonCardData } from '../../types/types';
import './pokemonList.css';
import { Outlet, useNavigate } from 'react-router-dom';

type PropsType = {
    pokemons: (PokemonCardData | undefined)[];
};

export default function PokemonsList(props: PropsType) {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const openDetails = (key: number) => {
        navigate({
            pathname: `/details/${key}`,
            search: queryParams.toString(),
        });
    };

    if (props.pokemons.length === 1 && !props.pokemons[0]) {
        return <p>Pokemon is not found</p>;
    }

    return (
        <div className="pokemon-container">
            <div className="pokemon-list">
                {props.pokemons.map((item) => {
                    if (item) {
                        return (
                            <PokemoItem
                                pokemonData={item}
                                onPress={() => openDetails(item.key)}
                                key={item.key}
                            />
                        );
                    }
                })}
            </div>
            <Outlet />
        </div>
    );
}
