import { getPokemons } from '@/data';
import { DataGetPokemon } from '@/types';
import { useEffect, useState } from 'react';

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<DataGetPokemon[]>([]);
  const [typePokemon, setTypePokemon] = useState<string>('');
  useEffect(() => {
    const use = async () => {
      const resp = await getPokemons();
      setPokemons(resp);
    };
    if (pokemons.length === 0) use();
  }, []);

  return {
    pokemons,
    setTypePokemon,
    typePokemon,
  };
};
