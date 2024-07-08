// import { Component } from 'react';
// import PokemonSearch from './components/PokemonSearch/PokemonSearch';
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

// export default class App extends Component {
//     render() {
//         return (
//             <main>
//                 <ErrorBoundary>
//                     <PokemonSearch />
//                 </ErrorBoundary>
//             </main>
//         );
//     }
// }

import { useState } from 'react';

function Header() {
    console.log('Header', Math.random());
    return (
        <header>
            <h1>React Counter</h1>
        </header>
    );
}

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </>
    );
}
