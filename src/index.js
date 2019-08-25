import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';

const App = () => (
    <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
    </BrowserRouter>
);

ReactDom.render(<App />, document.getElementById('app'));
