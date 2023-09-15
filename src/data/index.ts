import { DataGetPokemon } from '@/types/index';

const API_URL = import.meta.env.VITE_API_URL || '';
export const getPokemons = async (value: number | undefined = 151) => {
  const arrPokemons: DataGetPokemon[] = [];
  const PARTS = 10;
  const REST = value % PARTS;
  const iterations = (value - REST) / PARTS;
  const promises: Promise<DataGetPokemon>[] = [];
  for (let i = 0; i < PARTS; i++) {
    for (let j = iterations * i + 1; j < iterations * i + iterations; j++) {
      promises.push(fetch(API_URL + j).then((response) => response.json()));
    }
  }
  if (REST > 0) {
    for (let j = value - REST; j < value; j++) {
      promises.push(
        fetch(API_URL + (j + 1)).then((response) => response.json())
      );
    }
  }
  await Promise.all(promises).then((responses) => {
    for (const i in responses) {
      arrPokemons.push(responses[i]);
    }
  });

  return arrPokemons;
};
