import PokemonSearch from './components/PokemonSearch/PokemonSearch';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { useState } from 'react';
import { ThemeContext } from './context/context';
import { Provider } from 'react-redux';
import store from './store/index';

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
        <ErrorBoundary>
            <Provider store={store}>
                <ThemeContext.Provider value={{ theme, changeTheme }}>
                    <main
                        className={
                            theme === 'light' ? 'main-light' : 'main-dark'
                        }
                    >
                        <PokemonSearch />
                    </main>
                </ThemeContext.Provider>
            </Provider>
        </ErrorBoundary>
    );
}
