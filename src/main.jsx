import React from 'react';
import ReactDOM from 'react-dom/client';
import Reset from './styles/reset';

import App from './App';
import LabedditProvider from './global/LabedditContext';
import Global from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <LabedditProvider>
      <Global />
      <Reset />
      <App />
  </LabedditProvider>
);

