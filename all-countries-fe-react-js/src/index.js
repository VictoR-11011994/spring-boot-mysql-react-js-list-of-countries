import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// My Style
import './assets/css/style.css';

// Bootstrap CSS / JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Animate CSS
import 'animate.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
