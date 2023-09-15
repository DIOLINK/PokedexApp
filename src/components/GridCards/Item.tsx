import { PokemonsToggleContext } from '@/context/PokemonsContext';
import { DataGetPokemon } from '@/types';
import {
  OFFICIAL_ARTWORK,
  addZero,
  colorType,
  convertedHeightWeight,
  setRoute,
} from '@/utils/helpers';
import { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import styles from './gridCard.module.scss';

interface ItemCardProps {
  poke: DataGetPokemon;
  onClickType: (type: string) => void;
}

export const ItemCard = ({ poke, onClickType }: ItemCardProps) => {
  const contextTogglePokemon = useContext(PokemonsToggleContext);
  const navigate = useNavigate();
  const handleIdPokemon = (): void => {
    contextTogglePokemon?.setIdPokemon(poke.id);
    navigate(setRoute(`poke-info/${poke.id}`));
  };
  return (
    <div className={styles.pokemon}>
      <p className={styles.pokemonIdBack}>{`#${addZero(poke.id)}`}</p>
      <div className={styles.pokemonImg} onClick={handleIdPokemon}>
        <LazyLoadImage
          src={poke.sprites.other[OFFICIAL_ARTWORK].front_default as undefined}
          alt={poke.name}
        />
      </div>
      <div className={styles.pokemonInfo}>
        <h2 className={styles.pokemonName}>{poke.name}</h2>

        <div className={styles.pokemonType}>
          {poke.types.map(({ type }, index) => (
            <span
              key={index + type.name}
              style={{ color: colorType(type.name) }}
              onClick={() => onClickType(type.name)}
            >
              {type.name}
            </span>
          ))}
        </div>
        <div className={styles.pokemonStats}>
          <p className={styles.stat}>
            {convertedHeightWeight(poke.height, 10)} mts
          </p>
          <p className={styles.stat}>
            {convertedHeightWeight(poke.weight, 10)} kg
          </p>
        </div>
      </div>
    </div>
  );
};
