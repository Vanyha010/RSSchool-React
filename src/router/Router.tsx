import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PokemonDetails, {
    loader as pokemonDetailsLoader,
} from '../components/PokemonDetails/PokemonDetails';

// export const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/">
//             <Route index element={<PokemonSearch />} />
//             <Route path="/details" element={<PokemonSearch />} />
//             <Route path="*" element={<h1>Errorrororor</h1>} />
//         </Route>,
//     ),
// );

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
