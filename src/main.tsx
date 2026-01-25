import '@/style/null.css';
import '@/style/constants.css';

import App from '@/App';
import { store } from '@/store/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
