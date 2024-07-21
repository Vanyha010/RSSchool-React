import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PokemonsList from './PokemonsList';
import { PokemonCardData, PokemonItemProps } from '../../types/types';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const mockNavigate = vi.fn();

vi.mock('../PokemonItem/PokemonItem', () => {
    return {
        __esModule: true,
        default: ({ pokemonData, onPress }: PokemonItemProps) => (
            <div data-testid="hero-card" onClick={onPress}>
                {pokemonData.name}
            </div>
        ),
    };
});

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Pokemons list', () => {
    const mockResults: PokemonCardData[] = [
        {
            name: 'test',
            key: 1,
            imgUrl: null,
            description: 'test',
        },
        {
            name: 'test',
            key: 2,
            imgUrl: null,
            description: 'test',
        },
    ];

    it('should render the specified number of cards', () => {
        render(
            <MemoryRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<PokemonsList pokemons={mockResults} />}
                    />
                </Routes>
            </MemoryRouter>,
        );
        expect(screen.getAllByTestId('hero-card')).toHaveLength(
            mockResults.length,
        );
    });

    it('should navigate to the detail view when a card is clicked', async () => {
        render(
            <MemoryRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<PokemonsList pokemons={mockResults} />}
                    />
                    <Route path="/details/:id" element={<div>Details</div>} />
                </Routes>
            </MemoryRouter>,
        );

        const cards = screen.getAllByTestId('hero-card');
        expect(cards).toHaveLength(mockResults.length);

        fireEvent.click(cards[0]);

        const link = {
            pathname: '/details/1',
            search: '',
        };

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith(link);
            expect(mockNavigate).toHaveBeenCalledTimes(1);
        });
    });

    it('should return error message when there is no items', () => {
        render(
            <MemoryRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<PokemonsList pokemons={[undefined]} />}
                    />
                </Routes>
            </MemoryRouter>,
        );
        expect(screen.getByText('Pokemon is not found')).toBeInTheDocument();
    });
});
