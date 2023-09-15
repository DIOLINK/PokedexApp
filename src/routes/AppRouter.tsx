import { ErrorPage, HomePage, PokeInfo } from '@/Views';
import { setRoute } from '@/utils/helpers';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path={setRoute()}
            element={<HomePage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path={setRoute('poke-info/:id')}
            element={<PokeInfo />}
            errorElement={<ErrorPage />}
          />
          <Route path={setRoute('*')} element={<Navigate to={setRoute()} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
