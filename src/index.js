require('file-loader?name=[name].[ext]!./index.html')
import {createRoot} from 'react-dom/client';
import React from 'react';
import App from './App';


// const App = () => {
//  return <h1>💠Welcome to Mer White's Web Site!💠</h1>;
//  }
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
// ReactDOM.render(<App />, document.getElementById('app'));