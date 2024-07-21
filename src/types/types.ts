export type PokemonCardData = {
    name: string;
    key: number;
    imgUrl: string | null;
    description: string;
};

export type PokemonItemProps = {
    pokemonData: PokemonCardData;
    onPress: () => void;
};

export type SearchBarProps = {
    setPokemons: (pokemonData: (PokemonCardData | undefined)[]) => void;
    setIsLoading: (loadingStatus: boolean) => void;
    pageNumber: number;
};

export type PaginationProps = {
    pageNumber: number;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
    pokemons: (PokemonCardData | undefined)[];
};

export type SelectedCardData = {
    id: number;
    name: string;
    imageURL: string | null;
};

export type SelectedCardsAction = {
    payload: SelectedCardData;
    type: string;
};
