import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from './components/Navbar';
import App from './App';
import AddStaff from './components/AddStaff';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/*ReactDOM.render(
    <AddStaff />,
    document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

