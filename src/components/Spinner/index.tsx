import styles from './spinner.module.scss';
export const Spinner = () => {
  return (
    <h1 className={styles.title}>
      Loading...
      <div className={styles.spinnerContainer}>
        <div className={styles.spinnerPokemon} />
      </div>
    </h1>
  );
};
