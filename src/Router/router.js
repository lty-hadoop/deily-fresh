import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomeView from '../pages/HomeView'      // 首页视图
import ProductDetail from '../pages/ProductDetail'

import Category from '../pages/Category'
import Car from '../pages/Car'
import Mine from '../pages/Mine'

import Navbar from '../Components/Navbar'

export default class IRouter extends React.Component{
    render() {
        return (
            <BrowserRouter>                                    
                <Route path="/" exact component = {HomeView} />
                <Route path='/product/:id' component = { ProductDetail } />
                <Route path='/category' component = { Category } />
                <Route path='/car' component = { Car } />
                <Route path='/mine' component = { Mine } />

                <Route path={['/', '/category', '/car', '/mine']} exact component={Navbar}/>
            </BrowserRouter>
        )
    }
}　　