import PokemoItem from '../PokemonItem/PokemonItem';
import { PokemonCardData } from '../../types/types';
import {
    Outlet,
    useLocation,
    useNavigate,
    useOutletContext,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './pokemonList.css';

type PropsType = {
    pokemons: (PokemonCardData | undefined)[];
};

type OutletContextType = {
    closeDetails: () => void;
};

export default function PokemonsList(props: PropsType) {
    const location = useLocation();
    const [isShowingDetails, setIsShowingDetails] = useState(
        location.pathname.includes('details'),
    );
    const navigate = useNavigate();

    const openDetails = (key: number) => {
        setIsShowingDetails(true);
        navigate({
            pathname: `/details/${key}`,
            search: location.search,
        });
    };

    const closeDetails = () => {
        console.log('close');
        if (isShowingDetails) {
            navigate({ pathname: '/', search: location.search });
            setIsShowingDetails(false);
        }
    };

    useEffect(() => {
        setIsShowingDetails(false);
    }, [props.pokemons]);

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
            <Outlet context={{ closeDetails } satisfies OutletContextType} />
        </div>
    );
}

export function useCloseDetails() {
    return useOutletContext<OutletContextType>();
}
