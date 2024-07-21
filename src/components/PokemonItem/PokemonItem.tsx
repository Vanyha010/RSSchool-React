import { useContext, useState } from 'react';
import { capitalize, cleanDescription } from '../../service/service';
import { PokemonItemProps } from '../../types/types';
import './pokemonItem.scss';
import { ThemeContext } from '../../context/context';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/selectedCardsSlice';

export default function PokemonItem(props: PokemonItemProps) {
    const { pokemonData, onPress } = props;
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const [isSelected, setIsSelected] = useState(false);

    const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        if (isSelected) {
            setIsSelected(false);
        } else {
            setIsSelected(true);
            dispatch(addCard({ id: pokemonData.key, name: pokemonData.name }));
        }
    };

    return (
        <div
            className={`pokemon ${theme === 'light' ? 'pokemon-light' : 'pokemon-dark'}`}
            onClick={onPress}
        >
            <h3 className="pokemon__title">{capitalize(pokemonData.name)}</h3>
            <img
                src={
                    pokemonData.imgUrl
                        ? pokemonData.imgUrl
                        : 'https://placehold.jp/3d4070/ffffff/150x150.png?text=No%20image'
                }
                alt="Image"
            />
            <p className="pokemon__text">
                {cleanDescription(pokemonData.description)}
            </p>
            <label>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={handleCheckboxClick}
                />
                {isSelected ? 'Remove from list' : 'Add to list'}
            </label>
        </div>
    );
}
