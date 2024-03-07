require('file-loader?name=[name].[ext]!./index.html');
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './assets/Organical.ttf'

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
<React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</React.StrictMode>
);