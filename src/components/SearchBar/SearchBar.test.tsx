import SearchBar from './SearchBar';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

const store: Record<string, string> = {};
const localStorageMock: Storage = {
    getItem: (key: string) => store[key] || null,
    key: (index: number) => Object.keys(store)[index] || null,
    setItem: (key: string, value: string) => {
        store[key] = value;
    },
    removeItem: (key: string) => {
        delete store[key];
    },
    clear: () => {
        for (const key in store) {
            if (Object.prototype.hasOwnProperty.call(store, key)) {
                delete store[key];
            }
        }
    },
    get length() {
        return Object.keys(store).length;
    },
};

globalThis.localStorage = localStorageMock;

describe('Search Bar', () => {
    beforeEach(() => {
        localStorageMock.clear();
    });

    it('Should render correctly', () => {
        render(
            <SearchBar
                setPokemons={vi.fn()}
                setIsLoading={vi.fn()}
                pageNumber={1}
            />,
        );
        expect(screen.getByText('Search')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should save the search term to localStorage when the search button is clicked', async () => {
        render(
            <SearchBar
                setPokemons={vi.fn()}
                setIsLoading={vi.fn()}
                pageNumber={1}
            />,
        );

        fireEvent.change(screen.getByPlaceholderText('Enter pokemon name'), {
            target: { value: 'pikachu' },
        });
        fireEvent.click(screen.getByText('Search'));

        await waitFor(() => {
            expect(localStorage.getItem('inputValue')).toBe('pikachu');
        });
    });
});
