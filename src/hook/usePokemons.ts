import { getPokemons } from '@/data';
import { DataGetPokemon } from '@/types';
import { useEffect, useState } from 'react';

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<DataGetPokemon[]>([]);
  const [typePokemon, setTypePokemon] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const use = async () => {
      const resp = await getPokemons();
      setPokemons(resp);
      setIsLoading(false);
    };
    if (pokemons.length === 0) use();
  }, []);

  return {
    pokemons,
    setTypePokemon,
    typePokemon,
    isLoading,
  };
};
