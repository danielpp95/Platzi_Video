import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import NotFound from './containers/NotFound';

// Router
const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

// DOM
ReactDom.render(<App />, document.getElementById('app'));
