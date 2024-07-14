import PokemoItem from '../PokemonItem/PokemonItem';
import { PokemonCardData } from '../../types/types';
import './pokemonList.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

type PropsType = {
    pokemons: (PokemonCardData | undefined)[];
};

export default function PokemonsList(props: PropsType) {
    const [isShowingDetails, setIsShowingDetails] = useState(false);
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const openDetails = (key: number) => {
        setIsShowingDetails(true);
        navigate({
            pathname: `/details/${key}`,
            search: queryParams.toString(),
        });
    };

    const closeDetails = () => {
        if (isShowingDetails) {
            navigate({ pathname: '/', search: queryParams.toString() });
            setIsShowingDetails(false);
        }
    };

    if (props.pokemons.length === 1 && !props.pokemons[0]) {
        return <p>Pokemon is not found</p>;
    }

    return (
        <div className="pokemon-container">
            <div className="pokemon-list" onClick={closeDetails}>
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
