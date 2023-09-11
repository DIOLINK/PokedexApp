import { logo } from '../../assets/index';
import { listHeader } from '../../utils/index';
import styles from './header.module.scss';
export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" />
        <ul className={styles.navList}>
          {Object.keys(listHeader).map((key, index) => (
            <li className="nav-item" key={key + index}>
              <button
                className={styles.btnHeader}
                style={{
                  backgroundColor: `var(--type-${key})`,
                }}
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
