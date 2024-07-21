import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { unselectAll } from '../../store/selectedCardsSlice';
import { useContext } from 'react';
import { ThemeContext } from '../../context/context';
import './flyout.scss';

export default function Flyout() {
    const { theme } = useContext(ThemeContext);
    const selectedCards = useAppSelector((state) => state.selectedCards.cards);
    const dispatch = useDispatch();

    if (selectedCards.length < 1) {
        return;
    }

    return (
        <div
            className={`flyout ${theme === 'light' ? 'flyout__light' : 'flyout__dark'}`}
        >
            <div>{selectedCards.length} items are selected</div>
            <button onClick={() => dispatch(unselectAll())}>
                Unselect all
            </button>
            <button>Download</button>
        </div>
    );
}
