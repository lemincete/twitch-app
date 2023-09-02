import ReactDOM from 'react-dom/client';

import './styles/index.scss';

import Providers from './providers';


import Router from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Providers>
    <Router />
  </Providers>
)
