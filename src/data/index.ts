import { DataGetPokemon } from '../types/index';

const API_URL = import.meta.env.NEXT_PUBLIC_API_URL || '';
export const getPokemon = (value: number = 1) => {
  const arrPokemons: DataGetPokemon[] = new Array<DataGetPokemon>(value);
  for (let i = 1; i <= value; i++) {
    fetch(API_URL + i)
      .then((response) => response.json())
      .then((data: DataGetPokemon) => (arrPokemons[i] = data));
  }
  return arrPokemons;
};
