import PokemonSearch from './components/PokemonSearch/PokemonSearch';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { useState } from 'react';
import { ThemeContext } from './context/context';

export default function App() {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <main className={theme === 'light' ? 'main-light' : 'main-dark'}>
                <ErrorBoundary>
                    <PokemonSearch />
                </ErrorBoundary>
            </main>
        </ThemeContext.Provider>
    );
}
