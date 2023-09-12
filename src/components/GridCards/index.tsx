import { PokemonsContext } from '@/context/PokemonsContext';
import { useContext } from 'react';
import { ItemCard } from './Item';
import styles from './gridCard.module.scss';
export const GridCards = () => {
  const pokemonContext = useContext(PokemonsContext);
  return (
    <div className={styles.allPokemons}>
      {pokemonContext?.pokemons?.map((poke) => (
        <ItemCard poke={poke} key={poke.id} />
      ))}
    </div>
  );
};
