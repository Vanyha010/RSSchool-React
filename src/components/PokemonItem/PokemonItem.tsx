import { useContext } from 'react';
import { capitalize, cleanDescription } from '../../service/service';
import { PokemonItemProps } from '../../types/types';
import './pokemonItem.scss';
import { ThemeContext } from '../../context/context';
import { useDispatch } from 'react-redux';
import { addCard, removeCard } from '../../store/selectedCardsSlice';
import { useAppSelector } from '../../hooks/useAppSelector';

export default function PokemonItem(props: PokemonItemProps) {
    const selectedCards = useAppSelector((state) => state.selectedCards.cards);
    const selectedCardsId = selectedCards.map((item) => item.id);
    const { pokemonData, onPress } = props;
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);

    const handleCheckboxClick = () => {
        if (selectedCardsId.includes(pokemonData.key)) {
            dispatch(removeCard({ id: pokemonData.key }));
        } else {
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
            <label
                className="pokemon__select"
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    type="checkbox"
                    checked={selectedCardsId.includes(pokemonData.key)}
                    onChange={handleCheckboxClick}
                />
                {selectedCardsId.includes(pokemonData.key)
                    ? 'Remove from list'
                    : 'Add to list'}
            </label>
        </div>
    );
}
