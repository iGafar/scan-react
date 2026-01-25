import '@/style/null.css';
import '@/style/constants.css';

import App from '@/App';
import { store } from '@/store/store';
import * as Sentry from '@sentry/browser';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

Sentry.init({
  dsn: 'https://a34b5b590fc244fdb9dc837852af0a82@app.glitchtip.com/19800',
});

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
