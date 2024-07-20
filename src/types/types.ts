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
