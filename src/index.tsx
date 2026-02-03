import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router';
import './index.css';
import App from './pages/App';
import ErrorApp from './pages/ErrorApp';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './firebase/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <AuthProvider>
     <ErrorApp />
       <App />
     <ErrorApp />  
    </AuthProvider>
=======
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
>>>>>>> main
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
