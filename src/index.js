
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import MainPage from './components/MainPage';
import * as serviceWorker from './serviceWorker';
import Leaderboard from './components/Leaderboard';

ReactDOM.render(<MainPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();