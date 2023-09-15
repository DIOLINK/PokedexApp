import { Layout } from '@/components';
import { AppRouter } from '@/routes/AppRouter';
import '@/styles/index.scss';

export const App = () => (
  <Layout>
    <AppRouter />
  </Layout>
);
