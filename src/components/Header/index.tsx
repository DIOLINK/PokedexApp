import { logo } from '@/assets';
import { PokemonsToggleContext } from '@/context/PokemonsContext';
import { listHeader } from '@/utils';
import { colorType } from '@/utils/helpers';
import { IconMenuDeep } from '@tabler/icons-react';
import { useContext } from 'react';
import styles from './header.module.scss';
export const Header = () => {
  const contextTogglePokemon = useContext(PokemonsToggleContext);

  const handleTypePokemon = (value: string): void => {
    contextTogglePokemon?.setTypePokemon(value);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" />
        <span title="Menu">
          <IconMenuDeep
            data-bs-toggle="collapse"
            data-bs-target="#menuCollapse"
            aria-expanded="false"
            aria-controls="menuCollapse"
          />
        </span>
      </nav>
      <ul
        className={`${styles.navList} accordion-collapse collapse mt-4`}
        id="menuCollapse"
      >
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
    </header>
  );
};
