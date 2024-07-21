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

    const download = () => {
        const headers = Object.keys(selectedCards[0]).toString();

        const main = selectedCards.map((item) => {
            return Object.values(item).toString();
        });

        const csv = [headers, ...main].join('\n');
        console.log(csv);
        const blob = new Blob([csv], {
            type: 'application/csv',
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${selectedCards.length}_pokemons.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

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
            <button onClick={download}>Download</button>
        </div>
    );
}
