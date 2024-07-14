import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PokemonDetails, {
    loader as pokemonDetailsLoader,
} from '../components/PokemonDetails/PokemonDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/details/:id',
                element: <PokemonDetails />,
                loader: pokemonDetailsLoader,
            },
        ],
    },
    {
        path: '*',
        element: <h1>Ooopsy, error</h1>,
    },
]);
