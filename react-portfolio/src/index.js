import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons/faMobile';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons/faEnvelopeSquare';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt';

library.add(
  fab,
  faMobile,
  faEnvelopeSquare,
  faMobileAlt
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
