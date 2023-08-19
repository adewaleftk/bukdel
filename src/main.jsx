import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import usePackageStore from './store.js';


const storedUserData = localStorage.getItem('user');
if (storedUserData) {
  const parsedUserData = JSON.parse(storedUserData); // Convert back to object
  usePackageStore.setState({ user: parsedUserData });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
