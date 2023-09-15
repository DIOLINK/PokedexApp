import { getAllPokemons, getPokemon } from '@/data';
import { DataGetPokemon } from '@/types';
import { useEffect, useState } from 'react';

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<DataGetPokemon[]>([]);
  const [typePokemon, setTypePokemon] = useState<string>('');
  const [pokemon, setPokemon] = useState<DataGetPokemon | null>(null);
  const [idPokemon, setIdPokemon] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (pokemons.length === 0) {
      setIsLoading(true);
      getAllPokemons()
        .then((data) => {
          setPokemons(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    if (idPokemon > 0 && !!idPokemon) {
      setIsLoading(true);
      getPokemon(idPokemon).then((data) => {
        setPokemon(data);
        setIsLoading(false);
      });
    }
  }, [idPokemon]);

  return {
    isLoading,
    pokemon,
    pokemons,
    setIdPokemon,
    setTypePokemon,
    typePokemon,
  };
};
