import {
  PokemonsContext,
  PokemonsToggleContext,
} from '@/context/PokemonsContext';
import { usePokemons } from '@/hook/usePokemons';
import { ReactElement } from 'react';

interface LayoutProps {
  children?: ReactElement;
}
export const Layout = ({ children }: LayoutProps) => {
  const {
    pokemons,
    typePokemon,
    setTypePokemon,
    isLoading,
    setIdPokemon,
    pokemon,
  } = usePokemons();
  return (
    <PokemonsContext.Provider
      value={{ pokemons, typePokemon, isLoading, pokemon }}
    >
      <PokemonsToggleContext.Provider value={{ setTypePokemon, setIdPokemon }}>
        {children}
      </PokemonsToggleContext.Provider>
    </PokemonsContext.Provider>
  );
};
