import { DataGetPokemon } from '@/types/index';

const API_URL = import.meta.env.VITE_API_URL || '';
export const getPokemons = async (value: number | undefined = 151) => {
  const arrPokemons: DataGetPokemon[] = [];
  const PARTS = 10;
  const REST = value % PARTS;
  const iterations = (value - REST) / PARTS;
  for (let i = 0; i < PARTS; i++) {
    for (let j = iterations * i; j <= iterations * i + iterations; j++) {
      await fetch(API_URL + (j + REST))
        .then((response) => response.json())
        .then((data: DataGetPokemon) => arrPokemons.push(data));
    }
  }
  return arrPokemons;
};
