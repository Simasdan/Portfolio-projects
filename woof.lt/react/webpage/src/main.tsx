import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { hotjar } from 'react-hotjar';
import clarity from '@microsoft/clarity';
import './styles/index.scss';

hotjar.initialize({ id: 5333771, sv: 6 });
clarity.init("qytbhmrul1");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);