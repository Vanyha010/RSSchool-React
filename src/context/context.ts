import { createContext } from 'react';

type ThemeContextType = {
    theme: string;
    changeTheme: () => void;
};

const defaultValue: ThemeContextType = {
    theme: 'light',
    changeTheme() {},
};

export const ThemeContext = createContext(defaultValue);
