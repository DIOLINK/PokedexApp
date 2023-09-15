import { PokemonContext, PokemonToggleContext } from '@/types/context';
import { createContext, useContext } from 'react';

export const PokemonsContext = createContext<PokemonContext | null>(null);

export const PokemonsToggleContext = createContext<PokemonToggleContext | null>(
  null
);

export const usePokemons = () => useContext(PokemonsContext);
export const usePokemonsToggle = () => useContext(PokemonsToggleContext);
