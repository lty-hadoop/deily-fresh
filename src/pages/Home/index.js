import React, { Component } from 'react'
import { HashRouter, Route } from "react-router-dom";
import HomeView from '../HomeView'		// 首页视图

import Navbar from '../../Components/Navbar'

class Home extends Component {
	render () {
		const configNav = [
		  { text: '首页', url: '/', icon: 'iconshouye'},
		  { text: '分类', url: '/category', icon: 'iconleimupinleifenleileibie'},
		  { text: '购物车', url: '/car', icon: 'icongouwuche2'},
		  { text: '我的', url: '/mine', icon: 'iconwode'}
		]

		return (
		    <HashRouter>
		      <div>
		        <Navbar configNav={configNav} />

				
		        <div>
			        <Route exact path="/" component={HomeView} />
		        </div>

		      </div>
		    </HashRouter>
		  );
	}
  
}

export default Home;