import { DataGetPokemon } from '@/types/index';

const API_URL = import.meta.env.VITE_API_URL || '';
export const getPokemons = async (value: number | undefined = 151) => {
  const arrPokemons: DataGetPokemon[] = [];
  for (let i = 1; i <= value; i++) {
    await fetch(API_URL + i)
      .then((response) => response.json())
      .then((data: DataGetPokemon) => arrPokemons.push(data));
  }
  return arrPokemons;
};
