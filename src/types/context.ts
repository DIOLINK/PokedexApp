import { DataGetPokemon } from '@/types';

export interface PokemonContext {
  pokemons: DataGetPokemon[];
  typePokemon: string;
  isLoading: boolean;
}

export interface PokemonToggleContext {
  setTypePokemon: React.Dispatch<React.SetStateAction<string>>;
}
