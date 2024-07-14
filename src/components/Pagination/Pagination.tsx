import { useNavigate } from 'react-router-dom';
import { PokemonCardData } from '../../types/types';
import './pagination.css';

type PropsType = {
    pageNumber: number;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
    pokemons: (PokemonCardData | undefined)[];
};

export default function Pagination(props: PropsType) {
    const { pageNumber, setPageNumber, pokemons } = props;
    const navigate = useNavigate();

    const prevPage = () => {
        setPageNumber(pageNumber - 1);
        navigate({ pathname: '/', search: location.search });
    };

    const nextPage = () => {
        setPageNumber(pageNumber + 1);
        navigate({ pathname: '/', search: location.search });
    };

    return (
        <div className="pagination-container">
            <button onClick={prevPage} disabled={pageNumber < 2}>
                &lt;
            </button>
            <h3>{pageNumber}</h3>
            <button onClick={nextPage} disabled={pokemons.length === 1}>
                &gt;
            </button>
        </div>
    );
}
