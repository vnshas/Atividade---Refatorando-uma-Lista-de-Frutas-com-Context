import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FruitProvider } from './components/providers/FruitContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FruitProvider>
      <App />
    </FruitProvider>
  </React.StrictMode>
);
