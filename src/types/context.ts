import { DataGetPokemon } from '@/types';

export interface PokemonContext {
  isLoading: boolean;
  pokemon: DataGetPokemon | null;
  pokemons: DataGetPokemon[];
  typePokemon: string;
}

export interface PokemonToggleContext {
  setIdPokemon: React.Dispatch<React.SetStateAction<number>>;
  setTypePokemon: React.Dispatch<React.SetStateAction<string>>;
}
