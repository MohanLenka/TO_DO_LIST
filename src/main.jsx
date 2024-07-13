import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ListProvider } from './Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ListProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ListProvider>
)
