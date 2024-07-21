import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function useSearchQuery(
    key: string,
    initialValue: string,
): [string, Dispatch<SetStateAction<string>>] {
    const [query, setQuery] = useState<string>(() => {
        const savedQuery = localStorage.getItem(key);
        return savedQuery ? JSON.parse(savedQuery) : initialValue;
    });

    useEffect(() => {
        const saveQueryToLocalStorage = () => {
            localStorage.setItem(key, JSON.stringify(query));
        };

        return () => {
            saveQueryToLocalStorage();
        };
    }, [key, query]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem(key, JSON.stringify(query));
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [key, query]);

    return [query, setQuery];
}

export default useSearchQuery;
