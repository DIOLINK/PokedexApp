import { PokemonContext, PokemonToggleContext } from '@/types/context';
import { createContext } from 'react';

export const PokemonsContext = createContext<PokemonContext | null>(null);

export const PokemonsToggleContext = createContext<PokemonToggleContext | null>(
  null
);
