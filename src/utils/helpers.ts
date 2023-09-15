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
  return `var(--type-${value.replace(/[^a-zA-Z]/g, '')}`;
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

export const setRoute = (route?: string | number): string =>
  route ? `/PokedexApp/${route}` : '/PokedexApp';

export const OFFICIAL_ARTWORK = 'official-artwork';

export const MAX_VALUE = '100';

export const colorProgress: {
  [key: string]: { variant: string; striped: boolean };
} = {
  hp: { variant: 'danger', striped: false },
  attack: { variant: 'info', striped: false },
  defense: { variant: 'success', striped: false },
  'special-attack': { variant: 'danger', striped: true },
  'special-defense': { variant: 'success', striped: true },
  speed: { variant: 'warning', striped: false },
};
