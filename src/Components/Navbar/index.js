import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import './index.scss'

class Navbar extends Component {
	render() {
		const configNav = [
		  { text: '首页', url: '/', icon: 'iconshouye'},
		  { text: '分类', url: '/category', icon: 'iconleimupinleifenleileibie'},
		  { text: '购物车', url: '/car', icon: 'icongouwuche2'},
		  { text: '我的', url: '/mine', icon: 'iconwode'}
		]
		return (
			<ul className="tabBar">
		          	{
		                configNav.map((item,i) =>
		                    <li key={i}>
		                    	<NavLink exact to={item.url} activeClassName="active">
			                    	<i className={`icon iconfont ${item.icon}`}></i>
			                    	{item.text}
		                    	</NavLink>
		                    </li>
		                )
	            	}
		        </ul>
		)
	}
}

export default Navbar