import { DataGetPokemon } from '@/types/index';

const API_URL_POKEMON = import.meta.env.VITE_API_URL + 'pokemon/' || '';

export const getPokemon = async (idPokemon: number = 1) =>
  await fetch(API_URL_POKEMON + idPokemon)
    .then((response) => response.json())
    .then((data: DataGetPokemon) => data);

export const getAllPokemons = async (
  value: number | undefined = 151,
  PARTS: number | undefined = 10
) => {
  const arrPokemons: DataGetPokemon[] = [];
  const REST = value % PARTS;
  const iterations = (value - REST) / PARTS;
  const promises: Promise<DataGetPokemon>[] = [];
  for (let i = 0; i < PARTS; i++) {
    for (let j = iterations * i + 1; j <= iterations * i + iterations; j++) {
      promises.push(
        fetch(API_URL_POKEMON + j).then((response) => response.json())
      );
    }
  }
  if (REST > 0) {
    for (let j = value - REST; j < value; j++) {
      promises.push(
        fetch(API_URL_POKEMON + (j + 1)).then((response) => response.json())
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
