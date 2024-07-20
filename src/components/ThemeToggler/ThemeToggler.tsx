import { useContext } from 'react';
import './themeToggler.css';
import { ThemeContext } from '../../context/context';
import { capitalize } from '../../service/service';

export default function ThemeToggler() {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <div className="switch">
            <input
                id="switch"
                className="switch__input"
                name="switch"
                type="checkbox"
                onInput={changeTheme}
            />
            <label className="switch__label" htmlFor="switch"></label>
            <div className={theme === 'light' ? 'legeng-light' : 'legend-dark'}>
                {capitalize(theme)} theme
            </div>
        </div>
    );
}
