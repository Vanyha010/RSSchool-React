import PokemonSearch from './components/PokemonSearch/PokemonSearch';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export default function App() {
    return (
        <main>
            <ErrorBoundary>
                <PokemonSearch />
            </ErrorBoundary>
        </main>
    );
}
