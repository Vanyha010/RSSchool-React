import { Component } from 'react';
import PokemonSearch from './components/PokemonSearch/PokemonSearch';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export default class App extends Component {
    render() {
        return (
            <main>
                <ErrorBoundary>
                    <PokemonSearch />
                </ErrorBoundary>
            </main>
        );
    }
}
