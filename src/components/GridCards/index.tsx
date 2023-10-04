import { Spinner } from '@/components/Spinner';
import {
  PokemonsContext,
  PokemonsToggleContext,
} from '@/context/PokemonsContext';
import { filterPokemonByType } from '@/utils/helpers';
import { useContext } from 'react';
import { ItemCard } from './Item';
import styles from './gridCard.module.scss';
export const GridCards = () => {
  const EMPTY_POKEMONS = 'I sorry, I didn´t find anything';
  const pokemonContext = useContext(PokemonsContext);
  const setTypePokemon = useContext(PokemonsToggleContext);

  const handleTypePokemon = (value: string): void => {
    setTypePokemon?.setTypePokemon(value);
  };

  if (pokemonContext?.isLoading) {
    return <Spinner />;
  }
  if (
    filterPokemonByType(
      pokemonContext?.pokemons,
      pokemonContext?.typePokemon
    ).map((pokemon) => pokemon).length === 0
  ) {
    return <h1 className={styles.empty}>{EMPTY_POKEMONS}</h1>;
  }
  return (
    <div className={styles.allPokemons}>
      {filterPokemonByType(
        pokemonContext?.pokemons,
        pokemonContext?.typePokemon
      ).map((pokemon) => (
        <ItemCard
          poke={pokemon}
          key={pokemon.id}
          onClickType={handleTypePokemon}
        />
      ))}
    </div>
  );
};
