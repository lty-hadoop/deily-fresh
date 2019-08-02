import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'

import Category from '../pages/Category'
import Car from '../pages/Car'
import Mine from '../pages/Mine'

export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact={true} component = { Home } />
                    <Route path='/product/:id' component = { ProductDetail } />
                    <Route path='/category' component = { Category } />
                    <Route path='/car' component = { Car } />
                    <Route path='/mine' component = { Mine } />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }
}　　