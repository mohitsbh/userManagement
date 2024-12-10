import React from 'react'; // Ensure React is imported in this file
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // For Redux integration
import { store } from './app/store'; // Import your Redux store
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element'); // Ensure root element exists

const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
