import { useRouteError } from 'react-router-dom';
import styles from './error.module.scss';

interface ResponseError {
  message?: string;
  statusText?: string;
}
export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as ResponseError).statusText ||
            (error as ResponseError).message}
        </i>
      </p>
    </div>
  );
};
