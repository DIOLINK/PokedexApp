import { logo } from '@/assets';
import { PokemonsToggleContext } from '@/context/PokemonsContext';
import { listHeader } from '@/utils';
import { colorType } from '@/utils/helpers';
import { useContext } from 'react';
import styles from './header.module.scss';
export const Header = () => {
  const setTypePokemon = useContext(PokemonsToggleContext);

  const handleTypePokemon = (value: string): void => {
    setTypePokemon?.setTypePokemon(value);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" />
        <ul className={styles.navList}>
          {Object.keys(listHeader).map((key, index) => (
            <li className={styles.navItem} key={key + index}>
              <button
                className={styles.btnHeader}
                style={{
                  backgroundColor: colorType(key),
                }}
                onClick={() => handleTypePokemon(key)}
              >
                {listHeader[key]}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
