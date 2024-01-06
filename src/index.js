require('file-loader?name=[name].[ext]!./index.html');
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


// const App = () => {
//  return <h1>💠Welcome to Mer White's Web Site!💠</h1>;
//  }
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
<React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</React.StrictMode>
);