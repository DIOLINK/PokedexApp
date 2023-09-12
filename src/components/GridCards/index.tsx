import { Spinner } from '@/components/Spinner';
import { PokemonsContext } from '@/context/PokemonsContext';
import { filterPokemonByType } from '@/utils/helpers';
import { useContext } from 'react';
import { ItemCard } from './Item';
import styles from './gridCard.module.scss';
export const GridCards = () => {
  const pokemonContext = useContext(PokemonsContext);

  if (pokemonContext?.isLoading) {
    return <Spinner />;
  }
  return (
    <div className={styles.allPokemons}>
      {filterPokemonByType(
        pokemonContext?.pokemons,
        pokemonContext?.typePokemon
      ).map((pokemon) => (
        <ItemCard poke={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};
