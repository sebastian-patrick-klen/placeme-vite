import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Popover from '@radix-ui/react-popover';
import App from './App';
import './index.css';
import { PositionContextProvider } from './store/position-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PositionContextProvider>
      <App />
    </PositionContextProvider>
  </React.StrictMode>
);
