import PokemonSearch from './components/PokemonSearch/PokemonSearch';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './router/Router';

export default function App() {
    return (
        <main>
            <ErrorBoundary>
                <PokemonSearch />
                {/* <RouterProvider router={router} /> */}
            </ErrorBoundary>
        </main>
    );
}
