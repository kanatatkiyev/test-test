import { Provider } from 'react-redux';
import { HomePage } from './pages/HomePage';

import { store } from '@/shared/store';

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
