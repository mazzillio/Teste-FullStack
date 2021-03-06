import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Palindromo from './components/palindromo';
import Troco from './components/troco';
import Veiculos from './components/veiculo';
import Ceps from './components/ceps'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/palindromo" element ={<Palindromo/>} />
            <Route path="/troco" element={<Troco/>} />
            <Route path="/veiculos" element={<Veiculos/>} />
            <Route path="/ceps" element={<Ceps/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

