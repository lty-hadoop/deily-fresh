import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './index.css';
import '../public/assets/iconfont/iconfont.css'
import Home from './pages/Home/Home';

import ProductDetail from './pages/ProductDetail/ProductDetail';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
        <Route path='/' component = { Home } />
        <Route path='/product/:id' component = { ProductDetail } />
        <Redirect to={ {pathname: '/home'} } />
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
