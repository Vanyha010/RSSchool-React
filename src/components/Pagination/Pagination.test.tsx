import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('Pagination', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Pagination
                                pageNumber={1}
                                setPageNumber={vi.fn()}
                                pokemons={[undefined]}
                            />
                        }
                    />
                </Routes>
            </MemoryRouter>,
        );
    });

    it('Renders correctly', () => {
        expect(screen.getByText('Prev')).toBeInTheDocument();
        expect(screen.getByText('Next')).toBeInTheDocument();
    });
});
