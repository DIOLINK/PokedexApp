import { DataGetPokemon } from '@/types';
import { IMG_DEFAULT } from '@/utils';
import { addZero, colorType, convertedHeightWeight } from '@/utils/helpers';
import styles from './gridCard.module.scss';

interface ItemCardProps {
  poke: DataGetPokemon;
}

const OFFICIAL_ARTWORK = 'official-artwork';

export const ItemCard = ({ poke }: ItemCardProps) => {
  return (
    <div className={styles.pokemon}>
      <p className={styles.pokemonIdBack}>{`#${addZero(poke.id)}`}</p>
      <div className={styles.pokemonImg}>
        <img
          src={
            poke.sprites.other[OFFICIAL_ARTWORK].front_default || IMG_DEFAULT
          }
          alt={poke.name}
        ></img>
      </div>
      <div className={styles.pokemonInfo}>
        <h2 className={styles.pokemonName}>{poke.name}</h2>

        <div className={styles.pokemonType}>
          {poke.types.map(({ type }, index) => (
            <span
              key={index + type.name}
              style={{ color: colorType(type.name) }}
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
