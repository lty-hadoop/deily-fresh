import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import './index.scss'

class Navbar extends Component {
	render() {
		return (
			<ul className="tabBar">
		          	{
		                this.props.configNav.map((item,i) =>
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