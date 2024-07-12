import { useState } from 'react';

export default function ErrorButton() {
    const [error, setError] = useState(false);

    const throwError = () => {
        setError(true);
    };

    if (error) {
        throw new Error('Some crazy Error');
    }

    return (
        <button className="error__button" onClick={throwError}>
            Error
        </button>
    );
}
