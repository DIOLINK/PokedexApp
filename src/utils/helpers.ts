import { DataGetPokemon } from '@/types';

export function convertedHeightWeight(
  value: number = 0,
  constant: number = 1
): number {
  return value / constant;
}

export function addZero(value: number | string): string | number {
  if (String(value).length === 3) return value;
  return addZero(`0${value}`);
}

export function colorType(value: string = 'all'): string {
  return `var(--type-${value})`;
}

export function filterPokemonByType(
  pokemonList: DataGetPokemon[] = [],
  typePokemon: string = ''
): DataGetPokemon[] {
  if (typePokemon === '' || typePokemon === 'all') return pokemonList;
  return pokemonList?.filter((pokemon) =>
    pokemon.types.some(
      ({ type }) => type.name.toLowerCase() === typePokemon.toLowerCase()
    )
  );
}
