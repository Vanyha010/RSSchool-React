import { useNavigate } from 'react-router-dom';
import { PaginationProps } from '../../types/types';
import './pagination.css';

export default function Pagination(props: PaginationProps) {
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
                Prev
            </button>
            <h3>{pageNumber}</h3>
            <button onClick={nextPage} disabled={pokemons.length === 1}>
                Next
            </button>
        </div>
    );
}
